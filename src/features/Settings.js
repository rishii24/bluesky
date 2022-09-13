import React from 'react'
import Header from '../components/Header';
import Navbar from "../components/Navbar";


const Settings = () => {
  return (
    <div className="flex bg-background">
    <Navbar />
    <div className="flex flex-col w-4/5 px-10 py-12">
      <Header title="Settings"/>
      <div></div>
    </div>
  </div>
  )
}

export default Settings