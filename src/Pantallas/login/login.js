import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/loginStyles.css';
import img from '../../assets/imagenes';

const Login = () => {
  const navigate = useNavigate();

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authenticateUser = () => {
    const validUsername = 'usuario';
    const validPassword = 'contrasena';
    return username === validUsername && password === validPassword;
  };

  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
  };

  const handleSignupClick = () => {
    setIsLoginFormVisible(false);
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    handleSignupClick();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const isAuthenticated = authenticateUser();

    if (isAuthenticated) {
      setLoggedInUser({ username });
      // Después de autenticar al usuario, navega a "/principal"
      navigate('/principal');
    } else {
      // Manejar la autenticación fallida si es necesario
      alert('Autenticación fallida. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLoginFormVisible ? 'login' : 'signup'}`}>
          <img className="small-image" src={img.logo} alt="Descripción de la imagen" />
          PetMatch
        </div>
        <div className={`title ${isLoginFormVisible ? 'signup' : 'login'}`}>
          <img className="small-image" src={img.logo} alt="Descripción de la imagen" />
          PetMatch
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLoginFormVisible} onChange={handleLoginClick} />
          <input type="radio" name="slide" id="signup" checked={!isLoginFormVisible} onChange={handleSignupClick} />
          <label htmlFor="login" className="slide login">
            Sign Up
          </label>
          <label htmlFor="signup" className="slide signup">
            Login
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLoginFormVisible ? (
            <form className="signup" onSubmit={handleSignupClick}>
              <div className="field">
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="field">
                <input type="text" placeholder="Email" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Contraseña" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Repetir Contraseña" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Registrarse" />
              </div>
              <div className="signup-link">
                ¿Ya tienes una cuenta? <a href="#" onClick={handleLoginClick}>Login</a>
              </div>
            </form>
          ) : (
            <form className="login" onSubmit={handleLoginSubmit}>
              <div className="field">
                <input type="text" placeholder="Email/Usuario" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="field">
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="pass-link">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Iniciar Sesión" />
              </div>
              <div className="signup-link">
                ¿No tienes una cuenta? <a href="#" onClick={handleSignupLinkClick}>Registrarse</a>
              </div>
            </form>
          )}
          <div className="signup-link">
            {isLoginFormVisible ? (
              <span>
                ¿No tienes una cuenta?{' '}
                <a href="#" onClick={handleSignupLinkClick}>
                  Regístrate ahora
                </a>
              </span>
            ) : (
              <span>
                ¿Ya tienes una cuenta?{' '}
                <a href="#" onClick={handleLoginClick}>
                  Login
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
