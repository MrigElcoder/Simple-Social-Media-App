import React from 'react'
import './online.css'
export default function Online({user}) {
  return (
    <li className="rightbarFriend">
             <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={user.profilePicture}/>
              <span className='rightbarOnliner'></span>
             </div>
             <span className='rightbarUserName'>{user.username}</span>
          </li>
  )
}
