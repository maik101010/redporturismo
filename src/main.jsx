import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BusFront,
  Check,
  ChevronRight,
  Compass,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import logo from "../logo.jpeg";
import "./styles.css";

const destinations = [
  {
    name: "Llanos Orientales",
    description: "Sabana, fauna y tradiciones llaneras",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
    tag: "Nuestra casa",
  },
  {
    name: "Caribe colombiano",
    description: "Mar, historia y cultura que enamoran",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    tag: "Sol y playa",
  },
  {
    name: "Andes colombianos",
    description: "Montañas, pueblos y paisajes inolvidables",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    tag: "Aventura",
  },
];

const services = [
  {
    icon: Compass,
    title: "Tours por Colombia",
    text: "Recorridos diseñados para conocer la diversidad natural y cultural de nuestro país.",
  },
  {
    icon: Mountain,
    title: "Aventura y naturaleza",
    text: "Experiencias auténticas para conectar con paisajes, comunidades y tradiciones.",
  },
  {
    icon: BusFront,
    title: "Transporte turístico",
    text: "Acompañamiento logístico para grupos, empresas, familias e instituciones.",
  },
  {
    icon: Users,
    title: "Planes a la medida",
    text: "Creamos itinerarios según tus tiempos, intereses y número de viajeros.",
  },
];

const clients = ["MANUELITA", "Bioenergy", "Cámara de Comercio", "Alcaldía de Yopal"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Red Por Turismo Tours, inicio">
          <span className="brand-logo">
            <img src={logo} alt="Red Por Turismo Tours S.A.S." />
          </span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegación principal">
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#destinos" onClick={closeMenu}>Destinos</a>
          <a href="#clientes" onClick={closeMenu}>Clientes</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>
            Cotiza tu viaje
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-backdrop" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <span className="eyebrow"><MapPin size={16} /> Desde Casanare para toda Colombia</span>
              <h1>Colombia no se cuenta. <em>Se vive.</em></h1>
              <p>
                Somos operadores turísticos que conectamos personas, paisajes y culturas
                a través de experiencias memorables por todo el país.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#destinos">
                  Explora Colombia <ArrowRight size={18} />
                </a>
                <a className="button button-ghost" href="#nosotros">Conócenos</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon"><Sparkles /></div>
              <span>Tu próxima historia empieza aquí</span>
              <strong>Experiencias con propósito</strong>
              <ul>
                <li><Check size={16} /> Atención personalizada</li>
                <li><Check size={16} /> Operación segura</li>
                <li><Check size={16} /> Destinos nacionales</li>
              </ul>
            </div>
          </div>
          <div className="hero-scroll">Descubre más <span /></div>
        </section>

        <section className="intro page-width" id="nosotros">
          <div className="section-label">Somos Red Por Turismo</div>
          <div className="intro-grid">
            <h2>Más que un viaje,<br /><span>una conexión real.</span></h2>
            <div className="intro-copy">
              <p>
                Nacimos en Yopal, en el corazón de los Llanos Orientales, con una misión:
                mostrar la riqueza de Colombia de forma cercana, responsable y auténtica.
              </p>
              <p>
                Diseñamos y operamos experiencias de turismo rural, comunitario, cultural
                y de aventura para viajeros, grupos y organizaciones.
              </p>
              <div className="value-row">
                <span><ShieldCheck /> Confianza</span>
                <span><Leaf /> Turismo responsable</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="servicios">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <div className="section-label light">Lo que hacemos</div>
                <h2>Somos tu operador<br />turístico en Colombia</h2>
              </div>
              <p>Nos encargamos de cada detalle para que tú solo tengas que disfrutar.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service-card" key={title}>
                  <span className="service-number">0{index + 1}</span>
                  <div className="service-icon"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="destinations page-width" id="destinos">
          <div className="section-heading dark">
            <div>
              <div className="section-label">Viaja con nosotros</div>
              <h2>Un país. <span>Mil historias.</span></h2>
            </div>
            <p>Desde nuestro llano infinito hasta las costas y montañas de Colombia.</p>
          </div>
          <div className="destination-grid">
            {destinations.map((destination) => (
              <article className="destination-card" key={destination.name}>
                <img src={destination.image} alt="" />
                <div className="destination-shade" />
                <span>{destination.tag}</span>
                <div>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
                <ChevronRight className="destination-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="clients" id="clientes">
          <div className="page-width">
            <div className="clients-copy">
              <div className="section-label">Confían en nosotros</div>
              <h2>Aliados de grandes<br /><span>experiencias.</span></h2>
              <p>
                Empresas e instituciones nos eligen para movilizar, conectar y crear
                momentos que dejan huella.
              </p>
            </div>
            <div className="client-grid">
              {clients.map((client, index) => (
                <div className={index === 0 ? "client client-featured" : "client"} key={client}>
                  {index === 0 && <span>Cliente destacado</span>}
                  <strong>{client}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact page-width" id="contacto">
          <div className="contact-panel">
            <div>
              <div className="section-label light">Hablemos</div>
              <h2>¿Listo para recorrer Colombia?</h2>
              <p>Cuéntanos qué tienes en mente y diseñemos juntos tu próxima experiencia.</p>
            </div>
            <a
              className="button button-white"
              href="https://wa.me/573106885643?text=Hola%20Red%20Por%20Turismo,%20quiero%20cotizar%20un%20viaje"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} /> Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-width footer-grid">
          <div>
            <span className="footer-logo">RED POR <b>TURISMO TOURS</b></span>
            <p>Operador turístico · Yopal, Casanare</p>
          </div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#destinos">Destinos</a>
            <a href="#clientes">Clientes</a>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://wa.me/573106885643" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Red Por Turismo Tours S.A.S.</span>
          <span>RNT 76783 · NIT 901688564-3</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/573106885643?text=Hola%20Red%20Por%20Turismo"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle />
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
