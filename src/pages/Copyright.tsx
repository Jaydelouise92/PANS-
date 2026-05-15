import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, AlertTriangle } from 'lucide-react';

export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-4 shadow-sm">
            <Shield size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 block">Copyright Notice</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-5">
            Copyright &amp; Content Protection
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Everything on PANS Victoria — words, guides, articles, illustrations, layouts and original videos — has been written and built by hand for the parents this service supports.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-stone max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Ownership</h2>
            <p className="text-stone-700 leading-relaxed">
              © {year} PANS Victoria — Parent Advocacy, Navigation &amp; Support.
              All written content, original illustrations, page layouts, guides,
              article text, the founder's story, and original video scenes
              published on <strong>pansvic.replit.app</strong> are the intellectual
              property of PANS Victoria and its founder. All rights reserved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What you may do</h2>
            <ul className="space-y-2 text-stone-700">
              <li>• Read, save, print and share PANS guides for your own personal use as a parent or supporter.</li>
              <li>• Share a link to any PANS page with another parent, lawyer, or community worker.</li>
              <li>• Quote a short passage from a guide if you clearly credit "PANS Victoria — pansvic.replit.app" and link back to the source page.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">What is not allowed</h2>
            <p className="text-stone-700 leading-relaxed mb-3">
              Without prior written permission from PANS Victoria, you may not:
            </p>
            <ul className="space-y-2 text-stone-700">
              <li>• Copy, republish, or rehost PANS content on another website, blog, app, social media account, or print publication.</li>
              <li>• Use PANS content (in whole or in part) to train, fine-tune, or evaluate AI or machine-learning systems.</li>
              <li>• Repackage PANS guides as your own service, ebook, course, or paid product.</li>
              <li>• Modify PANS content and present the altered version as accurate information about Victorian Child Protection law or process.</li>
              <li>• Use the PANS name, logo, or brand colours to suggest endorsement, partnership or affiliation that does not exist.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-3">Quoting and citing PANS</h2>
            <p className="text-stone-700 leading-relaxed">
              Lawyers, support workers, journalists and academics are welcome to
              quote short excerpts where this would help parents. Please cite as:
              <em className="block mt-2 not-italic bg-brand-secondary border border-purple-100 rounded-xl p-4 text-sm">
                PANS Victoria — Parent Advocacy, Navigation &amp; Support ({year}).
                <em>[Page title]</em>. Retrieved from https://pansvic.replit.app
              </em>
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3 items-start">
            <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 leading-relaxed">
              <p className="font-semibold mb-1">Reporting unauthorised use</p>
              <p>
                If you believe PANS content has been copied or republished without permission — including by AI summarisers, content farms or other websites — please let us know. We take protection of this work seriously because parents rely on it being accurate and trusted.
              </p>
            </div>
          </div>

          <div className="bg-brand-secondary border border-purple-100 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-primary shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="font-bold text-stone-800 mb-1">Permission &amp; takedown requests</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-2">
                Email <a href="mailto:ourvoicemattersaus@gmail.com" className="text-brand-primary font-semibold">ourvoicemattersaus@gmail.com</a> with the page or content concerned and how it has been used. We aim to reply within a few business days.
              </p>
              <Link to="/contact" className="text-brand-primary font-semibold text-sm hover:underline">
                Or use the contact form →
              </Link>
            </div>
          </div>

          <p className="text-stone-500 text-sm leading-relaxed border-t border-stone-200 pt-6">
            Third-party trademarks (DFFH, Victoria Legal Aid, Lifeline, Parentline, Children's Court of Victoria) are the property of their respective owners and are referenced here for informational purposes only. PANS Victoria is independent and not affiliated with any government department, court, or law firm.
          </p>
        </div>
      </section>
    </div>
  );
}
