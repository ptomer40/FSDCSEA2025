import React, { useState } from 'react'
import cat from './cat3.png';
function ImageManipulation() {

    const [catHeight,setCatHeight]=useState(200);
    const [catWidth,setcatwidth]=useState(200);

   function handleWidth(){
     setcatwidth(catWidth+10);
   }

   function handleHeight(){

   }

  return (
    <div>
        <h2>ImageManipulation</h2>
        <div style={{border:'2px solid red', height:'400px', width:'400px', marginLeft:'200px'}}>
            <img src={cat} height={catHeight} width={catWidth} alt='cat image' style={{paddingLeft:'100px', paddingTop:'100px'}} />
        </div>
        <div>
            <button>Increase Height</button>
             <button onClick={handleWidth}>Increase Width</button>

        </div>


    </div>
  )
}

export default ImageManipulation