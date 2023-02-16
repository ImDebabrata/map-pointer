import React from "react";
import styled from "styled-components";

const Map = ({ mapView }) => {
  return (
    <MapOuter className="dekar">
      <GmapCanvas>
        <iframe
          width="800"
          height="500"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${mapView}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <br />
      </GmapCanvas>
    </MapOuter>
  );
};

const MapOuter = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const GmapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  //   height: 70vh;
  //   width: 90vw;
`;

{
  /* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */
}

export default Map;
