import React from 'react';

import PortalImg from "./images/portal.jpg";

export const Portal: React.FC = () => {
    return (
        <img
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100vw",
            }}
            src={PortalImg}
        />
    );
};
