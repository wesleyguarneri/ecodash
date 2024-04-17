import styles from "../styles/detailPage.module.scss";
import BarChart from "./BarChart";
import Wrapper from "./Wrapper";
import React, { useEffect, useState, useMemo } from "react";
import backArrow from "../images/backArrow.svg";
import windmill from "../images/windmill.svg";
import Link from "next/link";
import useQuery from "../hooks/useQuery";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import portalItems from "../constants/portalItems";


export default function BuildingDetail({ pageContext }) {
  const { id } = pageContext;

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

  return (
    <Wrapper>
      <div className={styles.header}>
        <Link href="/" passHref>
          <img src={backArrow} className={styles.arrow} />
        </Link>
        <h1 className={styles.buildingName}>
          {data ? data.map((d) => d.SHORTNAME) : "loading"}
        </h1>
      </div>

      <BarChart bId={id} timeFrame={undefined}></BarChart>

      <div className={styles.flexCenter}>
        <h2>How much energy is that?</h2>
        <hr />
      </div>
      <section className={styles.equivalenciesSection}>
        {/* {equivalencies.map((e) => {
          return <EquivalencyCard key={e.imgSrc} {...e} />;
        })} */}
      </section>
    </Wrapper>
  );
}

const EquivalencyCard = ({ title, imgSrc, text }) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <img src={imgSrc}></img>
        <p>{text}</p>
      </div>
    </article>
  );
};
