import React from "react";

function CompB({props}){
    const [a,b] = props
   

    return(
        <div>
            <h2>ComponentB</h2><hr></hr>
            {/* <pre>{JSON.stringify(props)}</pre> */}
            <h3>property 1:{a}</h3>
            <h4>property2:{b}</h4>
        </div>
    );
}
export default CompB