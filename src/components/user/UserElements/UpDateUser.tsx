import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import FormUserAdd from './FormUserAdd'



const UpDateUser: React.FC= () => {
    const state = useTypedSelector(state => state.user)

  return (
    <div className="user-update">
        <FormUserAdd 
        date={state.users[0].birthday} 
        fName={state.users[0].fName} 
        lName={state.users[0].lName} 
        id={state.users[0].id} 
        btn='Up Date'  />
    </div>
  )
}

export default UpDateUser