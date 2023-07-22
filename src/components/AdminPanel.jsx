import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";

const AdminPanel = () => {
  const { getGeneralClasification, updateLeague, updateClasificacionSanciones, updateSanciones } =
    useContext(UserContext);
  const [generalClasification, setGeneralClasification] = useState([]);
  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  ];
  const [weekNumber, setWeekNumber] = useState(1);
  let position1 = "";
  let position1POINTS = 0;
  let position2 = "";
  let position2POINTS = 0;
  let position3 = "";
  let position3POINTS = 0;
  let position4 = "";
  let position4POINTS = 0;
  let position5 = "";
  let position5POINTS = 0;
  let position6 = "";
  let position6POINTS = 0;
  let position7 = "";
  let position7POINTS = 0;
  let position8 = "";
  let position8POINTS = 0;

  const fetchData = async () => {
    // GENERAL
    let teamsGeneral = await getGeneralClasification();
    setGeneralClasification(teamsGeneral);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePoints = (position, teamPoints) => {
    switch (position) {
      case 1:
        position1POINTS = teamPoints;
        break;
      case 2:
        position2POINTS = teamPoints;
        break;
      case 3:
        position3POINTS = teamPoints;
        break;
      case 4:
        position4POINTS = teamPoints;
        break;
      case 5:
        position5POINTS = teamPoints;
        break;
      case 6:
        position6POINTS = teamPoints;
        break;
      case 7:
        position7POINTS = teamPoints;
        break;
      case 8:
        position8POINTS = teamPoints;
        break;
      default:
        break;
    }
  };

  const handleNames = (position, teamName) => {
    switch (position) {
      case 1:
        position1 = teamName;
        break;
      case 2:
        position2 = teamName;
        break;
      case 3:
        position3 = teamName;
        break;
      case 4:
        position4 = teamName;
        break;
      case 5:
        position5 = teamName;
        break;
      case 6:
        position6 = teamName;
        break;
      case 7:
        position7 = teamName;
        break;
      case 8:
        position8 = teamName;
        break;
      default:
        break;
    }
  };

  const showTeamsTable = () => {
    return generalClasification.map((team, index) => {
      return (
        <div className="teamsAdmin">
          <span>Posición {index + 1}: </span>
          <select
            onChange={(selection) =>
              handleNames(index + 1, selection.target.value)
            }
            id="weekSelector"
          >
            <option key={0} value={0}>
              Seleccione Equipo
            </option>
            {generalClasification.map((team) => {
              return (
                <option key={team?.id} value={team?.id}>
                  {team?.name}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            onChange={(value) => handlePoints(index + 1, value.target.value)}
            id="inputPuntos"
            placeholder="Añada los puntos"
          ></input>
        </div>
      );
    });
  };

  const sendDatas = async () => {
    let actualizarLiga = await updateLeague(
      position1POINTS,
      position1,
      position2POINTS,
      position2,
      position3POINTS,
      position3,
      position4POINTS,
      position4,
      position5POINTS,
      position5,
      position6POINTS,
      position6,
      position7POINTS,
      position7,
      position8POINTS,
      position8
    );
    let actualizarClasificacionSanciones = await updateClasificacionSanciones(
      weekNumber,
      position5,
      position6,
      position7,
      position8
    );
    let actualizarSanciones = await updateSanciones(
      position5POINTS,
      position5,
      position6POINTS,
      position6,
      position7POINTS,
      position7,
      position8POINTS,
      position8
    );
    window.location.href = `/login`;
  };

  return (
    <div className="loginPage">
      <div className="loginHeader">
        <h2>Bienvenido, {JSON.parse(localStorage.getItem("user")).userName}</h2>
      </div>
      <div className="actionContainer">
        <div>
          <span>Número Jornada: </span>
          <select
            onChange={(selection) => setWeekNumber(selection.target.value)}
            id="weekSelector"
          >
            {weeks.map((week) => {
              return (
                <option key={week} value={week}>
                  Jornada {week}
                </option>
              );
            })}
          </select>
        </div>
        <div className="clasificacionAdmin">
          <h3>Clasificación</h3>
          {showTeamsTable()}
        </div>
        <button onClick={() => sendDatas()} className="enviarButton">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
