import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/authContext'

export default function PAdminPrivate({ children }) {

    const authContext = useContext(AuthContext)
    const navigate = useNavigate()

  return (
      <>
        {
            authContext.getLocalStorage('Role') == 'SuperAdmin' ? <>{children}</> : navigate('/login')
        }
      </>
  )
}
