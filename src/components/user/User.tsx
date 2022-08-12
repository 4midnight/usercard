import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { upDateAC } from '../../store/reducer/userReducer'
import Button from '../../UI/Button'
import UpDateUser from './UserElements/UpDateUser'
import UserAdd from './UserElements/UserAdd'
import UserImg from './UserElements/UserImg'
import UserInfo from './UserElements/UserInfo'

const User: React.FC = () => {
    const state = useTypedSelector(state => state.user);
    const dispath = useDispatch();

    const imgChart = state.users[0].fName.charAt(0).toUpperCase() + state.users[0].lName.charAt(0).toUpperCase()    

    const updateInfoUserHandler = () => {
        dispath(upDateAC(true))
    }

    return (
        <div className='user'>
            <div className="user-inner">
                <div className="user-box">
                    <UserImg chart={imgChart}/>

                    {state.upDate && <UpDateUser />}

                    {!state.users.length && <UserAdd />}
                    {state.users.length && !state.upDate ? <UserInfo
                        id={state.users[0].id}
                        name={state.users[0].fName + " " + state.users[0].lName}
                        birthday={state.users[0].birthday} /> : undefined}

                </div>
                {state.users.length && !state.upDate ? <Button className='btn-update' onClick={updateInfoUserHandler}>Up Date</Button> : undefined}
                
            </div>
        </div>
    )
}

export default User