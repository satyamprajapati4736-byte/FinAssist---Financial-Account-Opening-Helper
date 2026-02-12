
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Contact Karein</h1>
          <p className="text-slate-600 text-lg">Hamari team har qadam par aapke saath hai.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Naye Account Ki Request Submit Karein</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Pura Naam</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
                    <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Select Karein</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none appearance-none cursor-pointer">
                    <option>LIC Policy Assistance</option>
                    <option>Post Office Savings</option>
                    <option>Sharekhan Demat Account</option>
                    <option>Investment Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Aapka Message (Optional)</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Aap kya jaanna chahte hain?"></textarea>
                </div>
                <button className="w-full gradient-bg text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl active:scale-95">
                  Request Callback
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Call Karein</h3>
              <p className="text-slate-600 mb-4">Monday to Saturday: 9am - 7pm</p>
              <p className="text-2xl font-bold text-blue-600">+91 98765 43210</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Email Likhein</h3>
              <p className="text-slate-600 mb-4">Hum 24 hours mein reply karenge.</p>
              <p className="text-xl font-bold text-blue-600 underline">support@finassist.in</p>
            </div>

            <div className="gradient-bg p-8 rounded-3xl text-white shadow-xl group">
               <h3 className="text-xl font-bold mb-4">Live Help</h3>
               <p className="text-blue-100 mb-6">Aap niche diye AI Assistant se bhi turant sawaal pooch sakte hain.</p>
               <button className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                 Chat Now <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
