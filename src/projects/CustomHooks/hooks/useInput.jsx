import React, { useState } from 'react';

const useInput = () => {
    const [val, setVal] = useState('')
    const [pass, setPass] = useState('')

    
    const clearValue = () => {
        setPass('')
        setVal('')
    }
    
    return [ val , pass , setVal , setPass , clearValue]
}
export default useInput;