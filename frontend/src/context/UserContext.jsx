import { createContext } from "react"
import PropTypes from 'prop-types';
import { useState } from "react";

export const UserDataContext  = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState ({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={{user, setUser}}>
        {children} 
        </UserDataContext.Provider>
     
    </div>
  )
}
UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext
