import React, { useContext } from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import { SlLogout } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import AuthContext from '../../context/authContext';
import './Header.css'

export default function Header() {
    const authContext = useContext(AuthContext)
    return (
        <div className='header'>
            <div className="admin-profile">
                <img src="/images/amir.jpg" alt="Admin Profile" />
                <div>
                    <h1>سبحان موسی زاده</h1>
                    <h3>برنامه نویس فرانت اند</h3>
                </div>
            </div>

            <div className='header-left-section'>
                <div className="search-box">
                    <input type="text" placeholder='جست و جو بکنید ...' />
                    <button><FaSearch /></button>
                </div>

                <button className='header-left-icon'>
                    <AiOutlineBell />
                </button>
                <button className='header-left-icon' onClick={() => authContext.LogOut()}>
                    <SlLogout />
                </button>
            </div>
        </div>
    )
}
