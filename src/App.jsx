import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LandingPage() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-300">

      {/* HERO */}
      <section className="py-24 px-6 relative">
      
      {/* HEADER */}

      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        </header>      

      {/* LOGO */}
      <div className="absolute top-0 left-0 -mt-20 -ml-12 p-6">
        <img
          src="/LOGO.PNG"
          alt="Nexa Logo"
          className="w-48"
        />
      </div>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl shadow"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="max-w-6xl mx-auto flex items-center justify-center text-center">
          
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Website Profesional Tanpa Ribet Hosting
            </motion.h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Anda beli domain & hosting sendiri. Saya bantu desain, coding, dan setup sampai website online dan siap digunakan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-90 transition"
              >
                Lihat Paket
              </a>

              <a
                href="#contact"
                className="border border-black dark:border-white px-8 py-4 rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

        </div>
      </section>

          {/* TITLE */}
          <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">

              <h2 className="text-3xl font-semibold mb-12 text-center">
                Our Portofolio
              </h2>
          
          
          {/* PREVIEW PROJECT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Serrasa */}
            <div className="text-center">
              <div className="rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition">
                <a
                  href="https://serrasa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="image.png"
                    alt="Serrasa Website"
                    className="w-full h-44 object-cover"
                  />
                </a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Serrasa</p>
            </div>

            {/* Figma */}
            <div className="text-center">
              <div className="rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition">
                <a
                  href="https://www.figma.com/proto/fRhtF3jEL9VQ5EYerpOSFW/NOIRPEDIA?node-id=1-2&starting-point-node-id=1%3A2&t=Hey4xQ1oJ5vkdlwp-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="figma1.png"
                    alt="Figma Design"
                    className="w-full h-44 object-cover"
                  />
                </a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">NOIRPEDIA</p>
            </div>

            {/* Project 3 */}
            <div className="text-center">
              <div className="rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition">
                <a
                  href="https://www.figma.com/proto/wgfSjUwbnAqzoLPWZMtmX7/Tier-List?node-id=0-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="figma2.png"
                    alt="Website Project"
                    className="w-full h-44 object-cover"
                  />
                </a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">EV TL</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">Layanan</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design Modern",
                desc: "Desain clean, responsif, dan sesuai branding bisnis Anda.",
              },
              {
                title: "Full Development",
                desc: "Frontend & backend rapi, cepat, dan scalable.",
              },
              {
                title: "Setup & Deploy",
                desc: "Konfigurasi domain, SSL, dan upload ke hosting Anda.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition bg-gray-50 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">Paket Harga</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Landing Page Premium
              </h3>

              <p className="text-4xl font-bold mb-8">
                 Start form Rp 500.000
              </p>

              <ul className="space-y-3 text-gray-300 mb-10">
                <li>✔ 1 Halaman Responsive</li>
                <li>✔ Custom Design</li>
                <li>✔ Setup Hosting & SSL</li>
                <li>✔ Free 3x Revisi</li>
              </ul>

              <a
                href="https://wa.me/62085158304429?text=Halo%20saya%20tertarik%20memesan%20layanan%20pembuatan%20website%20Anda.%20Bisakah%20kita%20diskusi%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Pesan Sekarang
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 border p-8 md:p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Landing Page Basic</h3>

              <p className="text-4xl font-bold mb-8">
                Start form Rp 100.000
              </p>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-10">
                <li>✔ Landing page simple</li>
                <li>✔ Responsive</li>
                <li>✔ Tanpa hosting</li>
                <li>✔ Free 1x revisi</li>
              </ul>

              <a
                href="https://wa.me/62085158304429?text=Halo%20saya%20tertarik%20memesan%20layanan%20pembuatan%20website%20Anda.%20Bisakah%20kita%20diskusi%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Pesan Sekarang
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Siap Punya Website Profesional?
          </h2>

          <p className="text-gray-400 mb-8">
            Hubungi saya sekarang untuk diskusi gratis dan dapatkan website sesuai kebutuhan bisnis Anda.
          </p>

          <a
            href="https://wa.me/62085158304429?text=Halo%20saya%20tertarik%20memesan%20layanan%20pembuatan%20website%20Anda."
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            Chat via WhatsApp
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-10 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-white text-xl font-bold mb-3">
              Nexa
            </h3>
            <p className="text-sm">
              Jasa pembuatan website profesional untuk bisnis, UMKM, dan personal brand.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#pricing" className="hover:text-white">Paket Harga</a></li>
              <li><a href="#contact" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Kontak</h4>
            <p className="text-sm mb-2">WhatsApp: 0851-5830-4429</p>

            <a
              href="https://wa.me/62085158304429"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
            >
              Chat WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Nexa. All rights reserved.
        </div>

      </footer>
    </div>
  );
}