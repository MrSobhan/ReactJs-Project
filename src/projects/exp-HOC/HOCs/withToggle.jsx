import React, { useState } from 'react';

const withToggle = (OriginalComponent) => {
    return (prop)=>{
        const [isShow , setIsShow] = useState(false)
  
        const clickHandler = ()=>{
          setIsShow(prev => !prev)
        }
        
        return <OriginalComponent showInfo={isShow}
        clickHandlerQus={clickHandler} {...prop}/>
    }
}


export default withToggle;