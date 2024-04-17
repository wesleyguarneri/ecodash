
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/detailPage.module.scss'
import BarChart from "../../components/BarChart";
import Wrapper from "../../components/Wrapper";
import React, { useEffect, useState, useMemo } from "react";
import backArrow from "../../images/backArrow.svg";
import Link from "next/link";
import useQuery from "../../hooks/useQuery";
import Image from 'next/image';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import portalItems from "../../constants/portalItems";
import bank from "../../../dashboard_graphics/bank.png";
import power_plant from "../../../dashboard_graphics/power_plant.png"
import truck from "../../../dashboard_graphics/truck.png"
import useLastWathTotTable from "../../hooks/useLastWathTotTable";
import Query from "@arcgis/core/rest/support/Query";

/*
This file is the details page for each of the builds.
 It is a dynamic page that is generated based on the project id.
*/
let data2;
let sevenDayDiff = 0;

export default function BuildingDetail({ pageContext }) {
  const router = useRouter()
  const { id } = router.query

// We query the layer that joins the building data with energy data here instead of initium table because we need the meta data from the building.
// We could instead query the building layer, but that layer is not managed by us and I wanted to make sure we had control in case permissions change.
const table = new FeatureLayer({
  url: portalItems.buildingTable,
});

// query the layer for the shortname of the building. In the future if we wish to display more information update q.outfields.
const createQuery = () => {
  const q = table.createQuery();
  q.outFields = ["SHORTNAME"];
  q.where = `BUILDINGID = '${id}'`;
  q.returnDistinctValues = true;
  return q;
};

const data = useQuery(table, createQuery());

const createQuery2 = () => {
  let q = new Query();
  q.outFields = ["wathtot", "Time"];
  q.where = `BUILDINGID = '${id}' AND time >= CURRENT_TIMESTAMP - INTERVAL '48' HOUR AND time <= CURRENT_TIMESTAMP - INTERVAL '24' HOUR`;
  return q;
};

const createQuery3 = () => {
  let q = new Query();
  q.outFields = ["wathtot", "time"];
  q.where = `BUILDINGID = '${id}' AND time >= CURRENT_TIMESTAMP - INTERVAL '336' HOUR AND time <= CURRENT_TIMESTAMP - INTERVAL '312' HOUR`;
  return q;
};

let sum3 = 0;
let data3 = useLastWathTotTable(createQuery3());
data3
  ? data3.map((e) => {
      sum3 = (e.wathtot/1000.0);
    })
  : 0;

let sum2 = 0;

data2 = useLastWathTotTable(createQuery2());
data2 ? data2.map((d) => {
  if(id==="0067"){ //M&M's building ID="0067"
    let sevenDayAvg=1457; //update this number manually each week
    sum=sevenDayAvg*365;
  }
  else if(id==="0068"){ //Taylor's building ID="0068"
    let sevenDayAvg=1872; //update this number manually each week
    sum=sevenDayAvg*365;
  }
  else{
    sum2 = (((d.wathtot/1000.0)-sum3)*365);
    sevenDayDiff = (d.wathtot/1000.0)-sum3;
  }
}):0;


return (
  <Wrapper>
    <div className={styles.header}>
      <Link href="/" passHref>
        <svg className = {styles.arrow} xmlns="http://www.w3.org/2000/svg">
        <path d="M41.9585 24.2916H15.7677L23.7839 14.6633C24.1588 14.2123 24.3391 13.6309 24.2852 13.047C24.2314 12.463 23.9478 11.9244 23.4968 11.5496C23.0458 11.1747 22.4644 10.9944 21.8805 11.0482C21.2966 11.1021 20.7579 11.3857 20.3831 11.8366L9.34141 25.0866C9.26713 25.192 9.2007 25.3028 9.14266 25.4179C9.14266 25.5283 9.14266 25.5946 8.98808 25.705C8.88798 25.9582 8.83557 26.2277 8.8335 26.5C8.83557 26.7722 8.88798 27.0418 8.98808 27.295C8.98808 27.4054 8.98808 27.4716 9.14266 27.5821C9.2007 27.6972 9.26713 27.8079 9.34141 27.9133L20.3831 41.1633C20.5907 41.4126 20.8507 41.6131 21.1446 41.7505C21.4385 41.8879 21.7591 41.9588 22.0835 41.9583C22.5995 41.9593 23.0995 41.7796 23.4968 41.4504C23.7204 41.265 23.9053 41.0373 24.0408 40.7804C24.1763 40.5235 24.2597 40.2423 24.2864 39.9531C24.3131 39.6638 24.2824 39.3722 24.1962 39.0948C24.11 38.8174 23.9699 38.5598 23.7839 38.3366L15.7677 28.7083H41.9585C42.5442 28.7083 43.1059 28.4756 43.52 28.0615C43.9342 27.6474 44.1668 27.0857 44.1668 26.5C44.1668 25.9143 43.9342 25.3526 43.52 24.9385C43.1059 24.5243 42.5442 24.2916 41.9585 24.2916Z" fill="black"/>
        </svg>
      </Link>
      <h1 className={styles.buildingName}>
        {data ? data.map((d) => d.SHORTNAME) : "Loading"}
      </h1>
    </div>

    <div className={styles.graph_container}>
      <BarChart bId={id} timeFrame={undefined}></BarChart>
    </div>
  
    <div className={styles.flexCenter}>
      <h2>How much energy is that?</h2>
      <hr />
    </div>
    <section className={styles.equivalenciesSection}>
      <EquivalencyCard
        title= "Dollars Spent:"
        imgSrc= {bank}
        dollar='$'
        text={(sevenDayDiff)*(0.07)}
      />
      <EquivalencyCard
        title= "Pounds of CO2 Emitted:"
        imgSrc= {power_plant}
        units='lbs'
        text={(sevenDayDiff)*(0.84)}
      />
      <EquivalencyCard
        title= "Miles Driven:"
        imgSrc= {truck}
        units= 'miles'
        text={(sevenDayDiff)*(1.074)}
      />      
    </section>
  </Wrapper>
);
}

const EquivalencyCard = ({ title, imgSrc, dollar, units, text }) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <Image src={imgSrc} />
        <p className={styles.eq}>{dollar}{text.toLocaleString("en-US")} {units}</p>
      </div>
    </article>
  );
};

