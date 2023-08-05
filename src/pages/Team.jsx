import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserProvider";
import { useParams } from "react-router-dom";
import { sorting } from "../utils/strings";
import image1 from "../assets/escudos/escudo.png";
import image2 from "../assets/escudos/visionAristotelica.png";
import image3 from "../assets/escudos/pussy.png";
import image4 from "../assets/escudos/atleticoMandril.png";
import image5 from "../assets/escudos/birisSur.png";
import image6 from "../assets/escudos/malakaPlaya.png";
import image7 from "../assets/escudos/rebusEstantibus.png";
import image8 from "../assets/escudos/elChalecoDePacheco.png";
import {
  mensaje1,
  mensaje2,
  mensaje3,
  mensaje4,
  mensaje5,
  mensaje6,
  mensaje7,
  mensaje8,
} from "../utils/constants";

const Team = () => {
  const { getTeam, getGeneralClasification } = useContext(UserContext);
  const [team, setTeam] = useState([]);
  const [generalClasification, setGeneralClasification] = useState([]);
  const routeParams = useParams();

  const fetchData = async () => {
    // GENERAL
    let teamsGeneral = await getGeneralClasification();
    setGeneralClasification(teamsGeneral);
    // EQUIPOS
    let teamData = await getTeam(Number(routeParams["id"]));
    setTeam(teamData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const retrieveImage = () => {
    switch (Number(routeParams["id"])) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      case 5:
        return image5;
      case 6:
        return image6;
      case 7:
        return image7;
      case 8:
        return image8;
      default:
        break;
    }
  };

  const retrieveMessage = (position) => {
    switch (position) {
      case 1:
        return mensaje1;
      case 2:
        return mensaje2;
      case 3:
        return mensaje3;
      case 4:
        return mensaje4;
      case 5:
        return mensaje5;
      case 6:
        return mensaje6;
      case 7:
        return mensaje7;
      case 8:
        return mensaje8;
      default:
        break;
    }
  };

  return (
    <div className="pageBackground">
      <Header />
      <div className="teamPage">
        <div>
          <img className="imageEscudo" src={retrieveImage()} />
        </div>
        {sorting(generalClasification, "points", "desc")?.map((teamClasification, index) => {
          if (teamClasification?.id === Number(routeParams["id"])) {
            return (
              <div className="teamData">
                <h2>{team[0]?.name}</h2>
                <h3>{index+1}º puesto</h3>
                <p>
                  {team[0]?.points} puntos | {team[0]?.moneySpent}€ invertidos
                  en la liga
                </p>
                <p className="messageTeamPage">{retrieveMessage(index + 1)}</p>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
