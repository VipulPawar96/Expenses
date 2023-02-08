import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map( dataPoint => dataPoint.value);
    const maxValue = Math.max(...dataPointsValue);

    return(
        <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar
        value = {dataPoint.value}
        label = {dataPoint.label}
        key = {dataPoint.label}
        max = {maxValue}
        />
        )}</div>
    );
}

export default Chart;