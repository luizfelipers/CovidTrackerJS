import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData);
        }


        fetchAPI();
    },[]);

    const lineChart = (

        dailyData.length  ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets:
                        [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,

                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'red',
                            fill: true,
                        }],
                }}

            ></Line>

        ) : null


    );

    const barChart = (
        confirmed ?
        (
            <Bar 
            data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:['blue','green','red'],
                        
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
            }}
            options={{
                legend: {display:false},
                title: {display: true, text: `Situação atual no(a) ${country}`},
            }}
            >

            </Bar>
        ) : null
    )

    return (
        <div className={styles.container}>


          {/* 
          {lineChart}
          */} 

          {country? barChart : lineChart}

        </div>
    )
}

export default Chart
