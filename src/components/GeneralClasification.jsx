import React from "react";
import { sorting } from "../utils/strings";

const GeneralClasification = ({ teams }) => {
  return (
    <div className="informationTable">
      <h2>CLASIFICACIÓN GENERAL</h2>
      <div className="tableStyled">
        <div className="tableHeader">
          <div className="positionColumn">Posición</div>
          <div className="nameColumn">Equipo</div>
          <div className="pointColumn">Puntos</div>
        </div>
        <div className="tableBodyStyled">
          {sorting(teams, "points", "desc")?.map((team, index) => {
            return (
              <div key={team.id}>
                <div className="tableBody">
                  <div className="positionColumn">{index + 1}</div>
                  <div className="nameColumn">
                    <div>
                      <span className="teamNameCursor" onClick={() => window.location.href = `/Team/${team?.id}`}>{team?.name}</span>
                      <span>{team?.points} puntos</span>
                    </div>
                  </div>
                  <div className="pointColumn">{team?.points} puntos</div>
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
