import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [roomId,setRoomId] = useState('')
    const navigate = useNavigate()
    const handleSubmit = () =>{
        navigate(`/room/${roomId}`)
    }
  return (
   <div className='container'>
   <div>
    <img className='home-image' src="https://experiencemoxie.com/wp-content/uploads/2020/03/lets-connect-virtually.jpg" alt="" />
   </div>
   <div className='input-conatiner'>
    <p className='para-input'>Welcome to VideoChat</p>
    <input type="text" onChange={(e)=>{setRoomId(e.target.value)}} value={roomId} className='input-inp' placeholder='Enter the RoomId'/>
    {/* <button onClick={handleSubmit}>Join</button> */}
    <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
      <p onClick={handleSubmit} className='input-btn'>Join</p>
    </div>
    </div>
    </div>
  )
}

export default Home