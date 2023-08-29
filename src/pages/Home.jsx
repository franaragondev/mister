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

  useEffect(() => {
    showData();
  }, [showTable]);

  const showData = () => {
    let tableNumber = showTable
    switch (Number(tableNumber)) {
      case 1:
        console.log('1', tableNumber);
        return <GeneralGastosClasification teams={generalClasification} />;
      case 2:
        console.log('2', tableNumber);
        return <JornadasClasification />;
      default:
        console.log('0', tableNumber);
        return <GeneralClasification teams={generalClasification} />;
    }
  };

  return (
    <div className="pageBackground">
      <Header />
      <div className="tableContainer">
        <div className="selectContainer">
          <select onChange={(value) => setShowTable(value.target.value)}>
            <option value="0" selected>
              Clasificación Liga
            </option>
            <option value="1">Clasificación General Gastos</option>
            <option value="2">Clasificación Semanal Gastos</option>
          </select>
        </div>
        {/* <div className="buttonContainer">
          <button onClick={() => setShowTable(0)}>Clasificación Liga</button>
          <button onClick={() => setShowTable(1)}>
            Clasificación General Gastos
          </button>
          <button onClick={() => setShowTable(2)}>
            Clasificación Semanal Gastos
          </button>
        </div> */}
        {showData()}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
