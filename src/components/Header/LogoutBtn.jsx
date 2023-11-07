import React from 'react'
import { useDispatch } from 'react-redux'
import authService  from '../../appwrite/auth'
import authSlice, {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authSlice.logout().then(()=>{
            dispatch(logout())
        })
        
    }
  return (
    <button className='shawdow_btn'></button>
  )
}

export default LogoutBtn
