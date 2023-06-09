import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png"/>
          <span className='birthdayText'><b> Pols</b> and 3 others have birthday today</span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt=""/>
        <h4 className='rightbarTitle'>Online friend</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
