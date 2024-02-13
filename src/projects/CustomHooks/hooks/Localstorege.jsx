import React , { useState , useEffect } from 'react';

const useLocalStorege = () => {
    const [val , setVal] = useState(()=>{
        let value = localStorage.getItem('value')
        if(value){
            return value
        }
        return ''
    })

    useEffect(()=>{
        localStorage.setItem('value' , val)
    } , [val])
    return [val , setVal]
}

export default useLocalStorege;