import dynamic from "next/dynamic";
/*
  The server wouldn't deploy correctly with SSR enabled. This runs the map without SSR.
*/
const EsriMapWithNoSSR = dynamic(() => import("./EsriMap"), {
  ssr: false,
});

export default EsriMapWithNoSSR;