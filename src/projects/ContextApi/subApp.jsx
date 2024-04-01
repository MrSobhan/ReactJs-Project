import React, { useContext } from 'react';
import { userNameContext } from './Context/userNameContext'


const SubApp = () => {

    const username = useContext(userNameContext)

    return <div>NameSub : {username}</div>;
}

export default SubApp;