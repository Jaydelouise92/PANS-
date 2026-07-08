import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import VideoTemplate from '../components/video/VideoTemplate';
import {
  ArrowRight,
  Clock,
  Scale,
  BookOpen,
  Shield,
  Heart,
  Phone,
  AlertTriangle,
  Users,
  FileText,
  MessageSquare,
  Map,
  CheckCircle2,
  Sparkles,
  Accessibility,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

export default function Home() {
  return (
    <div className="bg-brand-secondary">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="w-full pt-24 md:pt-28 pb-16 md:pb-24 px-6 bg-gradient-to-b from-[#F4EEFB] via-brand-secondary to-white"
        aria-label="PANS Victoria, a supportive welcome to parents"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div {...fadeIn}>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-primary bg-white border border-purple-100 rounded-full px-3 py-1 mb-6 shadow-sm">
              <Sparkles size={14} aria-hidden="true" />
              Free · Independent · Parent-led
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1] mb-5">
              You do not have to face Child Protection alone.
            </h1>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-xl">
              Free, independent advocacy and plain-language support for parents
              across Victoria, including rural and regional communities. If you're scared or lost right now, you're not on your own. We're parents helping parents, one step at a time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-7 py-4 rounded-full font-semibold hover:bg-brand-primary/90 transition inline-flex items-center gap-2 shadow-lg shadow-brand-primary/25"
              >
                Get Support <ArrowRight size={18} />
              </Link>
              <Link
                to="/parent-rights"
                className="bg-white border border-brand-primary text-brand-primary px-7 py-4 rounded-full font-semibold hover:bg-brand-soft transition inline-flex items-center gap-2"
              >
                Know Your Rights
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-brand-primary bg-white/70 border border-purple-100 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              Written by a Victorian parent with lived experience, not by AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-accent/30 rounded-[2rem] blur-2xl" aria-hidden="true" />
            <img
              src="/checklist-notebook.png"
              alt="A parent quietly reviewing documents and notes at a kitchen table, in a soft and calm setting"
              loading="eager"
              width="800"
              height="600"
              className="relative w-full rounded-[2rem] shadow-xl object-cover aspect-[4/3] border border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 1b. Welcome video (always shown) ─────────────────────── */}
      <section
        className="w-full px-4 md:px-6 py-12 md:py-16 bg-white border-y border-stone-200"
        aria-label="A short welcome video from PANS Victoria"
      >
        <div className="max-w-5xl mx-auto text-center mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-2">
            A message for parents
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
            Watch our short welcome
          </h2>
          <p className="text-stone-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            A two-minute introduction to PANS Victoria, from one parent to another.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-purple-100 bg-black">
            <VideoTemplate />
          </div>
        </div>
      </section>

      {/* ── 2. What is PANS — H2 + intro paragraph ─────────────── */}
      <section className="px-6 py-16 md:py-20 bg-white border-y border-stone-200">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
              About PANS Victoria
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-5 leading-tight">
              Child Protection Victoria help and support for parents
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-3">
              <strong>PANS Victoria</strong> is a free, independent parental
              advocacy and information service for parents across Victoria,
              Australia who are involved with Child Protection, the Department
              of Families, Fairness and Housing (DFFH), or the{' '}
              <Link to="/childrens-court" className="text-brand-primary underline">Children's Court of Victoria</Link>.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-3">
              We provide practical, plain-language support to help parents
              understand the Child Protection process, know their{' '}
              <Link to="/parent-rights" className="text-brand-primary underline">rights</Link>,
              prepare for meetings and court, explore appeals and reviews, and
              make informed decisions about what to do next.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Our goal is to help parents become informed, self-reliant
              advocates for themselves and their children.
            </p>
            <div className="mt-6 flex gap-5 flex-wrap">
              <Link to="/about" className="text-brand-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                About PANS <ArrowRight size={16} />
              </Link>
              <Link to="/founder" className="text-stone-600 font-medium inline-flex items-center gap-2 hover:text-brand-primary transition-colors">
                Meet the Founder <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/about-hero.png"
              alt="A parent and child walking a calm path together, symbolising the supportive Child Protection navigation provided by PANS Victoria"
              loading="lazy"
              width="800"
              height="600"
              className="w-full rounded-3xl shadow-md object-cover max-h-96"
            />
          </div>
        </motion.div>
      </section>

      {/* ── 3. How We Help ─────────────────────────────────────── */}
      <section className="px-6 py-20 bg-brand-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              How we help
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
              Practical support at every step
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Whether it's your first phone call from Child Protection or your
              tenth court date, we meet you where you are.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <HelpCard
              to="/system-explained"
              icon={<BookOpen size={22} />}
              title="Understand Child Protection"
              description="Plain-language guides to the DFFH process, from the first notification all the way through to case closure or reunification."
            />
            <HelpCard
              to="/parent-rights"
              icon={<Shield size={22} />}
              title="Know Your Rights"
              description="What you can ask for, what you can refuse, and what Child Protection must tell you."
            />
            <HelpCard
              to="/how-it-works"
              icon={<MessageSquare size={22} />}
              title="Prepare for Meetings"
              description="Know what to bring, what to ask, and how to make sure your voice is heard at case planning meetings."
            />
            <HelpCard
              to="/childrens-court"
              icon={<Scale size={22} />}
              title="Children's Court Support"
              description="Hearing types, common orders and a step-by-step day-of-court guide for parents in Victoria."
            />
            <HelpCard
              to="/resources"
              icon={<FileText size={22} />}
              title="Appeals and Reviews"
              description="Information on internal reviews, complaints and appeal pathways when you disagree with a decision."
            />
            <HelpCard
              to="/start-here"
              icon={<Map size={22} />}
              title="Regional and Rural Support"
              description="The same plain-language guidance, no matter where in Victoria you live. Built with regional parents in mind."
            />
            <HelpCard
              to="/parent-rights"
              icon={<Users size={22} />}
              title="Parent Self-Advocacy"
              description="Practical tools to help you speak up for yourself and your family with confidence."
            />
            <HelpCard
              to="/resources"
              icon={<Sparkles size={22} />}
              title="Plain-Language Resources"
              description="Printable guides, checklists and articles written for parents under stress, with no jargon and no lectures."
            />
            <HelpCard
              to="/disability-rights"
              icon={<Accessibility size={22} />}
              title="Disability Rights & Reasonable Adjustments"
              description="Help understanding the Charter and asking for the adjustments you need from Child Protection."
            />
          </div>
        </div>
      </section>

      {/* ── 4. Why Parents Trust PANS Victoria ─────────────────── */}
      <section className="px-6 py-20 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              Why parents trust us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              Built by a parent, for parents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <CheckCircle2 size={22} />,
                title: 'Free and independent',
                desc: 'Always free to use. Not government-funded and not affiliated with DFFH. Always on the parent\u2019s side.',
              },
              {
                icon: <Heart size={22} />,
                title: 'Parent-led and lived experience',
                desc: 'Created by a parent who has personally been through the Child Protection system in Victoria.',
              },
              {
                icon: <Shield size={22} />,
                title: 'Trauma-informed and respectful',
                desc: 'Calm, non-judgmental support that respects how hard this process can be on families.',
              },
              {
                icon: <BookOpen size={22} />,
                title: 'Practical, plain-language guidance',
                desc: 'No jargon. Written so you can read it at the worst moment of your week and still understand it.',
              },
              {
                icon: <Map size={22} />,
                title: 'Support across all of Victoria',
                desc: 'Online guides built with rural and regional parents in mind, not just metropolitan Melbourne.',
              },
              {
                icon: <Sparkles size={22} />,
                title: 'Focused on empowering parents',
                desc: 'Everything we do is designed to help you become a more informed, self-reliant advocate for your family.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-brand-secondary border border-purple-100 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-brand-primary flex items-center justify-center mb-4 border border-purple-100 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4b. Know Your Rights ───────────────────────────────── */}
      <section className="px-6 py-20 bg-brand-secondary">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              Know your rights
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-5 leading-tight">
              You have the right to be treated fairly and to be heard.
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-4">
              Parents involved with Child Protection have the right to be
              treated fairly, to be heard, to receive clear information, and to
              have meaningful opportunities to participate in decisions
              affecting their children.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              PANS Victoria explains your rights in plain language and helps
              you understand how to raise concerns, request reviews, and
              advocate effectively.
            </p>
            <Link
              to="/parent-rights"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition shadow-lg shadow-brand-primary/20"
            >
              Read the Rights Guide <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              'Right to be treated fairly and respectfully',
              'Right to be heard and to participate in decisions',
              'Right to clear information in plain language',
              'Right to a lawyer through Victoria Legal Aid',
              'Right to attend case meetings and see most reports',
              'Right to disagree and ask for a review',
            ].map((r) => (
              <div key={r} className="bg-white border border-purple-100 rounded-xl px-5 py-3 flex items-center gap-3 shadow-sm">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0" aria-hidden="true" />
                <span className="text-stone-800 text-sm font-medium">{r}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 4c. Disability Rights teaser ───────────────────────── */}
      <section className="px-6 py-20 bg-white border-y border-stone-200">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto bg-gradient-to-br from-brand-soft to-white border border-purple-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-primary flex items-center justify-center mb-4 border border-purple-100 shadow-sm">
                <Accessibility size={26} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-2">
                Disability Rights
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">
                Rights of Parents and Carers with Disabilities
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-stone-700 leading-relaxed mb-4">
                PANS Victoria recognises the <strong>Charter of Rights for Parents and Carers with Disabilities Involved with Child Protection</strong> in Victoria.
              </p>
              <p className="text-stone-700 leading-relaxed mb-5">
                Parents and carers with disabilities have the right to participate, be heard and be included; to be treated with dignity and respect; to receive information in accessible formats; to have a support person at meetings and court; to request reasonable adjustments; to receive honest and transparent communication; to be treated fairly and without discrimination; and to make complaints without fear of reprisal.
              </p>
              <p className="text-stone-700 leading-relaxed mb-6">
                PANS Victoria can help parents understand these rights, request adjustments, and advocate for fair treatment.
              </p>
              <Link
                to="/disability-rights"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition shadow-lg shadow-brand-primary/20"
              >
                Learn About Disability Rights <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 5. Start Here ──────────────────────────────────────── */}
      <section className="px-6 py-16">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Start here: first steps for parents
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            If you're not sure where to begin, these three pages are the most important place to start.
          </p>

          <div className="space-y-4">
            <StartCard
              to="/start-here"
              title="Find your stage"
              description="Tell us where you are in the process (investigation, case plan, court, removal or reunification) and we'll show you the most relevant guides."
            />
            <StartCard
              to="/first-48-hours"
              title="First 48 hours after Child Protection contact"
              description="What to do straight after DFFH Child Protection contacts you. Calm, step-by-step, written for stressed parents."
              icon={<Clock size={20} />}
            />
            <StartCard
              to="/parent-rights"
              title="Parents' rights in Child Protection cases (Victoria)"
              description="What you are entitled to during investigation, case management and at the Children's Court."
              icon={<Scale size={20} />}
            />
          </div>
        </motion.div>
      </section>

      {/* ── 6. Key guides ──────────────────────────────────────── */}
      <section className="bg-white border-y border-stone-200 px-6 py-16">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-3 text-center">
            Key guides for parents in Victoria
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-10">
            The areas parents most often need help understanding.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <GuideCard
              to="/system-explained"
              icon={<BookOpen size={20} />}
              title="Child Protection Victoria: the process explained"
              description="A plain-language overview of how the Child Protection (DFFH) system works in Victoria, from notification through to case closure or reunification."
            />
            <GuideCard
              to="/childrens-court"
              icon={<Shield size={20} />}
              title="Children's Court Victoria guide"
              description="Hearing types, common court orders, and what to expect at the Children's Court of Victoria."
            />
            <GuideCard
              to="/parent-rights"
              icon={<Scale size={20} />}
              title="Parents' rights in Child Protection Victoria"
              description="What you can ask for, what you can refuse, and what Child Protection must tell you."
            />
            <GuideCard
              to="/supervised-contact"
              icon={<Users size={20} />}
              title="Supervised contact in Victoria"
              description="How supervised visits work, who is in the room, and what helps them go well."
            />
            <GuideCard
              to="/self-represented"
              icon={<FileText size={20} />}
              title="Self-represented parent guide (Victoria)"
              description="Practical preparation if you have to appear at the Children's Court without a lawyer."
            />
            <GuideCard
              to="/emotional-impact"
              icon={<Heart size={20} />}
              title="Emotional impact of child removal"
              description="What you might be feeling, why it is normal, and where to get mental health support."
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline">
              View all support resources <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 7. Testimonials ────────────────────────────────────── */}
      <section className="px-6 py-20 bg-brand-secondary">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              What parents are saying
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-3">
              From parents across Victoria
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Comments shared with PANS by parents who have used the service. Names changed and identifying details removed to protect privacy.
            </p>
          </motion.div>

          {/* Short impact quotes */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              'For the first time, I understood what was happening and what I could do next.',
              'I finally felt heard and better prepared for court.',
              'PANS Victoria helped me feel less alone.',
            ].map((q) => (
              <blockquote
                key={q}
                className="bg-white border border-purple-100 rounded-2xl p-6 text-stone-800 font-serif text-lg italic leading-snug shadow-sm"
              >
                "{q}"
              </blockquote>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                quote: "I was a complete mess after the first phone call from Child Protection. PANS broke it down for me, what each meeting was, what I could ask for, what to bring. I stopped feeling like the whole thing was happening to me and started feeling like I could actually take part in it.",
                name: 'Sarah',
                location: 'Bendigo region (regional Victoria)',
              },
              {
                quote: "Living three hours from a Legal Aid office, I had no one to ask the basic questions. The First 48 Hours guide and the court terms page were the first plain English explanations I'd seen anywhere. I printed them out and took them to my lawyer.",
                name: 'Megan',
                location: 'Latrobe Valley (regional Victoria)',
              },
              {
                quote: "When my son was put on a Family Reunification Order I didn't even know what that meant. PANS explained the order, what supervised contact would actually look like, and what I needed to do for my case plan. It is the only place that talks to parents like adults.",
                name: 'Hayley',
                location: 'Mildura region (regional Victoria)',
              },
              {
                quote: "I went to my first case planning meeting feeling like everyone in the room knew the rules except me. The meeting prep guide gave me the language I needed and helped me write down what I wanted to say. I left that meeting feeling heard for the first time.",
                name: 'Tania',
                location: 'Northern suburbs, Melbourne (metro)',
              },
            ].map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-purple-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition"
              >
                <Heart size={18} className="text-brand-primary mb-3" aria-hidden="true" />
                <blockquote className="text-stone-700 leading-relaxed text-sm flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-purple-100">
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.location}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <p className="text-xs text-stone-500 text-center mt-8 max-w-2xl mx-auto">
            Comments shared with permission. First names and locations have been generalised. PANS never publishes identifying details about a parent or child without explicit written consent.
          </p>
        </div>
      </section>

      {/* ── 8. FAQ ─────────────────────────────────────────────── */}
      <section className="px-6 py-20 bg-white border-y border-stone-200">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
              Frequently asked
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              Common questions from parents
            </h2>
          </div>

          <div className="space-y-4">
            <Faq
              question="What does PANS Victoria do?"
              answer="PANS Victoria is a free, independent advocacy and navigation service for parents involved with Child Protection (DFFH) or the Children's Court of Victoria. We help you understand the process, know your rights, prepare for meetings and court, and work out your next step in plain language."
              link={{ to: '/about', label: 'About PANS Victoria' }}
            />
            <Faq
              question="Is the service free?"
              answer="Yes. Every guide, every reply and every page on this site is free to use. PANS Victoria is parent-led and unfunded, and we will never ask you for payment to access information or support."
              link={{ to: '/funding', label: 'How PANS is funded' }}
            />
            <Faq
              question="Can you help with Children's Court?"
              answer="Yes. We help you understand hearing types, common court orders, what to expect on the day, and how to prepare. PANS does not provide legal representation. For that, contact Victoria Legal Aid on 1300 792 387."
              link={{ to: '/childrens-court', label: "Children's Court guide" }}
            />
            <Faq
              question="Can you help with appeals and reviews?"
              answer="Yes. We can help you understand the internal review and appeal pathways available, including who to write to, what to include, and where to get free legal advice."
              link={{ to: '/resources', label: 'See appeals and review resources' }}
            />
            <Faq
              question="Do you support regional Victoria?"
              answer="Absolutely. PANS Victoria was built with rural and regional parents in mind. Every guide is online and printable, and we focus on the questions parents in regional and rural communities tell us they need answered."
              link={{ to: '/contact', label: 'Contact PANS' }}
            />
            <Faq
              question="Are you independent from Child Protection and DFFH?"
              answer="Yes. PANS Victoria is fully independent. We are not government-funded, not run by DFFH, and have no formal connection to Child Protection. We are a parent-led service that exists to support parents."
              link={{ to: '/about', label: 'About PANS' }}
            />
            <Faq
              question="What if I have a disability and need support to participate?"
              answer="Parents and carers with disabilities have specific rights under the Charter, including the right to reasonable adjustments, accessible information and a support person at meetings and court. PANS Victoria can help you understand these rights and ask for what you need."
              link={{ to: '/disability-rights', label: 'Learn about Disability Rights' }}
            />
            <Faq
              question="Is PANS Victoria a law firm?"
              answer="No. PANS provides general information and navigation support only. We are not lawyers and we do not give legal advice. For legal advice, contact Victoria Legal Aid on 1300 792 387."
              link={{ to: '/about', label: 'About PANS Victoria' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── 9. Final CTA ───────────────────────────────────────── */}
      <section className="px-6 py-20">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto bg-gradient-to-br from-brand-primary to-[#5f5078] text-white rounded-3xl p-10 md:p-14 text-center shadow-xl"
        >
          <Sparkles size={28} className="mx-auto mb-4 opacity-80" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Take the next step with confidence.
          </h2>
          <p className="text-white/90 leading-relaxed max-w-xl mx-auto mb-8">
            Whatever stage you're at, first phone call, case meeting, court date or appeal, PANS Victoria is here to walk through it with you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-soft transition inline-flex items-center gap-2 shadow-lg"
            >
              Contact PANS Victoria <ArrowRight size={18} />
            </Link>
            <Link
              to="/parent-feedback"
              className="border border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              Share your feedback
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── 10. Crisis support ─────────────────────────────────── */}
      <section className="px-6 pb-14 bg-white border-t border-stone-200 pt-14">
        <div className="max-w-3xl mx-auto bg-brand-secondary border border-purple-100 rounded-2xl p-6 md:p-8 text-center">
          <Phone size={24} className="text-brand-primary mx-auto mb-3" />
          <h2 className="text-2xl font-serif text-stone-900 mb-2">
            If you need to talk to someone now
          </h2>
          <p className="text-stone-700 leading-relaxed mb-6">
            For legal advice, contact <a href="tel:1300792387" className="font-bold hover:underline">Victoria Legal Aid on 1300 792 387</a>.
            <br />
            If you are in crisis or need someone to talk to, call{' '}
            <a href="tel:131114" className="font-bold hover:underline">Lifeline on 13 11 14</a> (24 hours, every day).
          </p>
          <Link
            to="/mental-health"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
          >
            More crisis and mental health support <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── 11. Disclaimer ─────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-10">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> PANS Victoria provides general information
            and navigation support only. Nothing on this website is legal advice.
            For legal representation or advice about your specific situation,
            please contact <a href="tel:1300792387" className="font-bold hover:underline text-amber-950">Victoria Legal Aid on 1300 792 387</a> or your nearest community legal centre.
          </p>
        </div>
      </section>

      {/* ── FAQ structured data for Google ─────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does PANS Victoria do?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "PANS Victoria is a free, independent advocacy and navigation service for parents involved with Child Protection (DFFH) or the Children's Court of Victoria. We help you understand the process, know your rights, prepare for meetings and court, and work out your next step in plain language.",
                },
              },
              {
                '@type': 'Question',
                name: 'Is the service free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Every guide and every page on this site is free to use. PANS Victoria is parent-led and unfunded, and we will never ask you for payment to access information or support.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can PANS Victoria help with appeals?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. PANS Victoria can help you understand the internal review and appeal pathways available, including who to write to, what to include, and where to get free legal advice.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does PANS Victoria support regional Victoria?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. PANS Victoria was built with rural and regional parents in mind. Every guide is online and printable, and we focus on the questions parents in regional Victoria tell us they need answered.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are my rights as a parent in a Child Protection case?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You have the right to a lawyer (free through Victoria Legal Aid), to be told what concerns Child Protection has, to attend case meetings, to see most reports about you, and to disagree at court.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is PANS Victoria a law firm?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. PANS provides general information and navigation support only. We are not lawyers and we do not give legal advice. For legal advice, contact Victoria Legal Aid on 1300 792 387.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}

// ── Reusable card components ──────────────────────────────────
function HelpCard({
  to,
  icon,
  title,
  description,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="group block bg-white border border-purple-100 rounded-2xl p-6 hover:border-brand-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition">
        {icon}
      </div>
      <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
        {title}
        <ArrowRight
          size={16}
          className="text-brand-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
        />
      </h3>
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}

function StartCard({
  to,
  title,
  description,
  icon,
}: {
  to: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="block bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 hover:shadow-sm transition group"
    >
      <div className="flex gap-4 items-start">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-brand-soft text-brand-primary flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
            {title}
            <ArrowRight
              size={16}
              className="text-brand-primary opacity-0 group-hover:opacity-100 transition"
            />
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}

function GuideCard({
  to,
  icon,
  title,
  description,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="block bg-brand-secondary border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 hover:bg-white hover:shadow-sm transition"
    >
      <div className="w-10 h-10 rounded-lg bg-white text-brand-primary flex items-center justify-center mb-3 border border-purple-100">
        {icon}
      </div>
      <h3 className="font-semibold text-stone-900 mb-1.5">{title}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}

function Faq({
  question,
  answer,
  link,
}: {
  question: string;
  answer: string;
  link: { to: string; label: string };
}) {
  return (
    <details className="group bg-white border border-purple-100 rounded-xl p-5 hover:border-brand-primary/40 transition">
      <summary className="cursor-pointer font-semibold text-stone-900 flex items-center justify-between gap-3 list-none">
        <span>{question}</span>
        <ArrowRight
          size={16}
          className="text-brand-primary shrink-0 transition-transform group-open:rotate-90"
        />
      </summary>
      <div className="mt-3 pt-3 border-t border-stone-100">
        <p className="text-stone-700 leading-relaxed mb-3">{answer}</p>
        <Link to={link.to} className="text-brand-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
          {link.label} <ArrowRight size={14} />
        </Link>
      </div>
    </details>
  );
}
