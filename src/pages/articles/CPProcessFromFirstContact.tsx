import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Phone } from 'lucide-react';

const TITLE = 'Understanding the Child Protection Process in Victoria — From First Contact to Case Planning';
const DESCRIPTION =
  'A plain-language guide for parents on how Child Protection works in Victoria, from the first phone call by a DFFH worker through to investigation and case planning.';
const URL = 'https://pansvic.replit.app/articles/child-protection-process-victoria';

export default function CPProcessFromFirstContact() {
  useEffect(() => {
    document.title = `${TITLE} | PANS Victoria`;
    setMeta('description', DESCRIPTION);
    setMeta('og:title', TITLE, true);
    setMeta('og:description', DESCRIPTION, true);
    setMeta('og:type', 'article', true);
    setMeta('og:url', URL, true);
    setCanonical(URL);
  }, []);

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-brand-secondary border-b border-purple-100 px-6 pt-28 pb-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
            Article · For parents in Victoria
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-5">
            Understanding the Child Protection process in Victoria
          </h1>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
            From the first phone call to your first case planning meeting — what
            usually happens, what the words mean, and where you can stop and
            breathe.
          </p>
          <p className="text-sm text-stone-500 mt-6">8 minute read · Plain English · Victoria, Australia</p>
        </div>
      </header>

      {/* Body */}
      <div className="px-6 py-14 md:py-16">
        <div className="max-w-3xl mx-auto prose-article text-stone-800 text-lg leading-[1.8] font-serif">

          <p className="text-xl">
            If you are reading this, something has probably already happened.
            A worker may have rung you, knocked at your door, or left a card.
            You may not have slept properly since. The first thing worth saying
            is this: feeling frightened, angry, embarrassed or numb is a normal
            human response to being contacted by Child Protection. It does not
            mean you have done something wrong, and it does not decide what
            happens next. What follows is a plain-English walk-through of how
            the process usually unfolds in Victoria, written for parents, not
            lawyers.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            How it usually starts
          </h2>
          <p>
            In Victoria, Child Protection is part of the Department of Families,
            Fairness and Housing — known as DFFH (and, until 2021, called DHHS).
            DFFH does not go looking for families on its own. A case begins when
            someone makes a report, often called a notification. That person
            could be a teacher, a doctor, a nurse, a police officer, a
            neighbour, a relative, or sometimes someone you have never met. The
            person who made the report stays confidential by law, even from
            you. That can feel deeply unfair, and it is one of the hardest
            parts of the early stage to sit with.
          </p>
          <p>
            When DFFH receives a report, an intake worker reads it and decides
            what to do next. Many reports are closed at this point because
            there is not enough concern to act on. Others are passed on to a
            local Child Protection team for what is called an investigation.
            If your case has reached you, it has reached this stage.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            The first contact
          </h2>
          <p>
            First contact most often takes the form of a phone call or an
            unannounced home visit by one or two Child Protection
            practitioners. They will identify themselves, show you a card or
            badge if you ask, and tell you in general terms what the concerns
            are. They are not allowed to tell you who reported you, but they
            should tell you the substance of what was reported — for example,
            that there are concerns about your child's safety at home, or about
            substance use, or about an injury someone noticed.
          </p>
          <p>
            You do not have to invite them inside on the spot. Unless they
            arrive with police executing a warrant, you can ask for their name,
            their direct phone number, and a time later that day or the next
            day to speak properly. Taking thirty minutes to make a quick call
            to <Link to="/parent-rights" className="text-brand-primary underline">understand your rights</Link>{' '}
            or to ring <strong>Victoria Legal Aid on 1300 792 387</strong> is
            not obstruction. It is sensible. The same rules apply to you that
            would apply to anyone else asked questions by a government agency.
          </p>
          <p>
            If you are reading this in the very first hours, our{' '}
            <Link to="/first-48-hours" className="text-brand-primary underline">
              First 48 hours guide
            </Link>{' '}
            walks through exactly what to do, in order, before anything else.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            What an investigation actually involves
          </h2>
          <p>
            The investigation is the period when Child Protection gathers
            information to work out whether a child is at risk of significant
            harm. In Victorian law, that phrase has a specific meaning. It does
            not mean any worry about parenting; it means a serious risk that a
            child cannot be kept safe by their parents. The threshold is
            higher than many parents expect.
          </p>
          <p>
            During an investigation, a worker will usually want to speak to
            your child, see where they sleep, and talk to you about your daily
            life — who lives in the home, your supports, your health, and the
            specific concerns that were reported. They may also contact people
            already in your child's life, such as the school, the maternal and
            child health nurse, the GP, or a family violence service. This is
            not a betrayal by those people; they are usually required to
            respond when Child Protection asks.
          </p>
          <p>
            You are allowed to know what is being said about you, with limited
            exceptions. You are allowed to write things down. You are allowed
            to disagree. You are allowed to bring a support person to meetings.
            None of those things make you look guilty. They make you organised.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            The decisions Child Protection might make
          </h2>
          <p>
            After the investigation, the team decides whether the report is
            substantiated. Substantiated does not mean proved in court. It
            means the worker, with their team leader, has formed a view that
            there is a risk of significant harm and that DFFH should stay
            involved for a while. The opposite outcome is unsubstantiated, in
            which case the file is usually closed.
          </p>
          <p>
            A substantiated outcome opens up several possible paths. The most
            common is that DFFH works with you on a voluntary basis — no court,
            no orders, just an agreed plan. A smaller number of cases go to
            the <Link to="/childrens-court" className="text-brand-primary underline">Children's Court of Victoria</Link>{' '}
            for a Protection Application, where a magistrate decides what
            should happen. In a small number of urgent situations, a child is
            placed somewhere else for safety while the rest is sorted out. If
            this happens, our guides on{' '}
            <Link to="/supervised-contact" className="text-brand-primary underline">
              supervised contact
            </Link>{' '}
            and{' '}
            <Link to="/emotional-impact" className="text-brand-primary underline">
              the emotional impact of removal
            </Link>{' '}
            are written for exactly this moment.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            Moving into case planning
          </h2>
          <p>
            Once Child Protection decides to stay involved, the focus moves
            from investigating to planning. You will be invited to what is
            usually called a case planning meeting, sometimes a stronger
            families meeting, a care team meeting, or an Aboriginal Family Led
            Decision Making meeting if your family identifies as Aboriginal or
            Torres Strait Islander. The names vary; the purpose is the same. A
            small group of people sits together to agree on what needs to
            change, who is responsible for what, and how progress will be
            measured.
          </p>
          <p>
            The room usually includes you, the case worker, their team leader
            (called a Child Protection Practice Leader), and sometimes a
            support person of your choosing — a relative, a friend, an
            advocate, or a worker from a community service. You are entitled
            to bring someone. Take that up. People hear a meeting differently
            when they have a witness with them.
          </p>
          <p>
            The case plan that comes out of the meeting will have goals — for
            example, attending a particular program, engaging with a counsellor,
            keeping the home safe, or following medical advice for a child.
            Each goal should be specific enough that you can tell, week to
            week, whether you are doing it. If a goal is too vague (something
            like "engage with services"), ask for it to be written more
            clearly. You are within your rights to do that.
          </p>
          <p>
            For a step-by-step look at how to walk into one of these meetings
            feeling prepared, see our{' '}
            <Link to="/guides/meeting-preparation" className="text-brand-primary underline">
              meeting preparation guide
            </Link>.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            Working with a case worker
          </h2>
          <p>
            Most parents find the relationship with their case worker is the
            single biggest factor in how the process feels. A good worker is
            honest with you about what they want to see, gives you a fair
            chance to do it, and writes down what is happening accurately. Not
            every worker is a good worker, and you may not click with the one
            you are given. That is a real thing, and it is okay to acknowledge
            it. If communication breaks down badly, you can ask their team
            leader for a different allocation. It is not always granted, but
            asking is reasonable.
          </p>
          <p>
            In the meantime, keep your own record. A simple notebook with the
            date, who you spoke to, and what was said is enough. If a meeting
            is held, ask for the minutes. If a worker promises something, send
            a short text or email afterwards confirming what you understood
            them to say. None of this is paranoid; it is the kind of paper
            trail any sensible person keeps when their family is involved with
            a government department.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            What to expect emotionally
          </h2>
          <p>
            People often describe the first weeks as moving in slow motion and
            too quickly at the same time. You can be sitting at a kitchen
            table feeling completely calm and then, an hour later, find yourself
            unable to remember what day it is. Sleep gets thin. Appetite goes.
            Small things that did not bother you before — a knock at the door,
            a missed call — can suddenly feel enormous.
          </p>
          <p>
            None of this is a sign that you are not coping. It is a sign that
            something stressful is happening, and your body is responding the
            way bodies respond. The most useful thing you can do for your case
            is the same thing that is most useful for you as a person: eat at
            normal times, sleep when you can, walk a little, and tell at least
            one trusted person what is going on. If you need to talk to
            someone professionally, our{' '}
            <Link to="/mental-health" className="text-brand-primary underline">
              mental health page
            </Link>{' '}
            lists free and low-cost services in Victoria, including 24-hour
            crisis lines.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-12 mb-4">
            A few quiet truths to hold on to
          </h2>
          <p>
            Child Protection involvement is not the end of the story. Most
            families who come into the system do not stay in it permanently.
            Many close out within months once the worry that triggered the
            report has been addressed. Even when matters do go to the
            Children's Court, the goal in most cases remains keeping families
            together where it is safe to do so — that is written into the
            Children, Youth and Families Act, the law that governs all of
            this.
          </p>
          <p>
            You are allowed to ask questions. You are allowed to say "I don't
            understand, can you explain that again." You are allowed to be
            scared and still be a good parent. And you are allowed to ask for
            help — from a lawyer, from a counsellor, from a friend, or from a
            service like PANS that exists for exactly this reason.
          </p>
          <p className="text-stone-700">
            If you would like to talk to someone at PANS, you can{' '}
            <Link to="/contact" className="text-brand-primary underline">
              contact us here
            </Link>. If you are not sure where you fit in the process,{' '}
            <Link to="/start-here" className="text-brand-primary underline">
              start here
            </Link>{' '}
            and we will point you to the most relevant guide.
          </p>
        </div>
      </div>

      {/* Crisis bar */}
      <section className="px-6 pb-10">
        <div className="max-w-3xl mx-auto bg-brand-secondary border border-purple-100 rounded-2xl p-6 text-center">
          <Phone size={22} className="text-brand-primary mx-auto mb-2" />
          <h2 className="text-xl font-serif text-stone-900 mb-2">If you need to talk to someone now</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Victoria Legal Aid:</strong> 1300 792 387 ·{' '}
            <strong>Lifeline:</strong> 13 11 14 (24 hours)
          </p>
          <Link
            to="/mental-health"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
          >
            More crisis and mental health support <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> This article is general information,
            not legal advice. For advice on your specific situation, please
            contact Victoria Legal Aid on <strong>1300 792 387</strong> or your
            nearest community legal centre.
          </p>
        </div>
      </section>

      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: TITLE,
            description: DESCRIPTION,
            inLanguage: 'en-AU',
            mainEntityOfPage: URL,
            author: { '@type': 'Organization', name: 'PANS Victoria' },
            publisher: { '@type': 'Organization', name: 'PANS Victoria' },
            about: [
              'Child Protection Victoria',
              'DFFH Victoria',
              "Children's Court of Victoria",
              'Case planning',
            ],
          }),
        }}
      />
    </article>
  );
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
