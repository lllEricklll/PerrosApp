import React from 'react';
import '../register/registerStyles.css';
import img from '../../assets/imagenes';

const register = () => {
  return (
    <div className="pantalla-registrarse">
      <div className="div">
        <p className="completa-los-datos-y">Completa los datos y presiona <br />el botón para continuar</p>
        <div className="group">
          <div className="overlap-group">
            <img className="vector" src={img.imagen18} alt="Vector" />
            <div className="email-username">&nbsp;&nbsp;&nbsp;&nbsp; Email / Username</div>
          </div>
        </div>

        <div className="overlap-wrapper">
            <div className="overlap-group">
                <img className="img" src={img.imagen17} alt="Vector" />
                <div className="password">
                <input type="password" className="text-wrapper" placeholder="Contraseña" />
                <input type="password" className="span" placeholder="Contraseña" />
                </div>
            </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="vector-2" src={img.imagen16} alt="Vector" />
            <p className="confirm-password">
              <span className="text-wrapper">&nbsp;</span>
              <span className="span">Confirmar Contraseña</span>
            </p>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap"><div className="text-wrapper-2">Registrarte</div></div>
        </div>
        <div className="group-2">
          <div className="group-3">
            <div className="text-wrapper-3">O registrate con</div>
            <img className="line" src={img.imagen3} alt="Line" />
            <img className="line-2" src={img.imagen4} alt="Line" />
          </div>
          <img className="vector-3" src={img.imagen15} alt="Vector" />
          <img className="vector-4" src={img.imagen14} alt="Vector" />
          <img className="vector-5" src={img.imagen13} alt="Vector" />
        </div>
        <div className="group-wrapper">
          <div className="group-4">
            <div className="group-5">
              <div className="overlap-group-2">
                <img className="rectangle" src={img.imagen11} alt="Rectangle" />
                <div className="iniciar-sesi-n">Iniciar <br />Sesión</div>
                <div className="text-wrapper-4">Registrarse</div>
              </div>
            </div>
          </div>
        </div>
        <img className="petsxd-removebg" src={img.imagen9} alt="PetsXD" />
      </div>
    </div>
  );
};

export default register;
