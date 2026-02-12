
import React from 'react';
import { View } from '../types';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-8 trust-badge-anim shadow-xl border border-white/30">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold tracking-wide uppercase">Trusted Financial Help Partner</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
              Aapka Financial Account <br className="hidden md:block" /> Opening Helper
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Hum aapko LIC, Post Office aur Share Market accounts asaan tareeke se open karne mein madad karte hain. 
              <span className="font-medium block mt-2 text-white">Simple, Tez aur Bharosemand!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button 
                onClick={() => onNavigate(View.Contact)}
                className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-lg"
              >
                Abhi Account Open Karein
              </button>
              <button 
                onClick={() => onNavigate(View.About)}
                className="border-2 border-white/50 bg-white/10 backdrop-blur text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg"
              >
                Aur Jaaniye
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Santuşt Grahak', val: '5,000+' },
              { label: 'Saalo ka Experience', val: '10+' },
              { label: 'Successful Accounts', val: '12,000+' },
              { label: 'Cities Covered', val: '25+' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1 group-hover:scale-110 transition-transform">
                  {stat.val}
                </div>
                <div className="text-slate-500 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Humari Services</h2>
            <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Aapke financial goals ke liye trusted assistance aur personalized guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="LIC Policy Help" 
              desc="New LIC policy application, document help, aur premium payment guidance." 
              icon={<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
              color="blue"
              onClick={() => onNavigate(View.Lic)}
            />
            <ServiceCard 
              title="Post Office Savings" 
              desc="Savings Account, RD/FD, PPF, Sukanya Samriddhi account opening help." 
              icon={<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
              color="red"
              onClick={() => onNavigate(View.PostOffice)}
            />
            <ServiceCard 
              title="Share Market Help" 
              desc="Sharekhan Demat & Trading account opening help with basic guidance." 
              icon={<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
              color="purple"
              onClick={() => onNavigate(View.ShareMarket)}
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Humein Kyun Chunein? <br /> <span className="text-blue-600">Trust Jo Dikhta Hai</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Simple Process', desc: 'Complex paperwork ko hum simple aur digitize bana dete hain.' },
                  { title: 'Quick Response', desc: '24 hours ke andar hamari team aapko contact karegi.' },
                  { title: 'Personal Guidance', desc: 'Har step par aapke saath rahenge jab tak account open na ho jaye.' },
                  { title: '100% Transparent', desc: 'Sari jaankari clear aur bina kisi hidden charges ke di jayegi.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1573163067274-020198244b44?auto=format&fit=crop&q=80&w=800" alt="Consultation" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-8">
                  <p className="text-white text-lg font-medium italic">"Hamari madad se hazaro log apna financial bhavishya surakshit kar rahe hain."</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 gradient-bg rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-[2.5rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
             <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">Aaj Hi Shuruat Karein!</h2>
             <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
               Naye account ya policy ke liye abhi request submit karein.
             </p>
             <button 
               onClick={() => onNavigate(View.Contact)}
               className="bg-white text-blue-700 px-12 py-5 rounded-full font-extrabold hover:bg-blue-50 transition-all shadow-xl text-xl relative z-10 active:scale-95"
             >
               Free Help Lein →
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, desc, icon, color, onClick }: any) => {
  const colors: any = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-600',
    red: 'bg-red-100 text-red-600 hover:bg-red-600',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-600'
  };

  const textColors: any = {
    blue: 'text-blue-600',
    red: 'text-red-600',
    purple: 'text-purple-600'
  };

  return (
    <div 
      className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 group cursor-pointer"
      onClick={onClick}
    >
      <div className={`w-16 h-16 ${colors[color]} rounded-2xl flex items-center justify-center mb-8 group-hover:text-white transition-all duration-500`}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>
      <span className={`inline-flex items-center gap-2 ${textColors[color]} font-bold group-hover:gap-4 transition-all`}>
        Details Dekhein <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </span>
    </div>
  );
}

export default HomeView;
