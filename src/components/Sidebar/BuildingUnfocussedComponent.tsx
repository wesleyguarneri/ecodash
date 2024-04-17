import React, { useContext, useState, useEffect } from "react";
// import { View, Image, Button, Platform } from 'react-native';
import { SideBarContext } from "../../pages";
import FILTERS from "../../constants/filters";
import styles from "../../styles/SideBar.module.scss";

import Filters from "../Filters";
/*
  This component is used to display information when the site is idle and no building has been clicked on.
*/
const BuildingUnfocussedComponent = () => {
  return (
    <div className={styles.spanBoth}>

      <br></br>Welcome to Lehigh&rsquo;s Energy Dashboard! This website displays our university&rsquo;s energy usage at the building level.<br></br>
      <br></br>Click on a circle to begin.<br></br>
      <br></br>Click to add a data filter.<br></br>
      <Filters></Filters>
    </div>
  );
};
export default BuildingUnfocussedComponent;
