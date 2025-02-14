import React, {useContext,useEffect} from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'  
import { UserDataContext } from '../context/UserContext'

const UserProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    console.log(token)

    useEffect(() => {
      if (!token) {
      navigate('/login');
      }
    }, [ token, navigate ]);

  return (
    <>
    {children}
    </>
  )
}
UserProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProtectedWrapper
