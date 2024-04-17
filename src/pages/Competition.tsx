import React, { useEffect, useState, useMemo } from "react";
import { SideBarContext } from ".";
import Highcharts from "highcharts";
import styles from "../styles/Competition.module.scss";
import bodyStyles from "../styles/Home.module.scss";
import Link from 'next/link'
// import {HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Caption, ColumnSeries, SplineSeries, PieSeries} from 'react-jsx-highcharts';
import HighchartsReact from "highcharts-react-official";
import NavBar from "../components/NavBar";
//import { info } from "console";
import Query from "@arcgis/core/rest/support/Query";
import useInitiumTable from "../hooks/useInitiumTable";
import intl from "esri/intl";
import { Value } from "sass";
import CodedValueDomain from "esri/layers/support/CodedValueDomain";
import { constants } from "buffer";
import { arrayBuffer } from "stream/consumers";


type BarChartProps = {
  bId: intl;
  timeFrame: intl;
}
/**
 *  Uses HighCharts React to render a bar chart.
 *  This component could be easily generalized to support all types of charts that HighCharts supports.
 *  Essentially just update the options and the query and we can display whatever we want.
 */
const Competition: React.FC<BarChartProps> = ({ bId, timeFrame }) => {
    
    // TODO: memo-ize this function?
  const createQuery = (): Query => {
    let q = new Query();
    q.outFields = ["Watts", "time"];
    // q.where = `BUILDINGID = '${bId}' AND time >= CURRENT_TIMESTAMP - INTERVAL '168' HOUR`;

    q.where = `BUILDINGID = '${bId}' AND time >= CURRENT_TIMESTAMP - INTERVAL '130' DAY AND time <= CURRENT_TIMESTAMP - INTERVAL '1' DAY`;

    return q;
  };

  const data = useInitiumTable(createQuery());

  
  const drinker_data = 0.014063435;
  const dravo_data = 0.012048193;
  const richards_data = 0.015611017;
  const mnm_data = 0.011791678;
  const taylor_data = 0.004611793;
  const upper_data = 0.013562164;
  const lower_data = 0.010649742;

  const rankings: [number, String][] = [[drinker_data,'Drinker House'], [dravo_data,'Dravo House'], 
  [richards_data,'Richards House'], [mnm_data,'M&M House'],
  [taylor_data,'Taylor House'], [upper_data,'Upper Cents'], [lower_data,'Lower Cents']];
  
  rankings.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      return 0;
    }
  });
  
  const options = useMemo<Highcharts.Options>(() => {
    const opts: Highcharts.Options = {
      chart: {
        reflow: true,
      },
      tooltip: {
        pointFormatter: function () {
          // const d = new Date(this.x).toLocaleString(undefined, {
          //   month: "2-digit",
          //   day: "2-digit",
          //   year: "2-digit",
          //   second: "2-digit",
          //   minute: "2-digit",
          // });
          const energy = parseFloat(this.y + "").toLocaleString('en-IN', { minimumSignificantDigits: 5 }) + " person/kWh";

          return `Used ${energy}`;
        },
      },
      title: {
        text: "Kill-a-Watt Competition",
      },
      yAxis: {
        title:{
           text: "Energy Efficiency (Residents/kWh)",
        }
      },
      xAxis: {
        categories: ['Residence Halls']
          
      },
      series: [
        {
          name: "Drinker",
          type: "column",
          color: "#FA8D22",
          data: [drinker_data],
        },
        {
          name: "Dravo",
          type: "column",
          color: "#ADFA65",
          data: [dravo_data],
        },
        {
          name: "Richards",
          type: "column",
          color: "#E850FA",
          data: [richards_data],
        },
        {
          name: "M&M",
          type: "column",
          color: "#34C2FA",
          data: [mnm_data],
        },
        {
          name: "Taylor",
          type: "column",
          color: "#FAAF64",
          data: [taylor_data],
        },
        {
          name: "Upper Cent",
          type: "column",
          color: "#43A84F",
          data: [upper_data],
        },
        {
          name: "Lower Cent",
          type: "column",
          color: "#3466FA",
          data: [lower_data],
        },
      ],
      
      responsive: {
        rules: [{

          condition: {
            maxWidth: 480,
          },
          chartOptions: {
            chart: {
              reflow: true,
            },
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },

            yAxis: {
              title:{
                text: "Energy Efficiency (Residents/kWh)",
              },
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
            },
            
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            },
          
          }
        }]
      }
    };
    return opts;
  }, []);


  useEffect(() => {
    let rank = document.getElementsByClassName("rank");  
    let buildings = document.getElementsByClassName("name");    
    let points = document.getElementsByClassName("points");            
    for (let i = 0;i < buildings.length; i++) {
        console.log("competition page looping through buildings", i);
        rank[i].innerHTML = ""+(i+1);
        buildings[i].innerHTML = ""+rankings[i][1];
        points[i].innerHTML = ""+((1/rankings[i][0]).toFixed(2))+" kWh/resident";
    } 
  }, []);



  return (
    <body className={bodyStyles.body}>
    <NavBar></NavBar>
    <section className = {styles.section}>
    <div className = {styles.main_inner}>
        <div className={styles.info_container}>
        <div>
            Congratulations to Richards for winning the annual Kill-A-Watt Competition!<br></br>
            They totalled 64 KWh/resident over 3 weeks.<br></br><br></br>
            Congratulations to Taylor for most improved energy consumption!<br></br>
            Down from 86 KWh/resident to 56 KWh/resident over the past 3 weeks.<br></br><br></br>
            The Kill-A-Watt Competition is an annual competition hosted by the Office of Sustainability.<br></br> 
            This year, the first-year residence halls will compete with one another over the course of 
            three weeks.<br></br> Residence halls will compete based on &ldquo;energy efficiency&rdquo; and the &ldquo;most improved.&rdquo;
            <br></br>
        </div>
        <div>
            <a href={'/EnergyTips'}>Reduce energy consumption </a>
            with your dormmates to win prizes!</div>
            
        </div>
        </div>
      <div className = {styles.main_inner}>
        <div className={styles.leaderboard}>
          <HighchartsReact className={styles.highCharts} highcharts={Highcharts} options={options} />
        </div>
      </div>

      <div className = {styles.main_inner}>
        <table className={styles.styled_table}>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
            <tr><td className="rank"></td><td className="name"></td><td className="points"></td></tr>
          </tbody>
        </table>
        </div>

          <div className = {styles.main_inner}>
            <div className = {styles.footNote}>
              <p>Leaderboard is updated every Friday by 10am. Last update: 11.18.22.
                </p>
                <p>
                Email <a href='mailto:sustainability@lehigh.edu'>sustainability@lehigh.edu</a> for questions and concerns
                </p>
            </div>
          </div>


          
      
    </section>
    </body>

  );
};

export default Competition;
