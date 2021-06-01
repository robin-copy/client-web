import React from 'react';
import './Stock.scss';
import {connect} from 'react-redux';
import stockActions from "../../stock.actions";


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
const Stock = (props) => {
    const {

    } = props;

    const data =
        {
            companyName: 'tesla',
            companyDescription: 'Electrical inc',
            dayProfit:5,
            price: 55,
            historyData: {week:[45,37,29,60], year:[20,44,45,37,29,60,20,44,45,37,29,60]},
            openValue: 50,
            dayHigh: 60,
            dayLow: 40,
            yearHigh: 70,
            yearLow:20,
            volume: 20,
            avg_volume: 30,
            mkt_cap: 10,
            pe_ratio: 30,
            div_Yield: 20,
        }
    return (
        <div className={'stock'}>
            <div className={'title'}>
                <div>
                    <span>Company: {data.companyName}</span>
                    <span>{data.companyDescription}</span>
                </div>
                <div>
                    <span>Stock value: {data.price}</span>
                    <span>Diff: {data.dayProfit} %</span>
                </div>
            </div>

            <div className={'body'}>
                <div>
                </div>
                <div aria-label={'table'}>
                    <ul>
                        <li aria-label={'list-element'}>Open: {data.openValue}</li>
                        <li aria-label={'list-element'}>High: {data.dayHigh}</li>
                        <li aria-label={'list-element'}>Low: {data.dayLow}</li>
                        <li aria-label={'list-element'}>52w high: {data.yearHigh}</li>
                        <li aria-label={'list-element'}>52w low: {data.yearLow}</li>
                        <li aria-label={'list-element'}>Volume: {data.volume}</li>
                        <li aria-label={'list-element'}>Avg volume: {data.avg_volume}</li>
                        <li aria-label={'list-element'}>Mkt cap: {data.mkt_cap}</li>
                        <li aria-label={'list-element'}>P/E ratio: {data.pe_ratio}</li>
                        <li aria-label={'list-element'}>Div/yield: {data.div_Yield}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Stock.propTypes = {

};

const mapStateToProps = state => ({
    getStockDataStatus: state.stock.getStockDataStatus,
});

const mapDispatchToProps = dispatch => ({
        getStockData: (id) => dispatch(stockActions.getStockData(id)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
