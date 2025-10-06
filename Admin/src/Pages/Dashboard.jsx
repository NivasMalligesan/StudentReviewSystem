import React from 'react'
import People from '../Components/DashboardComponents/People'
import ReviewCount from '../Components/DashboardComponents/ReviewCount'
import CollegeCount from '../Components/DashboardComponents/CollegeCount'
import UserList from '../Components/DashboardComponents/UserList'
import ReviewList from '../Components/DashboardComponents/ReviewList'

const Dashboard = () => {
  return (
    <div className='p-5 mx-5 overflow-y-auto hide-scrollbar'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <People/>
          <ReviewCount/>
          <CollegeCount/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
          <UserList/>
          <ReviewList/>
        </div>
    </div>
  )
}

export default Dashboard