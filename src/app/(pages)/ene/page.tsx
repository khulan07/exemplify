import React from 'react'
import { useState } from 'react'

const Ene = () => {
    const name = "JeEnelly"
    const myFunc = () => {
        return (
            <div>"sainuu</div>
        )
    }
  return (
    <>
        <div className='flex text-3xl anime duration-250 delay-250 hover:text-blue-500 cursor-pointer hover:scale-150 mx-auto justify-center py-12 bg-pink-300'>hoho</div>
        {name}
        {myFunc()}
    </>
  )
}

export default Ene