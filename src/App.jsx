import React from 'react';

export default function App() {
  // Cambia este número por el tuyo (con código de país, ej. 593 para Ecuador)
  const whatsappNumber = "5930995195422"; 
  const defaultMessage = encodeURIComponent("Hola, vi tu página web y quisiera agendar una revisión a domicilio para mi equipo.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const services = [
    {
      title: "Optimización & Limpieza",
      price: "$15",
      badge: "Popular",
      features: [
        "Limpieza profunda de virus y malware",
        "Aceleración del inicio del sistema",
        "Eliminación de programas innecesarios",
        "Optimización de registro y temporales",
        "Diagnóstico de salud de disco duro"
      ]
    },
    {
      title: "Formateo + Instalación Limpia",
      price: "$25",
      badge: "Recomendado",
      features: [
        "Respaldo previo de tus archivos personales",
        "Instalación limpia de Windows 10/11",
        "Drivers oficiales actualizados",
        "Suite de oficina y programas esenciales",
        "Optimización final de rendimiento"
      ]
    },
    {
      title: "Mantenimiento Físico",
      price: "$20",
      badge: "Hardware",
      features: [
        "Limpieza interna de polvo y pelusa",
        "Mantenimiento de ventiladores",
        "Aplicación de pasta térmica fresca",
        "Revisión de conexiones internas",
        "Diagnóstico térmico de procesador"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TechFix <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-normal">A Domicilio</span>
          </h1>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-emerald-950 flex items-center gap-2"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <span className="bg-blue-950 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-800">
          ⚡ Servicio Rápido en tu Hogar u Oficina
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
          ¿Tu computadora está lenta o no responde? <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            La reparamos frente a ti.
          </span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Sin dejar tu equipo en talleres desconocidos ni esperar días. Servicio técnico profesional directamente en tu domicilio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all text-center shadow-lg shadow-cyan-950"
          >
            Solicitar Servicio Ahora
          </a>
        </div>
      </section>

      {/* Tabla de Servicios y Precios */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-center mb-2">Precios Transparentes</h3>
        <p className="text-slate-400 text-center text-sm mb-10">Sin costos ocultos. Solo pagas si ves resultados.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((srv, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-slate-100">{srv.title}</h4>
                  <span className="text-xs bg-slate-700 text-cyan-300 px-2 py-0.5 rounded font-medium">
                    {srv.badge}
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-cyan-400 mb-6">
                  {srv.price} <span className="text-xs font-normal text-slate-400">/ tarifa fija</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, me interesa el servicio de ${srv.title} por ${srv.price}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-700 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold py-2.5 rounded-lg text-center transition-all text-sm block"
              >
                Pedir este servicio
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Garantía */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-950/40 to-slate-800/60 border border-blue-900/50 rounded-xl p-6 text-center">
          <h4 className="text-lg font-bold text-cyan-300 mb-2">🛡️ Garantía de Satisfacción 100%</h4>
          <p className="text-sm text-slate-300">
            Trabajamos con total transparencia frente a ti. Si no notas una mejora real en la velocidad y estabilidad de tu equipo, no pagas la mano de obra.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500 mt-12">
        <p>© {new Date().getFullYear()} TechFix - Servicio Técnico Informático a Domicilio.</p>
      </footer>
    </div>
  );
}