import React from "react";
import './sidebar.css'
import { Users } from '../../dummyData'
import Friends from "../friends/Friends";
import { RssFeed,Chat,VideoCall,Group,Bookmark,Event, } from "@mui/icons-material";
export default function Sidebar() {
  return <div className="sidebar">
    <div className="sidebarWrapper">
       <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Chat className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <VideoCall className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Group className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Bookmark className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Event className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
       </ul>
       <button className="sidebarButton">Show More</button>
       <hr className="sidebarHr"/>
       <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <Friends key={u.id} user={u}/>
          ))}
       </ul>
    </div>
    </div>;
}
