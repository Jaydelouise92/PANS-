import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Go to the local dev server
        try:
            await page.goto("http://localhost:5000", wait_until="networkidle", timeout=30000)
        except Exception as e:
            print(f"Failed to load page: {e}")
            await browser.close()
            return

        # Clear cookie banner
        try:
            cookie_button = page.get_by_role("button", name="Essential only")
            if await cookie_button.is_visible():
                await cookie_button.click()
                print("Cookie banner cleared.")
        except:
            pass

        # Click the chat toggle button
        chat_toggle = page.get_by_role("button", name="Chat with PANS")
        await chat_toggle.click()

        # Check if chat widget is open (look for header)
        header = page.get_by_text("PANS Assistant", exact=True)
        if await header.is_visible():
            print("Chat widget opened successfully.")
        else:
            print("Chat widget failed to open.")
            await page.screenshot(path="chat_error.png")
            await browser.close()
            return

        # Verify initial assistant message
        initial_msg = page.get_by_text("Hello. I'm the PANS assistant", exact=False).first
        if await initial_msg.is_visible():
            print("Initial assistant message is visible.")
        else:
            print("Initial message not found.")

        # Take a screenshot
        await page.screenshot(path="chat_verified.png")
        print("Screenshot saved as chat_verified.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
