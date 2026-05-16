/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, GraduationCap, Users } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-stone-800 font-sans">
      {/* Header/Navbar */}
      <nav className="bg-primary text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold font-serif">Barvi Academy Faisalabad</h1>
            <div className="flex gap-4 text-sm opacity-80">
                <span>Home</span>
                <span>About</span>
                <span>Admission</span>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-b from-stone-50 to-canvas py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <BookOpen className="mx-auto text-primary w-16 h-16 mb-6" />
          <h2 className="text-5xl font-bold text-stone-900 font-serif tracking-tight mb-4">
            Barvi Academy Faisalabad
          </h2>
          <p className="text-2xl text-accent-dark font-medium font-serif mb-8 italic">
            “علم کے ساتھ بہترین تربیت”
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-accent text-white px-8 py-3 rounded-xl font-semibold hover:bg-accent-dark transition shadow-lg">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* About Academy */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold font-serif text-center mb-10 text-primary">About Barvi Academy</h3>
        <p className="text-stone-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
          Barvi Academy Faisalabad ایک جدید تعلیمی ادارہ ہے جہاں طلبہ کو بہترین اسلامی، دینی اور دنیاوی تعلیم دی جاتی ہے۔ یہ یہاں نظم و ضبط، اخلاقیات اور اعلیٰ معیارِ تعلیم پر خصوصی توجہ دی جاتی ہے۔
        </p>
      </section>

      {/* Student Registration Form */}
      <section id="registration" className="py-20 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="text-3xl font-bold font-serif mb-6 text-center text-primary">New Student Admission</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Student Name" className="p-3 border border-stone-200 rounded-lg outline-primary" />
            <input type="text" placeholder="Father Name" className="p-3 border border-stone-200 rounded-lg outline-primary" />
            <input type="tel" placeholder="Mobile Number" className="p-3 border border-stone-200 rounded-lg outline-primary" />
            <input type="text" placeholder="Class" className="p-3 border border-stone-200 rounded-lg outline-primary" />
            <input type="text" placeholder="Address" className="col-span-full p-3 border border-stone-200 rounded-lg outline-primary" />
            <div className="col-span-full">
                <label className="block text-sm text-stone-500 mb-2">Upload Photo</label>
                <input type="file" className="block w-full text-sm text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark" />
            </div>
            <button type="submit" className="col-span-full bg-accent text-white py-3 rounded-lg hover:bg-accent-dark transition font-bold mt-4 shadow-md">Submit Registration</button>
          </form>
        </div>
      </section>
    </div>
  );
}
