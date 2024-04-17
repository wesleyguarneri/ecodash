import "@arcgis/core/assets/esri/themes/dark/main.css";
import React, { useReducer } from "react";
import SideBar from "../components/Sidebar/SideBar";
import styles from "../styles/Home.module.scss";

// import * as globalStyles from "../styles/globals.scss";
// import landing from "../components/LandingPage/landingPage";
// import FILTERS from "../constants/filters";
import EsriMap from "../components/EsriMap";
import EsriMapWithNoSSR from "../components/EsriMapWithNoSSR";
import BarChart from "../components/BarChart";
const UPDATE_FOCUSSED_BUILDING = "UPDATE_FOCUSSED_BUILDING";
import FILTERS from "../constants/filters"; //added
const UNFOCUS = "UNFOCUS";
const UPDATE_FILTERS = "UPDATE_FILTERS";
import NavBar from "../components/NavBar";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import ReactGA from "react-ga4";
// ReactGA.initialize("G-0DM5RV43GH");
// ReactGA.send("pageview");

// //Multiple products (previously known as trackers)
// ReactGA.initialize([
//   {
//     trackingId: "G-0DM5RV43GH",
//   }
// ]);
// // Send pageview with a custom path
// ReactGA.send({ hitType: "pageview", page: "/my-path" });

const initialState: ReducerState = {
  buildingData: null,
  filters: [],
};

const SideBarContext = React.createContext(null);

// state of the map page
// building data - information about the currently focussed building
// filters - array of which filters are currently applied
type ReducerState = {
  buildingData: {} | null;
  filters: [keyof typeof FILTERS] | [];
};

type ReducerActions =
  | {
      type: "UPDATE_FOCUSSED_BUILDING";
      payload: {
        buildingData: ReducerState["buildingData"];
      };
    }
  | {
      type: "UNFOCUS";
    }
  | {
      type: "UPDATE_FILTERS";
      payload: {
        filters: ReducerState["filters"];
      };
    };

const reducer = (state: ReducerState, action: ReducerActions) => {
  // console.log("action: ", action);
  switch (action.type) {
    case UPDATE_FOCUSSED_BUILDING:
      return {
        ...state,
        buildingData: action.payload?.buildingData,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload?.filters,
      };
    case UNFOCUS:
      return {
        ...state,
        buildingData: null,
      };
    default:
      return initialState;
  }
};



function HomePage() {
  // We manage the state of the map in this parent and use context to pass it to both the sidebar and map components.
  // Lifting the state like this is important, for instance it allows us to save the filter state even when the sidebar unfocussed component is unmounted.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <NavBar></NavBar>
        
        <SideBarContext.Provider value={{ state, dispatch }}>
        <div className={styles.wrapper}>   
          <div className={styles.sidebarContainer}> 
            <SideBar></SideBar>
          </div>
    
          <div className={styles.mapContainer}> 
              <EsriMapWithNoSSR />
          </div>
          </div>
        </SideBarContext.Provider>

        
      </div>
    </body>
  );
}

export {
  // landing as default,
  HomePage as default,
  SideBarContext,
  UPDATE_FOCUSSED_BUILDING,
  UNFOCUS,
};