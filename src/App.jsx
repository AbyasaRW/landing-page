import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* HERO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Website Profesional Tanpa Ribet Hosting
            </motion.h1>
            <p className="text-lg text-gray-600 mb-8">
              Anda beli domain & hosting sendiri. Saya bantu desain, coding, dan setup sampai website online dan siap digunakan.
            </p>
            <div className="flex gap-4">
              <a
                href="#pricing"
                className="bg-black text-white px-8 py-4 rounded-2xl shadow-xl hover:opacity-90 transition"
              >
                Lihat Paket
              </a>
              <a
                href="#contact"
                className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-32 bg-gray-100 rounded-2xl"></div>
              <div className="h-10 bg-black rounded-xl w-1/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Layanan</h2>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition bg-gray-50"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Paket Harga</h2>

          <div className="bg-black text-white p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Landing Page Profesional</h3>
            <p className="text-5xl font-bold mb-8">Rp 1.500.000</p>

            <ul className="space-y-3 text-gray-300 mb-10">
              <li>✔ 1 Halaman Responsive</li>
              <li>✔ Custom Design</li>
              <li>✔ Setup Hosting & SSL</li>
              <li>✔ 2x Revisi</li>
            </ul>

            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Siap Punya Website Profesional?</h2>
          <p className="text-gray-400 mb-8">
            Hubungi saya sekarang untuk diskusi gratis dan dapatkan website sesuai kebutuhan bisnis Anda.
          </p>
          <a
            href="https://wa.me/62085158304429?text=Halo%20saya%20tertarik%20dengan%20layanan%20pembuatan%20website%20Anda.%20Bisakah%20kita%20diskusi%20lebih%20lanjut?"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            Chat via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
