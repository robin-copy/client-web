import React, { useEffect, useState } from "react";
import "./Stock.scss";
import { connect } from "react-redux";
import stockActions from "../../stock.actions";
import { usePrevious } from "../../../utils/hooksRef";

/**
 * @description
 * @param { object } props no redux
 * @return { * } component
 * 1 [X] Debe mostrar la cotización de la acción en el momento con la diferencia del día.  A la derecha debe mostrar el nombre de la empresa.
 2 - La diferencia de rentabilidad en el día estará en color:
         a - Rojo: En el caso que el porcentaje de rentabilidad sea negativo.
         b - Verde: En el caso que el porcentaje de rentabilidad sea positivo.
         c -  Gris: En el caso que el porcentaje de rentabilidad sea cero.
 3 - [X] Se debe mostrar la cotización actual de la acción.
 4 -Se debe mostrar un gráfico con la variación diaria en la cotización.
    Debe tener la opción de pedir la visualización de
    la variación en la cotización por semana, por mes,
    por medio año y un año.
 5- Debe haber una tabla con las estadísticas de la acción.
         a - Open: el valor con el que abrió la acción en la bolsa.
         b - High: el valor máximo que tomó la acción en el día.
         c - Low: el valor mínimo que tomó la acción en el día.
         d - 52wk high: el valor máximo que tomó la acción en las últimas 52 semanas.
         e - 52wk low: el valor mínimo que tomó la acción en las últimas 52 semanas.
         f - Volume: la cantidad de títulos negociados de la acción en el día.
         g - Avg volume: el volumen medio de las acciones negociadas en las últimas 52 semanas.
         h - Mkt cap: la dimensión económica de la empresa.
         i - P/E ratio: el ratio de la empresa (la cotización del momento de la empresa dividido las ganancias reportadas en los últimos cuatro trimestres).
         j - Div/Yield: el rendimiento por dividendo.
 6- [X] Debe aparecer un cuadro con información de la empresa.
 7- Arriba deberá aparecer una cruz para salir de la visualización de la acción específica.


 */
import { Line } from "react-chartjs-2";

const renderLineChart = (info) => {
  if (!info) {
    return;
  }
  const data = info.map((x) => x.price);
  const labels = info.map((x) => x.date);

  const customData = {
    labels: labels,
    datasets: [
      {
        label: "price",
        data: data,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  return (
    <div style={{ maxWidth: "400px" }}>
      <Line data={customData} width={400} type={"line"} />
    </div>
  );
};

export const Stock = (props) => {
  const {
    stockBasicData, // aca va a ser la data que se tenga de la lista sobre el stock. minimo necesito el stockSymbol
    showChart = false,

    getStockDataStatus,
    stockData,
    getStockData,
  } = props;

  const [stock, setStock] = useState(null);
  const previousStatus = usePrevious({ getStockDataStatus });

  useEffect(() => {
    // todo mover esto a el use effect de abajo en getStockDataStatus. cuando conectemos con el back
    setStock({
      companyName: "Tesla Inc",
      stockSymbol: "TSLA",
      dayProfit: -15.599999999999909,
      price: 623.9,
      stockPrices: [
        {
          price: 176.31199999999998,
          date: 1591056000,
        },
        {
          price: 176.592,
          date: 1591142400,
        },
        {
          price: 172.876,
          date: 1591228800,
        },
      ],
      openValue: 627.8,
      dayHigh: 633.8,
      dayLow: 620.55,
      yearHigh: 900.4,
      yearLow: 177.304,
      avgVolume: 3.599092692063492e7,
      peRatio: "Infinity",
      divYield: 622.9,
      marketCap: 542798,
      companyDescription:
        "Tesla Inc is a Automobiles company. It's official site is https://www.tesla.com/",
      profit: 0.0,
      profitPercentage: 0.0,
      dayVariationPercentage: -0.21157236736657317,
    });
    if (getStockData) {
      getStockData(stockBasicData);
    }
  }, []);

  useEffect(() => {
    if (
      previousStatus &&
      previousStatus.getStockDataStatus !== getStockDataStatus &&
      !getStockDataStatus.loading
    ) {
      if (getStockDataStatus.success) {
        //si fue success el request.
      }
    }
  }, [getStockDataStatus]);

  useEffect(() => {
    // todo hacer algo al respecto segun un succes o un error.
  }, [getStockDataStatus]);

  const handleCrossClicked = () => {};
  return (
    <div className={"stock"}>
      <div className={"title"}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span data-testid="company">Company: {stock?.companyName}</span>
            <span>{stock?.companyDescription}</span>
          </div>
          <button onClick={handleCrossClicked} data-testid="cross-button">
            X
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Stock value: {stock?.price}</span>
          <span>Diff: {stock?.dayProfit} %</span>
        </div>
      </div>

      <div className={"body"}>
        <div></div>
        <div aria-label={"table"}>
          <ul>
            <li aria-label={"list-element"}>Open: {stock?.openValue}</li>
            <li aria-label={"list-element"}>High: {stock?.dayHigh}</li>
            <li aria-label={"list-element"}>Low: {stock?.dayLow}</li>
            <li aria-label={"list-element"}>52w high: {stock?.yearHigh}</li>
            <li aria-label={"list-element"}>52w low: {stock?.yearLow}</li>
            <li aria-label={"list-element"}>Volume: {stock?.volume}</li>
            <li aria-label={"list-element"}>Avg volume: {stock?.avgVolume}</li>
            <li aria-label={"list-element"}>Mkt cap: {stock?.marketCap}</li>
            <li aria-label={"list-element"}>P/E ratio: {stock?.peRatio}</li>
            <li aria-label={"list-element"}>Div/yield: {stock?.divYield}</li>
          </ul>
        </div>

        {showChart && renderLineChart(stock?.stockPrices)}
      </div>
    </div>
  );
};

Stock.propTypes = {};

const mapStateToProps = (state) => ({
  getStockDataStatus: state.stock.getStockDataStatus,
  stockData: state.stock.stockData,
});

const mapDispatchToProps = (dispatch) => ({
  getStockData: (stock) => dispatch(stockActions.getStockData(stock)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
