import React from "react";
import loaderSrc from "../../assets/loader.gif";

const Loader = props => (
    <div>
        <img src={loaderSrc} alt="Loader icon" style={{ width: 350 }} />
    </div>
);

export default Loader;
