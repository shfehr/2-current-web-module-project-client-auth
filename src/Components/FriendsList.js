import React, { useState, useEffect } from "react"
import axios from "axios"

const FriendsList = () => {
    const [ friends, setFriends] = useState([])
    const token = localStorage.getItem("token")

    useEffect(() => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            setFriends(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(<div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map(friend => { 
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
        </ul>
        </div>)
  }

export default FriendsList