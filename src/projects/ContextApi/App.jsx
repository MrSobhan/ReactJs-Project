import React, { useState } from 'react';
import { UsernameProvider } from './Context/userNameContext'
import SubApp from './subApp'
import './App.css'
const App = () => {

    const [username, setUsername] = useState('Sobhan')

    // console.log(userNameContext);

    return (
        <>
            <h1>Name : {username}</h1>
            <UsernameProvider value={username}>
                <SubApp />
            </UsernameProvider>
        </>
    );
}


export default App;