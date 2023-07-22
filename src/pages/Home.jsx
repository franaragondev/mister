import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserProvider";
import GeneralGastosClasification from "../components/GeneralGastosClasification";
import GeneralClasification from "../components/GeneralClasification";
import JornadasClasification from "../components/JornadasClasification";

const Home = () => {
  const { getGeneralClasification } = useContext(UserContext);
  const [generalClasification, setGeneralClasification] = useState([]);
  const [showTable, setShowTable] = useState(0);

  const fetchData = async () => {
    // GENERAL
    let teamsGeneral = await getGeneralClasification();
    setGeneralClasification(teamsGeneral);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showData = () => {
    switch (showTable) {
      case 1:
        return <GeneralGastosClasification teams={generalClasification} />;
      case 2:
        return <JornadasClasification />;
      default:
        return <GeneralClasification teams={generalClasification} />;
    }
  };

  return (
    <div className="pageBackground">
      <Header />
      <div className="tableContainer">
        <div className="buttonContainer">
          <button onClick={() => setShowTable(0)}>Clasificación Liga</button>
          <button onClick={() => setShowTable(1)}>Clasificación General Gastos</button>
          <button onClick={() => setShowTable(2)}>Clasificación Semanal Gastos</button>
        </div>
        {showData()}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
