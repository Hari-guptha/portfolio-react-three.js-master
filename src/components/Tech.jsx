import React from "react";
import Techcanvas from "./canvas/Tech";
import Technologies from './hyper'
import '../assets/css/central.css'

const Tech = () => {
    return (
        <div  style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:"50px",width:"20"}}>
            {Technologies.map((Technology) => (
                <div  key={Technology.name}>
                    <Techcanvas icon={Technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default Tech