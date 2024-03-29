import React from "react";
import { sorting } from "../utils/strings";
import dollarKing from "../assets/dollarKing.png";

const GeneralGastosClasification = ({teams}) => {
  return (
    <div className="informationTable">
      <h2>CLASIFICACIÓN GENERAL GASTOS</h2>
      <div className="tableStyledGASTOS">
        <div className="tableHeader">
          <div className="moneyColumn">Equipo</div>
          <div className="positionColumn">Gastos</div>
        </div>
        <div className="tableBodyStyledGASTOS">
          {sorting(teams, "moneySpent", 'desc')?.map((team, index) => {
            return (
              <div key={team.id}>
                <div className="tableBody">
                  <div className="teamNameCursor" onClick={() => window.location.href = `/Team/${team?.id}`} className="moneyColumn">{team?.name} {index === 0 &&  <img className="dollarKing" src={dollarKing} alt="team icon" />}</div>
                  <div className="positionColumn">{team?.moneySpent}€</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneralGastosClasification;
