#!/usr/bin/env python3
"""
Backend Testing Suite for PANS Victoria
Tests all API endpoints with comprehensive scenarios
"""

import requests
import sys
import json
import time
from datetime import datetime
from typing import Dict, Any

# Configuration
BASE_URL = "https://9adadd97-aa8f-44ac-8dfc-22302e500ee4.preview.emergentagent.com"  # From review request
TIMEOUT = 30  # seconds

class PANSAPITester:
    def __init__(self, base_url: str = BASE_URL):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []
        self.session_id = f"test_session_{int(time.time())}"

    def log_result(self, test_name: str, status: str, details: str = "", response_data: Any = None):
        """Log test result"""
        result = {
            "test_name": test_name,
            "status": status,  # "PASS" or "FAIL"
            "details": details,
            "response_data": response_data,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        self.tests_run += 1
        if status == "PASS":
            self.tests_passed += 1
            print(f"✅ {test_name}: {details}")
        else:
            print(f"❌ {test_name}: {details}")

    def run_test(self, name: str, method: str, endpoint: str, expected_status: int, 
                 data: Dict = None, headers: Dict = None) -> tuple[bool, Any]:
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        
        if headers is None:
            headers = {'Content-Type': 'application/json'}
        
        try:
            print(f"\n🔍 Testing {name}...")
            print(f"   URL: {url}")
            
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=TIMEOUT)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=TIMEOUT)
            else:
                raise ValueError(f"Unsupported method: {method}")
            
            print(f"   Response Status: {response.status_code}")
            
            # Parse response data
            try:
                response_data = response.json()
            except:
                response_data = response.text
            
            success = response.status_code == expected_status
            if success:
                self.log_result(name, "PASS", f"Status: {response.status_code}", response_data)
            else:
                self.log_result(name, "FAIL", f"Expected {expected_status}, got {response.status_code}", response_data)
            
            return success, response_data
            
        except Exception as e:
            error_msg = f"Request failed: {str(e)}"
            self.log_result(name, "FAIL", error_msg)
            print(f"   ❌ Exception: {error_msg}")
            return False, {}

    def test_health_check(self):
        """Test health check endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "/api/health",
            200
        )
        
        if success:
            # Verify response structure
            if isinstance(response, dict) and "status" in response:
                if response["status"] == "healthy":
                    self.log_result("Health Check Structure", "PASS", "Healthy status confirmed")
                else:
                    self.log_result("Health Check Structure", "FAIL", f"Unexpected status: {response.get('status')}")
            else:
                self.log_result("Health Check Structure", "FAIL", "Missing status field")
        
        return success

    def test_contact_form_success(self):
        """Test successful contact form submission"""
        contact_data = {
            "first_name": "Test",
            "last_name": "User", 
            "email": "test.user@example.com",
            "message": "This is a test message for PANS Victoria contact form validation."
        }
        
        success, response = self.run_test(
            "Contact Form - Valid Submission",
            "POST",
            "/api/contact",
            200,
            data=contact_data
        )
        
        if success:
            # Verify response structure
            if isinstance(response, dict):
                if response.get("status") == "success" and "contact_id" in response:
                    self.log_result("Contact Form Response Structure", "PASS", 
                                  f"Contact ID: {response.get('contact_id')}")
                    return True, response.get('contact_id')
                else:
                    self.log_result("Contact Form Response Structure", "FAIL", 
                                  "Missing success status or contact_id")
            else:
                self.log_result("Contact Form Response Structure", "FAIL", 
                              "Invalid response format")
        
        return False, None

    def test_contact_form_validation(self):
        """Test contact form with invalid data"""
        # Test missing required field
        invalid_data = {
            "first_name": "Test",
            # missing last_name
            "email": "invalid-email",  # invalid email format
            "message": ""  # empty message
        }
        
        success, response = self.run_test(
            "Contact Form - Invalid Data",
            "POST", 
            "/api/contact",
            422,  # Validation error expected
            data=invalid_data
        )
        
        if success:
            self.log_result("Contact Form Validation", "PASS", "Properly rejected invalid data")
        else:
            # Sometimes servers return 400 instead of 422 for validation errors
            # Let's also test with completely empty data
            empty_data = {}
            success2, response2 = self.run_test(
                "Contact Form - Empty Data",
                "POST",
                "/api/contact", 
                422,
                data=empty_data
            )
            if not success2:
                self.log_result("Contact Form Validation", "FAIL", 
                              "Should reject invalid/empty data")

    def test_chat_functionality(self):
        """Test AI chat assistant"""
        chat_data = {
            "session_id": self.session_id,
            "message": "What is PANS Victoria?",
            "history": []
        }
        
        success, response = self.run_test(
            "AI Chat - Basic Question",
            "POST",
            "/api/chat",
            200,
            data=chat_data
        )
        
        if success:
            if isinstance(response, dict) and "response" in response:
                response_text = response.get("response", "")
                if len(response_text) > 10:  # Basic sanity check
                    self.log_result("AI Chat Response Quality", "PASS", 
                                  f"Response length: {len(response_text)} chars")
                    
                    # Test follow-up message with history
                    time.sleep(2)  # AI responses can be slow
                    return self.test_chat_with_history(response_text)
                else:
                    self.log_result("AI Chat Response Quality", "FAIL", 
                                  "Response too short or empty")
            else:
                self.log_result("AI Chat Response Structure", "FAIL", 
                              "Missing response field")
        
        return success

    def test_chat_with_history(self, previous_response: str):
        """Test chat with conversation history"""
        chat_data = {
            "session_id": self.session_id,
            "message": "Can you tell me more about the court process?",
            "history": [
                {"role": "user", "text": "What is PANS Victoria?"},
                {"role": "model", "text": previous_response}
            ]
        }
        
        success, response = self.run_test(
            "AI Chat - With History",
            "POST",
            "/api/chat",
            200,
            data=chat_data
        )
        
        if success:
            if isinstance(response, dict) and "response" in response:
                response_text = response.get("response", "")
                if len(response_text) > 10:
                    self.log_result("AI Chat History Context", "PASS", 
                                  "Successfully handled conversation history")
                    return True
                else:
                    self.log_result("AI Chat History Context", "FAIL", 
                                  "Poor response with history")
            else:
                self.log_result("AI Chat History Context", "FAIL", 
                              "Invalid response format with history")
        
        return False

    def test_chat_error_handling(self):
        """Test chat with invalid data"""
        # Test with missing required fields
        invalid_chat_data = {
            "session_id": self.session_id,
            # missing message field
            "history": []
        }
        
        success, response = self.run_test(
            "AI Chat - Invalid Data",
            "POST",
            "/api/chat",
            422,  # Validation error expected
            data=invalid_chat_data
        )
        
        if success:
            self.log_result("AI Chat Error Handling", "PASS", 
                          "Properly handled invalid data")
        else:
            self.log_result("AI Chat Error Handling", "FAIL", 
                          "Should reject invalid chat data")

    def run_comprehensive_tests(self):
        """Run all backend tests"""
        print("🚀 Starting PANS Victoria Backend API Testing")
        print(f"📡 Testing endpoint: {self.base_url}")
        print("=" * 60)
        
        # Test 1: Health Check
        self.test_health_check()
        
        # Test 2: Contact Form - Success Case
        self.test_contact_form_success()
        
        # Test 3: Contact Form - Validation
        self.test_contact_form_validation()
        
        # Test 4: AI Chat Functionality
        print("\n⏳ Testing AI Chat (this may take a few seconds)...")
        self.test_chat_functionality()
        
        # Test 5: Chat Error Handling
        self.test_chat_error_handling()
        
        # Print Results
        print("\n" + "=" * 60)
        print("📊 TEST RESULTS SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed / self.tests_run * 100):.1f}%" if self.tests_run > 0 else "N/A")
        
        # Print failed tests
        failed_tests = [test for test in self.test_results if test["status"] == "FAIL"]
        if failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in failed_tests:
                print(f"   • {test['test_name']}: {test['details']}")
        
        return self.tests_passed == self.tests_run

def main():
    """Main test execution"""
    tester = PANSAPITester()
    
    try:
        all_passed = tester.run_comprehensive_tests()
        
        # Save detailed results
        results_file = f"/app/backend_test_results_{int(time.time())}.json"
        with open(results_file, 'w') as f:
            json.dump({
                "summary": {
                    "total_tests": tester.tests_run,
                    "passed": tester.tests_passed,
                    "failed": tester.tests_run - tester.tests_passed,
                    "success_rate": (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
                },
                "test_results": tester.test_results,
                "endpoint": tester.base_url,
                "timestamp": datetime.now().isoformat()
            }, f, indent=2)
        
        print(f"\n📄 Detailed results saved to: {results_file}")
        
        return 0 if all_passed else 1
        
    except KeyboardInterrupt:
        print("\n\n⚠️ Tests interrupted by user")
        return 1
    except Exception as e:
        print(f"\n\n💥 Unexpected error during testing: {str(e)}")
        return 1

if __name__ == "__main__":
    sys.exit(main())