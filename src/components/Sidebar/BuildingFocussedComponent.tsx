import React, { useEffect, useState, useMemo } from "react";
import styles from "../../styles/SideBar.module.scss";
import BarChart from "../BarChart";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Button from "../Button";
import Link from "next/link";
import Query from "@arcgis/core/rest/support/Query";
import useLastWathTotTable from "../../hooks/useLastWathTotTable";
/*
  This component is used to display the building information when a building is clicked on the map.
  */
const BuildingFocussedComponent = ({ buildingData }) => {
  const {
    YEARBUILT: yearBuilt,
    SHORTNAME: shortName,
    LONGNAME: longName,
    MANUALGROS: grossArea,
    BUILDINGID: id,
  } = buildingData || {};

  // Loads Watt Hr Total for the past day
  const createQuery = (): Query => {
    let q = new Query();
    q.outFields = ["wathtot", "Time"];
    q.where = `BUILDINGID = '${id}' AND time >= CURRENT_TIMESTAMP - INTERVAL '48' HOUR AND time <= CURRENT_TIMESTAMP - INTERVAL '24' HOUR`;
    return q;
  };

  // Loads Watt Hr Total for 2 days ago
  const createQuery2 = (): Query => {
    let q = new Query();
    q.outFields = ["wathtot", "Time"];
    q.where = `BUILDINGID = '${id}' AND time >= CURRENT_TIMESTAMP - INTERVAL '72' HOUR AND time <= CURRENT_TIMESTAMP - INTERVAL '48' HOUR`;
    return q;
  };

  let sum2 = 0;
  let data2 = useLastWathTotTable(createQuery2());
  data2
    ? data2.map((e) => {
        sum2 = (e.wathtot/1000.0);
      })
    : 0;

  let sum = 0;
  let oneDayDiff = 0;
  let data = useLastWathTotTable(createQuery());


    data ? data.map((d) => {
      /**
       * note: This is a quick fix for the Kill-a-Watt competition. Each week, the sevenDayAvg for
       * M&M and Taylor must be manually updated with the 7-day-average in kilowatt-hours. 
       * 
       * Prior to this fix, M&M's energy data was only being calculated with shark meter "eigmeter-mm-bldg67_res_lehigh_edu". But it 
       * should be calculated with (eigmeter-mm-bldg67_res_lehigh_edu) + (eigmeter-mm-bldg49_res_lehigh_edu) + 0.594*(eigmeter-taylor-bldg68_res_lehigh_edu).
       * 
       * Prior to this fix, Taylor's energy data was being calculated with shark meters "eigmeter-taylorhall-bldg68_res_lehigh_edu"
       * and "eigmeter-taylor-bldg68_res_lehigh_edu". But it should be calculated with (eigmeter-taylorhall-bldg68_res_lehigh_edu)
       * + 0.406*(eigmeter-taylor-bldg68_res_lehigh_edu).
       * 
       * To fix this issue permanently, the data_pipeline.py should be updated to reflect the above calculations. 
       */
      if(id==="0067"){ //M&M's building ID="0067"
        let sevenDayAvg=1304; //update this number manually each week
        sum=sevenDayAvg*365;
      }
      else if(id==="0068"){ //Taylor's building ID="0068"
        let sevenDayAvg=1263; //update this number manually each week
        sum=sevenDayAvg*365;
      }
      else{
        // console.log(((d.wathtot/1000.0)-sum2));
        sum = (((d.wathtot/1000.0)-sum2)*365);
        oneDayDiff = (d.wathtot/1000.0)-sum2;
      }
      })
    : 0;

  let avg = (sum/365);
  let EUI = (sum*3.41214)/grossArea;

  return (
    <>
    <section className={styles.spanBoth}>
      <div className={styles.title}>{longName}</div>
    </section>
    <section className={styles.dataPoints}>
      <div className={styles.leftWrapper}>
        <div className={styles.intensityData}>
        <DataPoint
          title="Energy Use Intensity"
          data={`${EUI.toLocaleString()} kBtu/ft\u00B2`}
        />
        </div>
        <div className={styles.avgData}>
        <DataPoint
          title="Average Energy Usage"
          data={`${avg.toLocaleString()} kWh/day`}
        /></div>
        <div className={styles.yearData}>
        <DataPoint title="Year Built" data={yearBuilt} />
        </div>
        </div>
        <div className={styles.rightWrapper}>
        <div className={styles.measurementData}>
        <DataPoint title="Square Footage" data={`${grossArea} ft\u00B2`} />
        </div>
        <div className={styles.annualData}>
        <DataPoint
          title="Annual Usage"
          data={`${sum.toLocaleString()} kWh/year`}
        />
        </div>
        
        <Link href={`/details/${id}`} passHref>
          <Button text="View Details"></Button>
        </Link>
      </div>
    </section>

    </>
  );
};

const DataPoint = ({ title, data, spanBoth = false }) => {
  return (
    <div className={`${styles.dataPoint} ${spanBoth && styles.focusedSpanBoth}`}>
      <p>{title}</p>
      <p className={styles.pdata}>{data}</p>
    </div>
  );
};

export default BuildingFocussedComponent;
