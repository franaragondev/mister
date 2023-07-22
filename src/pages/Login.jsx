import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import md5 from "md5";
import swal from "sweetalert";
import AdminPanel from "../components/AdminPanel";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { getLogin } = useContext(UserContext);
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    let user = await getLogin(nombre, md5(password));
    if (user[0]) {
      localStorage.setItem("user", JSON.stringify(user[0]));
      swal({
        title: "Sesión Iniciada",
        text: `Bienvenido, ${user[0].userName}`,
        icon: "success",
        button: "Ok!",
      });
      setIsLogin(true);
    } else {
      swal({
        title: "Oh! Algo ha fallado.",
        text: "Usuario o Contraseña incorrectos",
        icon: "error",
        button: "Volver",
      });
    }
  };

  return (
    <div className="pageBackground">
      <Header />
      {localStorage.getItem("user") ? (
        <AdminPanel />
      ) : (
        <div className="loginForm">
          <div className="loginFormat">
            <p className="mensajeLogin">INICIAR SESIÓN</p>
            <div className="inicioSesion">
              <input
                className="inputLogin"
                type="text"
                placeholder="Usuario"
                name="usuario"
                onChange={handleNombre}
              />
              <input
                className="inputLogin"
                type="password"
                placeholder="Contraseña"
                name="contrasenia"
                onChange={handlePassword}
              />
              <button className="btnLogin" onClick={() => login()}>
                Iniciar Sesión
              </button>
            </div>
            <div className="flecha">
              <Link className="link" to="/">
                Volver a Inicio
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
