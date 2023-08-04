import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import {
  gastosPosicion5,
  gastosPosicion6,
  gastosPosicion7,
  gastosPosicion8,
} from "../utils/constants";

const JornadasClasification = () => {
  const { getTeam, getWeeklyClasification } = useContext(UserContext);
  const [weeklyClasification, setWeeklyClasification] = useState([]);
  const [position5, setPosition5] = useState([]);
  const [position6, setPosition6] = useState([]);
  const [position7, setPosition7] = useState([]);
  const [position8, setPosition8] = useState([]);

  useEffect(() => {
    // WEEKLY
    fetchWeeks();
  }, []);

  const teams = async (week, weekNumber) => {
    let team5 = await getTeam(week[weekNumber]?.position5);
    let team6 = await getTeam(week[weekNumber]?.position6);
    let team7 = await getTeam(week[weekNumber]?.position7);
    let team8 = await getTeam(week[weekNumber]?.position8);

    setPosition5(team5);
    setPosition6(team6);
    setPosition7(team7);
    setPosition8(team8);
  };

  const fetchWeeks = async () => {
    let teamsWeekly = await getWeeklyClasification();
    setWeeklyClasification(teamsWeekly);
    teams(teamsWeekly, teamsWeekly.length - 1);
  };

  const handleWeek = async (week) => {
    teams(weeklyClasification, week - 1);
  };

  return (
    <div className="informationTable">
      <h2>CLASIFICACIÓN GASTOS POR JORNADAS</h2>
      <div className="weeklySelector">
        <select onChange={(selection) => handleWeek(selection.target.value)}>
          {weeklyClasification.map((week) => {
            return (
              <option
                selected={week.leagueWeekly === weeklyClasification?.length}
                value={week.leagueWeekly}
              >
                Jornada {week.leagueWeekly}
              </option>
            );
          })}
        </select>
      </div>
      <div className="tableStyled">
        <div className="tableHeader">
          <div className="nameColumn">Equipo</div>
          <div className="positionColumn">Gastos</div>
        </div>
        {weeklyClasification.length ? (
          <div className="tableBodyStyled">
            {/* POSITION 7 */}
            <div key={7}>
              <div className="tableBody">
                <div className="teamNameCursor" onClick={() => window.location.href = `/Team/${position5[0]?.id}`} className="nameColumn">{position5[0]?.name}</div>
                <div className="positionColumn">{gastosPosicion5}€</div>
              </div>
            </div>
            {/* POSITION 8 */}
            <div key={8}>
              <div className="tableBody">
                <div className="teamNameCursor" onClick={() => window.location.href = `/Team/${position6[0]?.id}`} className="nameColumn">{position6[0]?.name}</div>
                <div className="positionColumn">{gastosPosicion6}€</div>
              </div>
            </div>
            {/* POSITION 9 */}
            <div key={9}>
              <div className="tableBody">
                <div className="teamNameCursor" onClick={() => window.location.href = `/Team/${position7[0]?.id}`} className="nameColumn">{position7[0]?.name}</div>
                <div className="positionColumn">{gastosPosicion7}€</div>
              </div>
            </div>
            {/* POSITION 10 */}
            <div key={10}>
              <div className="tableBody">
                <div className="teamNameCursor" onClick={() => window.location.href = `/Team/${position8[0]?.id}`} className="nameColumn">{position8[0]?.name}</div>
                <div className="positionColumn">{gastosPosicion8}€</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="tableBody">
            <div className="noResults">Sin resultados</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JornadasClasification;
