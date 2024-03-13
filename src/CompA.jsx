import React from "react";
import CompB from './CompB';
function CompA(){
    let a =100;
    let b =200;
    return(
        <div>
<h1>Component A</h1> <hr></hr>
<CompB props={[a,b]} />
        </div>
    );
}
export default CompA