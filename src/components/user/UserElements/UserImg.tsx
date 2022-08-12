import React from 'react'

interface UserImgProps{
    chart?: string
}

const UserImg: React.FC<UserImgProps> = ({chart}) => {
    return (
        <div className='user-img__box'>
            <div className="user-img">
                <div className="img">
                    {chart? chart: "NN"}
                </div>
            </div>
            <div className="user-img__prof">
                Design
            </div>
        </div>
    )
}

export default UserImg