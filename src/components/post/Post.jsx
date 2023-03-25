
import './post.css'
import React,{useState} from 'react'
import {MoreVert} from '@mui/icons-material'
import { Users } from '../../dummyData';
export default function Post({post}) {
   const [like,setLike]=useState(post.like);
   const [islike,setIsLike]=useState(false);
   const likeHandler=()=>{
    setLike(islike? like-1:like+1);
    setIsLike(!islike)
   }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt=""/>
                    <span className='postUsername'>{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo}/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like.png"  onClick={likeHandler}/>
                <img className="likeIcon" src="assets/heart.png" onClick={likeHandler}/>
                <span className='postLikeCounter'>{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
