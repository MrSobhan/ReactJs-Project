import React, { useState, useEffect } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const maxcount = () => {
        setCounter(counter + 1)
    }
    const mincount = () => {
        setCounter(counter - 1)
    }
    return [counter, maxcount, mincount]
}

export default useCounter;