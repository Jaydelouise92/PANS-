import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

const TITLE = 'Privacy & Cookies — PANS Victoria';
const DESCRIPTION =
  'How PANS Victoria handles your personal information, what cookies and analytics we use, and your choices.';

export default function Privacy() {
  useEffect(() => {
    document.title = TITLE;
    setMeta('description', DESCRIPTION);
  }, []);

  const reopenBanner = () => {
    try {
      localStorage.removeItem('pans-cookie-consent');
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  return (
    <article className="bg-white">
      <header className="bg-brand-secondary border-b border-purple-100 px-6 pt-28 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-white border border-purple-100 flex items-center justify-center text-brand-primary mb-5">
            <Shield size={22} />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            Privacy and cookies
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            Plain-language explanation of what information we collect, why, and
            what you can do about it.
          </p>
          <p className="text-sm text-stone-500 mt-4">Last updated: May 2026</p>
        </div>
      </header>

      <div className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-stone-800 text-base md:text-lg leading-[1.8] font-serif space-y-5">

          <h2 className="text-2xl font-serif text-stone-900 mt-2 mb-2">Who we are</h2>
          <p>
            PANS Victoria (Parent Advocacy and Navigation Support) is an
            independent service that publishes plain-language information for
            parents in Victoria involved with Child Protection. This website is
            operated from Victoria, Australia.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">What information we collect</h2>
          <p>
            We only collect information you actively send us, plus a small
            amount of anonymous browsing data so we can see whether the site is
            useful.
          </p>
          <p>
            <strong>Information you send us</strong> — when you use the contact
            form, the AI chat, the feedback buttons, or send a story, we
            receive whatever you type. For the contact form that includes your
            name, email and message. The AI chat does not require an account
            and we do not link your conversation to your name unless you tell
            us who you are inside the chat.
          </p>
          <p>
            <strong>Anonymous analytics</strong> — if you accept analytics, we
            use Google Analytics 4 to count visits, see which pages are read
            most, and understand roughly where in Victoria visitors are coming
            from. We do not see your name, address, or any personal detail
            from this. If you decline, no analytics cookies are set.
          </p>
          <p>
            <strong>Technical logs</strong> — like every website, our hosting
            provider records basic request information (IP address, browser
            type, time of request) for short-term security and rate-limiting
            purposes. These logs are not used to profile you.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">Cookies and similar technologies</h2>
          <p>
            A cookie is a small text file that a website stores on your device.
            We use a very small number of them.
          </p>
          <p>
            <strong>Strictly necessary</strong> — we store one local preference
            so we can remember whether you have answered the cookie banner. No
            tracking is involved.
          </p>
          <p>
            <strong>Analytics (only if you accept)</strong> — Google Analytics
            sets cookies named <code>_ga</code> and <code>_ga_*</code> to count
            unique visitors and sessions. They expire after up to two years.
            If you decline, these cookies are never created.
          </p>
          <p>
            You can change your mind at any time by clicking the button at the
            bottom of this page to reopen the cookie banner. You can also
            block or delete cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">How we use your information</h2>
          <p>
            We use information you send us only to reply to you, improve the
            service, and keep the site safe from abuse. Contact-form messages
            arrive in a small private mailbox monitored by the PANS team.
            Feedback on AI replies helps us improve the assistant. We do not
            sell, rent or trade your information to anyone.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">Who can see your information</h2>
          <p>
            Within PANS, only people who need to read your message do so.
            Beyond PANS, we use a small number of trusted providers to run
            the site:
          </p>
          <p>
            Google (Gemini API for the AI chat and voice assistant, and Google
            Analytics if you have accepted analytics); Gmail (to deliver
            contact-form emails to us); and our hosting provider (which
            handles ordinary web traffic). Each of these providers has their
            own privacy terms. We do not give them access to anything beyond
            what is needed to run the corresponding feature.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">How long we keep things</h2>
          <p>
            Contact-form messages are kept for as long as needed to support
            you, then deleted. AI chat conversations are not stored on our
            servers after you leave the page (your browser keeps them locally
            only while the chat is open). Analytics data is retained inside
            Google Analytics for up to fourteen months and is anonymous.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">Your rights</h2>
          <p>
            Under the Australian Privacy Act, you can ask us what personal
            information we hold about you, ask us to correct it, or ask us to
            delete it. You can do this by emailing us through the{' '}
            <Link to="/contact" className="text-brand-primary underline">
              contact page
            </Link>. If you are not happy with how we handle a request, you
            can contact the Office of the Australian Information Commissioner
            at <a className="text-brand-primary underline" href="https://www.oaic.gov.au" target="_blank" rel="noreferrer">oaic.gov.au</a>.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">Children</h2>
          <p>
            This website is written for parents and other adult family members.
            It is not designed for use by children. If a child has sent us
            information directly, please get in touch and we will delete it.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">Important reminder</h2>
          <p>
            PANS provides general information only. Nothing on this site is
            legal advice. For advice about your specific situation, contact
            <strong> Victoria Legal Aid on 1300 792 387</strong>. If you are in
            crisis, call <strong>Lifeline on 13 11 14</strong>.
          </p>

          <h2 className="text-2xl font-serif text-stone-900 mt-8 mb-2">Changes to this notice</h2>
          <p>
            If we make a meaningful change to how we handle information, we
            will update the date at the top of this page and, where
            appropriate, ask you again about cookies.
          </p>

          <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap gap-4 items-center">
            <button
              type="button"
              onClick={reopenBanner}
              className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition"
            >
              Change my cookie choice
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline">
              Contact PANS about privacy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
