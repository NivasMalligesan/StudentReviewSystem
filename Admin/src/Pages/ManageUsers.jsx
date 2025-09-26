
import { IoSearch, IoSearchCircle } from 'react-icons/io5'
import Usercard from '../Components/UsersComponents/Usercard'
import DetailedUser from '../Components/UsersComponents/DetailedUser'
const ManageUsers = () => {
  return (
   <div className="p-5 mx-5 h-full">
         <h1 className="text-2xl font-future">Manage Users Page</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 '>
          <div className='flex flex-col bg-white p-5 rounded-2xl'>
            <form action="" className='flex gap-2'>
            <input type="text" className='w-full border border-gray-300 rounded-md p-2' placeholder='Search users...' />
            <button className='bg-black text-white px-4 py-1 rounded-md flex items-center gap-2 justify-center text-center'><IoSearch/> Search</button>
            </form>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] mt-5 hide-scrollbar bg-white rounded-2xl p-2 " >
            <Usercard/>
            <Usercard/>
            <Usercard/>
            <Usercard/>
            <Usercard/>
            <Usercard/>
            <Usercard/>
            <Usercard/>
            <Usercard/>
          </div>
          </div>
          <div className='flex flex-col gap-4 overflow-y-auto max-h-[600px] hide-scrollbar bg-white rounded-2xl p-2 '>
            <DetailedUser/>
          </div>
         </div>
       </div>
  )
}

export default ManageUsers
