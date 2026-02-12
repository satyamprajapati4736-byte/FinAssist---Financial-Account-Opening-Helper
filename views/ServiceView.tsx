
import React, { useState } from 'react';
import { View, ServiceInfo } from '../types';

const SERVICES_DATA: Record<View.Lic | View.PostOffice | View.ShareMarket, ServiceInfo> = {
  [View.Lic]: {
    id: View.Lic,
    title: 'LIC Policy Assistance',
    description: 'Life Insurance Corporation policies ke liye complete help aur guidance.',
    longDescription: 'LIC ki sahi policy chunna aapke bhavishya ke liye zaroori hai. Hum aapko har plan ke fayde aur premium details samjhate hain aur document filling mein madad karte hain.',
    colorClass: 'bg-blue-600',
    options: ['Endowment Plan', 'Term Insurance', 'Money Back Policy', 'ULIP', 'Pension Plan'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  [View.PostOffice]: {
    id: View.PostOffice,
    title: 'Post Office Account Help',
    description: 'Sarkari savings schemes mein invest karne ke liye expert assistance.',
    longDescription: 'Post Office schemes surakshit aur bharosemand hoti hain. Hum aapko RD, FD, PPF aur Sukanya Samriddhi accounts kholne ki poori prakriya mein help karte hain.',
    colorClass: 'bg-red-600',
    options: ['Savings Account', 'RD Account', 'PPF Account', 'Sukanya Samriddhi', 'MIS Scheme'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  [View.ShareMarket]: {
    id: View.ShareMarket,
    title: 'Share Market Account Assistance',
    description: 'Sharekhan Demat & Trading account kholne mein complete help.',
    longDescription: 'Stock market mein investment shuru karne ke liye Demat account zaroori hai. Hum Sharekhan ke saath aapka account setup aur KYC process asaan banate hain.',
    colorClass: 'bg-purple-600',
    options: ['Demat Account', 'Trading Account', 'Mutual Funds', 'Commodity Trading'],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
};

interface ServiceViewProps {
  type: View.Lic | View.PostOffice | View.ShareMarket;
  onNavigate: (view: View) => void;
}

const ServiceView: React.FC<ServiceViewProps> = ({ type, onNavigate }) => {
  const data = SERVICES_DATA[type];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Successfully Submitted!</h2>
        <p className="text-slate-600 mb-10 text-lg">
          Dhanyawad! Hamari team aapko jald hi contact karegi. Aap WhatsApp par bhi message kar sakte hain.
        </p>
        <button 
          onClick={() => onNavigate(View.Home)}
          className="gradient-bg text-white px-10 py-4 rounded-full font-bold shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Wapas Home Par Jayein
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in slide-in-from-bottom duration-500">
      {/* Header */}
      <section className={`${data.colorClass} text-white py-16 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block p-4 bg-white/20 backdrop-blur rounded-3xl mb-6 shadow-xl animate-float">
            {data.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">{data.title}</h1>
          <p className="text-blue-50 text-xl max-w-2xl mx-auto font-light">
            {data.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Service Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Humari {type.toUpperCase()} Services</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {data.longDescription}
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'New Application Help', desc: 'Sahi scheme select karne aur apply karne mein madad.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                  { title: 'Document Assistance', desc: 'Forms aur KYC documents bharwane mein complete guidance.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                  { title: 'Process Support', desc: 'Submission se approval tak har qadam par help.', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className={`w-12 h-12 ${data.colorClass} text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer for LIC */}
            {type === View.Lic && (
              <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl flex gap-4">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Note:</strong> Hum LIC ke authorized agents nahi hain. Hum sirf account opening assistance aur process guidance provide karte hain taaki aapka kaam asaan ho sake.
                </p>
              </div>
            )}
          </div>

          {/* Request Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{type.toUpperCase()} Request Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Aapka Naam *</label>
                <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Full name enter karein" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number *</label>
                <input required type="tel" pattern="[0-9]{10}" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="10-digit mobile number" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">City *</label>
                <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Shehar ka naam" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service/Policy Type</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer bg-white">
                  {data.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full ${data.colorClass} text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:opacity-95 hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-3`}
              >
                {loading ? (
                  <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  <>
                    <span>Request Submit Karein</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </>
                )}
              </button>
            </form>
            <p className="mt-6 text-center text-slate-400 text-xs italic">
              * Hamari team agle 24 ghanto mein call ya WhatsApp par sampark karegi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
