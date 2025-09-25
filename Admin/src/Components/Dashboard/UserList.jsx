import React from 'react'
import UserCardDash from './UserCardDash'

const UserList = () => {
  return (
    <div className='bg-white shadow text-black rounded-xl p-5'>
      <div>
        <h1 className='text-2xl font-future'>Users</h1>
        <form action="">
          <input type="text" />
          <button></button>
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