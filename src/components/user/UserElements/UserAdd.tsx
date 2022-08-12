import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import FormUserAdd from './FormUserAdd'


const UserAdd: React.FC = () => {

    const state = useTypedSelector(state => state.user);

    return (
        <div className='user-add__box'>
            <div className="user-add">
                {state.err && <p className='error'> {state.err}</p>}
                <FormUserAdd />
            </div>
        </div>
    )
}

export default UserAdd