import React from 'react'
import UserCardDash from './UserCardDash'
import { IoSearch } from 'react-icons/io5'

const UserList = () => {
  return (
    <div className='bg-white shadow text-black rounded-xl p-5'>
      <div>
        <h1 className='text-2xl font-future'>Users</h1>
        <form action="" className='flex mt-3'>
          <input type="text" className='w-full border border-gray-300 rounded-md p-2' placeholder='Search users...' />
          <button className='bg-black text-white rounded-md px-4 ml-2 flex items-center gap-2 cursor-pointer'><IoSearch/>Search</button>
        </form>
      </div>
        <div className="flex flex-col gap-3 mt-5 overflow-y-auto max-h-[400px] hide-scrollbar">
            <UserCardDash/>
            <UserCardDash/>
            <UserCardDash/>
            <UserCardDash/>
            <UserCardDash/>
            <UserCardDash/>
            <UserCardDash/>
            <UserCardDash/>
        </div>
    </div>
  )
}

export default UserList 