import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, Heart } from 'lucide-react';

export default function Founder() {
  return (
    <div className="pt-16">
      <section className="bg-brand-secondary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 block">The Founder</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">About the Person Behind PANS</h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            PANS was created from lived experience — by a mother who has navigated the child protection system firsthand and understands what it is like to feel lost, overwhelmed, and unsupported.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                alt="PANS Founder"
                className="w-full rounded-3xl shadow-xl object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="mt-6 bg-brand-secondary border border-purple-100 rounded-2xl p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-brand-primary" />
                    <div>
                      <p className="text-xs font-bold text-stone-700">Working With Children Check</p>
                      <p className="text-xs text-stone-500">Valid — Victoria</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen size={16} className="text-brand-primary" />
                    <div>
                      <p className="text-xs font-bold text-stone-700">Studying</p>
                      <p className="text-xs text-stone-500">Criminology & Criminal Justice</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart size={16} className="text-brand-primary" />
                    <div>
                      <p className="text-xs font-bold text-stone-700">Experience</p>
                      <p className="text-xs text-stone-500">Lived experience of the system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-6">Founder, PANS Victoria</h2>
              <div className="space-y-5 text-stone-600 leading-relaxed">
                <p>
                  PANS was founded by a mother who has personally navigated the Victorian child protection system and the Children's Court. That experience — the confusion, the fear, the feeling of being completely alone in a system you do not understand — is what drove the creation of PANS.
                </p>
                <p>
                  Going through that process made one thing very clear: parents need better access to clear, plain-language information and someone who understands what the system actually feels like from the inside. Not legal advice — just someone who can help you understand what is happening and what to do next.
                </p>
                <p>
                  Alongside that lived experience, the founder is studying criminology and criminal justice with a specific focus on the experiences of families involved in the child protection system. This academic background adds a deeper understanding of how justice systems operate and how families are affected by them.
                </p>
              </div>
            </div>

            <div className="bg-brand-secondary border border-purple-100 rounded-2xl p-8">
              <h3 className="font-serif text-xl text-stone-900 mb-4">Why PANS exists</h3>
              <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
                <p>
                  Many parents find themselves involved with Child Protection feeling completely overwhelmed. The language is complex, the timelines are tight, and support — particularly for families in regional Victoria — can be very hard to access.
                </p>
                <p>
                  PANS exists to bridge that gap. Not to replace lawyers or social workers, but to help parents understand what is happening, know what questions to ask, and feel less alone during one of the hardest periods of their lives.
                </p>
                <p>
                  The service is independent and built on the belief that lived experience has genuine value — that someone who has been through the system can offer something that no textbook or government brochure can.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-brand-primary pl-6 py-2">
              <p className="font-serif text-xl italic text-stone-700 leading-relaxed">"I know what it feels like to not understand what is happening, to feel completely powerless in a system that is making decisions about your family. I created PANS because no parent should have to navigate that alone."</p>
              <cite className="text-sm text-brand-primary font-bold mt-3 block not-italic">— PANS Founder</cite>
            </blockquote>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Please note:</strong> PANS provides information and navigation support only, not legal advice. The founder is not a lawyer. If you need legal advice, please contact Victoria Legal Aid on <strong>1300 792 387</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-brand-secondary">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-xl font-serif text-stone-900 mb-1">Want to learn more about PANS?</h3>
            <p className="text-stone-500 text-sm">Read about how the service works, who we support, and how to get in touch.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link to="/about" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2 text-sm">
              About PANS <ArrowRight size={14} />
            </Link>
            <Link to="/funding" className="bg-white border border-purple-200 text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors text-sm">
              Funding & Transparency
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
