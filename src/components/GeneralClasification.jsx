import React from "react";
import { sorting } from "../utils/strings";

const GeneralClasification = ({ teams }) => {
  return (
    <div className="informationTable">
      <h2>CLASIFICACIÓN GENERAL</h2>
      <div>
        <div className="tableHeader">
          <div className="teamColumn">Posición</div>
          <div className="moneyColumn">Equipo</div>
          <div className="moneyColumn">Puntos</div>
        </div>
        <div>
          {sorting(teams, "points", "desc")?.map((team, index) => {
            return (
              <div key={team.id}>
                <div className="tableBody">
                  <div className="teamColumn">{index + 1}</div>
                  <div className="moneyColumn">{team?.name}</div>
                  <div className="moneyColumn">{team?.points}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneralClasification;
