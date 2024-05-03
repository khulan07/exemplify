'use client'
import React from 'react'
import { useState } from 'react'

//Components
import Login from '../../components/login'


const Home = () => {
    const myFunc = () => {
        return (
            <div>sainuu</div>
        )
    }
    const attributes = [
        { name: "age", type: "number", min: 18, max: 80 },
        { name: "height", type: "string", values: ["5'6", "5'8", "6'0", "6'2"] },
        { name: "eyeColor", type: "string", values: ["blue", "brown", "green", "hazel"] },
        { name: "occupation", type: "string", values: ["developer", "teacher", "doctor", "artist"] }    
      ];

    const test = () => {
        attributes.forEach(element => {
            console.log(element.type)
        });
    }
    
  return (
    <>
        <div className='flex text-3xl anime duration-250 delay-250 hover:text-blue-500 cursor-pointer hover:scale-150 mx-auto justify-center py-12 bg-pink-300'>hoho</div>
        {myFunc()}
        <button onClick={test} className='bg-black px-4 py-3 rounded-xl text-white text-xl cursor-pointer'>Button</button>
        <Login />
    </>
  )
}

export default Home