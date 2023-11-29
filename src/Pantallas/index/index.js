import React from 'react';
import '../index/IndexStyles.css';
import img from '../../assets/imagenes';  // No es necesario agregar la extensión .js

const Index = () => {
  function redirectTo(page) {
    if (page === 'login') {
      window.location.href = './login';
    } else if (page === 'register') {
      window.location.href = './login';
    }
  }

  return (
    <div className="welcome">
      <div className="div">
        <div className="group">
          <img className="image" src={img.imagen2} alt="Descripción de la imagen" />
          <img className="img" src={img.imagen1} alt="Descripción de la imagen" />
          <img className="image-2" src={img.imagen12} alt="Coffee cup on a table" />
        </div>
        <div className="overlap" id="loginButton" onClick={() => redirectTo('login')}>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">Iniciar Sesión</div>
            </div>
          </div>
          <img className="uwu-removebg" src={img.imagen8} alt="Cute character with a heart" />
        </div>
        <div className="overlap-wrapper" id="registerButton" onClick={() => redirectTo('register')}>
          <div className="overlap-group">
            <div className="text-wrapper-2">Registrarse</div>
          </div>
        </div>
        <div className="text-wrapper-3">Únete a nosotros!</div>
        <img className="image-3" src={img.imagen7} alt="City skyline at night" />   
      </div>
    </div>
  );
};

export default Index;  // Cambié el nombre de la función a UpperCamelCase (convención en React)
