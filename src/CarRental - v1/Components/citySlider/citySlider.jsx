import React, { useEffect, useContext, useState } from 'react';
import CardSlider from '../Slider/Slider';
import AuthContext from "../../context/authContext";

const CitySlider = () => {
    const authContext = useContext(AuthContext)
    const [cityData , setCityData] = useState([])


    useEffect(() => {
        getAllCity()
    }, [])

    const getAllCity = async()=>{
        const response = await fetch(`https://iranplacesapi.liara.run/api/provinces`);

        const allCity = await response.json();
        

        if(response.status ===200){
            
            setCityData(allCity)
        }
    }

    return (
        <CardSlider title="شهر"  data={cityData} />
    );
}

export default CitySlider;