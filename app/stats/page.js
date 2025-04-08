"use client";
import "../styles/StatisticsStyles.css";
import "../styles/NavbarStyles.css";
import Head from "next/head";
import { useEffect } from 'react';
export default function Stats() {
  useEffect(() => {
    const plot = document.createElement('script');
    plot.src = "https://cdn.plot.ly/plotly-latest.min.js";
    plot.async = false;
    document.body.appendChild(plot);
    const chart = document.createElement('script');
    chart.src = "/Scripts/Charts.js";
    chart.async = false;
    document.body.appendChild(chart);
    return () => {
      document.body.removeChild(plot);  
      document.body.removeChild(chart);   
    }     
}, []);
  return (

    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Statistics</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Impact&display=swap" />
    </Head>
    <div className="container-bar">
        <h1 id="task-header">Task Statistics</h1>
        <div id="nav-buttons" className="button-container">
        <div className="buttons">   
        </div>
        </div>
    </div>
    <div className="chart" id="barChart" />
    {/*<div class="chart" id="lineChart"></div>-*/}
    

    </>
  );
}