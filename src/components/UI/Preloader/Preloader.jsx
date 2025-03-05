import React from "react";
import preloader from "../../../Accetc/Images/loader.gif";
const Preloader = () => {
  return (
    <div style={{ display: "flex ", justifyContent: "center" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
