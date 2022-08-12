import React from 'react'

interface UserInfoProps{
  id: string,
  name: string,
  birthday: string
}

const UserInfo: React.FC<UserInfoProps> = ({
  id, name, birthday
}) => {
  return (
    <div className="user-info__box" id={id}>
        <h1 className="user-info__name">
            {name}
        </h1>
        <div className="user-info__birthday">
            Birthday: <span>{birthday}</span> 
        </div>
    </div>
  )
}

export default UserInfo