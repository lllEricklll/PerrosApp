import React, { useEffect } from 'react';
import '../News/news.css';
import img from '../../assets/imagenes';
import { Link } from 'react-router-dom';

const News = () => {

return (
    <div>
      <header className="header">
        <a href="index.html">
          <img className="header__logo" src={img.logo} alt="Logotipo" />
        </a>
      </header>

      <nav className="navegacion">
      <Link to="/Principal" className="navegacion__enlace">
        Home
      </Link>
      <Link to="/News" className="navegacion__enlace navegacion__enlace--activo">
        News
      </Link>
    </nav>
      <main className="contenedor">
        <h1>Título Principal</h1>

        <div className="nosotros">
          <div className="nosotros__contenido">
            <p>
              En este espacio podrán encontrar muchas cosas con las cuales puedes cuidar o consentir a tu mascota.
            </p>

            <p>
              Puedes encontrar información sobre veterinarios, tiendas de artículos, dietas y más.
            </p>
          </div>
          <img className="nosotros__imagen" src={img.Nosostros} alt="imagen nosotros" />
        </div>
      </main>

      <section className="contenedor comprar">
        <h2 className="comprar__titulo">Conoce a Nuestros Socios</h2>

        <div className="bloques">
          <div className="bloque">
            <img className="bloque__imagen" src={img.Veterinaria} alt="Veterinarios" />
            <h3 className="bloque__titulo">Veterinarios</h3>
            <p>
              Cuenta con la mejor atención y cuidado para tu animalito.
              Atención personalizada e igualitaria.
            </p>
          </div>

          <div className="bloque">
            <img className="bloque__imagen" src={img.PetStore} alt="Tienda de Artículos" />
            <h3 className="bloque__titulo">Tienda de Artículos</h3>
            <p>
              Buscabas hacer feliz a tu mascota? Contáctanos y llénalo de felicidad!
              Contamos con juguetes, prendas y accesorios.
            </p>
          </div>

          <div className="bloque">
            <img className="bloque__imagen" src={img.HotelPet} alt="Hotel Peludo" />
            <h3 className="bloque__titulo">Spa y Hotel</h3>
            <p>
              El corte ideal para tu mascota y su comodidad.
              Un lugar seguro donde tu mascota podrá quedarse mientras no estás.
            </p>
          </div>

          <div className="bloque">
            <img className="bloque__imagen" src={img.Paul} alt="Comida & Snacks" />
            <h3 className="bloque__titulo">Comida & Snacks</h3>
            <p>
              La mejor calidad de nutrición está con nosotros.
              Si buscan la comida ideal o snack, somos la mejor opción.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__texto">PetMatch, todos los derechos reservados.</p>
      </footer>
    </div>
  );
};


export default News;