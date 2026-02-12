
import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://picsum.photos/1920/1080?random=2')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">Hamare Baare Mein</h1>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
            FinAssist ek dedicated financial assistance platform hai jo complex banking aur insurance processes ko 
            common man ke liye asaan banane ke liye banaya gaya hai.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://picsum.photos/800/800?random=3" alt="Our Team" className="rounded-3xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 underline decoration-blue-500 underline-offset-8">Hamara Mission</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Bharat ke har vyakti ko financial products se jodna aur unhe sahi rasta dikhana hamara uddeshya hai. Hum jaante hain ki 
                Sarkari accounts aur Insurance paperwork kitna mushkil ho sakta hai, isliye hum expert support dete hain.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <h4 className="font-bold text-blue-700 mb-2">Transparency</h4>
                  <p className="text-sm text-slate-600">Har step ki jaankari aapke paas hogi.</p>
                </div>
                <div className="p-6 bg-green-50 rounded-2xl">
                  <h4 className="font-bold text-green-700 mb-2">Security</h4>
                  <p className="text-sm text-slate-600">Aapka data aur privacy hamari priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-16">Hum Kya Nahi Karte?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 glass-card rounded-3xl border border-slate-200">
               <div className="text-red-500 mb-4 inline-block">
                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold mb-3">No Direct Collection</h3>
               <p className="text-slate-600">Hum kabhi bhi cash ya direct transfer apne account mein nahi lete premiums ke liye.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl border border-slate-200">
               <div className="text-red-500 mb-4 inline-block">
                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold mb-3">Not Official Banks</h3>
               <p className="text-slate-600">Hum LIC ya Post Office ke official offices nahi hain. Hum private facilitators hain.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl border border-slate-200">
               <div className="text-red-500 mb-4 inline-block">
                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold mb-3">No Fake Guarantees</h3>
               <p className="text-slate-600">Hum share market mein "Sure Profit" jaise waade nahi karte. Hum sirf assistance dete hain.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
