import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Nitin",
    age: 18
  }

  let myArr = [1, 2, 3, 4];

  return (
    <>
      <Card channel="Chai Aur Code" des="Learn Full Stack web developement with beginner to advance" source="https://media.licdn.com/dms/image/v2/D4D03AQH8CXRHAKQd6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693777638244?e=2147483647&v=beta&t=J9gdqyexcRnLD1JoAU42jY7EEPFRj5-CWrYvjkA94So" />

      <Card channel="Code With Harry" des="if you are absolute beginner in coding then you will definatily checkout this" source="https://cdn.bio.link/uploads/profile_pictures/2024-02-10/9aYo2a1Is4mh5SdZomJZU16s31IW02g5.png" />

      <Card channel="Apna College" des="this channel best for learn java and data structures and algorithm" source="https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM-1024x683.jpeg" />
    </>
  )
}

export default App
