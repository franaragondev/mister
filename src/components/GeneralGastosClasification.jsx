import React from "react";
import { sorting } from "../utils/strings";
import dollarKing from "../assets/dollarKing.png";

const GeneralGastosClasification = ({teams}) => {
  return (
    <div className="informationTable">
      <h2>CLASIFICACIÓN GENERAL GASTOS</h2>
      <div className="tableStyled">
        <div className="tableHeader">
          <div className="teamColumn">Equipo</div>
          <div className="moneyColumn">Gastos</div>
        </div>
        <div className="tableBodyStyled">
          {sorting(teams, "moneySpent", 'desc')?.map((team, index) => {
            return (
              <div key={team.id}>
                <div className="tableBody">
                  <div className="teamColumn">{team?.name} {index === 0 &&  <img className="dollarKing" src={dollarKing} alt="team icon" />}</div>
                  <div className="moneyColumn">{team?.moneySpent}€</div>
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
