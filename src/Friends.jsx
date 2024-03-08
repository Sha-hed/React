import { useEffect, useState } from 'react'
import Friend from './Friend';
import './Friends.css'
export default function Friends(){
    const [friend, setFriend] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[])
    return(
        <div className="box">
            <h3>Friends : {friend.length}</h3>
            {
                friend.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}