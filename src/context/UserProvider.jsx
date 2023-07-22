import React from "react";
import ServerLink from "../ServerLink";
import Axios from "axios";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const getUser = async () => {
    try {
      const resp = Axios.get(`${ServerLink}/user`);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getGeneralClasification = async () => {
    try {
      const resp = await Axios.get(`${ServerLink}/teams`);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getWeeklyClasification = async () => {
    try {
      const resp = await Axios.get(`${ServerLink}/league`);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getTeam = async (teamId) => {
    try {
      const resp = await Axios.get(`${ServerLink}/team/${teamId}`);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const getLogin = async (nombreUsuario, contrasenia) => {
    try {
      const resp = await Axios.post(`${ServerLink}/login`, [
        nombreUsuario,
        contrasenia,
      ]);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const updateLeague = async (
    posicion1,
    posicion1PUNTOS,
    position2,
    position2POINTS,
    position3,
    position3POINTS,
    position4,
    position4POINTS,
    position5,
    position5POINTS,
    position6,
    position6POINTS,
    position7,
    position7POINTS,
    position8,
    position8POINTS
  ) => {
    try {
      const resp = await Axios.put(`${ServerLink}/actualizarPuntos`, [
        posicion1,
        posicion1PUNTOS,
        position2,
        position2POINTS,
        position3,
        position3POINTS,
        position4,
        position4POINTS,
        position5,
        position5POINTS,
        position6,
        position6POINTS,
        position7,
        position7POINTS,
        position8,
        position8POINTS,
      ]);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const updateClasificacionSanciones = async (
    leagueWeekly,
    position5,
    position6,
    position7,
    position8
  ) => {
    try {
      const resp = await Axios.post(`${ServerLink}/actualizarClasificacionSanciones`, [
        leagueWeekly,
        position5,
        position6,
        position7,
        position8,
      ]);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const updateSanciones = async (
    position5,
    position5POINTS,
    position6,
    position6POINTS,
    position7,
    position7POINTS,
    position8,
    position8POINTS
  ) => {
    try {
      const resp = await Axios.put(`${ServerLink}/actualizarSanciones`, [
        position5,
        position5POINTS,
        position6,
        position6POINTS,
        position7,
        position7POINTS,
        position8,
        position8POINTS,
      ]);
      return resp.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
        getTeam,
        getGeneralClasification,
        getWeeklyClasification,
        getLogin,
        updateLeague,
        updateClasificacionSanciones,
        updateSanciones
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
