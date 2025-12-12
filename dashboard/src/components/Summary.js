import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { DoughnutGraph } from "./DoughnutGraph";
import API_URL from "../api";

const Summary = () => {
  const { user } = useContext(GeneralContext);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      setHoldings(res.data);
    });
  }, []);

  let totalInvestment = 0;
  let currentValue = 0;
  
  holdings.forEach((holding) => {
    totalInvestment += holding.qty * holding.avg;
    currentValue += holding.qty * holding.price;
  });

  const pnl = currentValue - totalInvestment;
  const pnlPercentage = totalInvestment !== 0 ? (pnl / totalInvestment) * 100 : 0;

  const data = {
    labels: holdings.map((holding) => holding.name),
    datasets: [
      {
        label: "Stock Value",
        data: holdings.map((holding) => holding.price * holding.qty),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {user ? user.username : "User"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{Math.floor(currentValue / 1000)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>{Math.floor(totalInvestment / 1000)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {Math.floor(pnl / 1000)}k <small>{pnlPercentage.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Portfolio Distribution</p>
        </span>
        <div style={{ width: "50%", maxHeight: "400px" }}>
            <DoughnutGraph data={data} />
        </div>
      </div>
    </>
  );
};

export default Summary;
