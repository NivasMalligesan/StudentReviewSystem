import React from 'react'
import People from '../Components/Dashboard/People'
import ReviewCount from '../Components/Dashboard/ReviewCount'
import CollegeCount from '../Components/Dashboard/CollegeCount'
import UserList from '../Components/Dashboard/UserList'
import ReviewList from '../Components/Dashboard/ReviewList'

const Dashboard = () => {
  return (
    <div className='p-5 mx-5'>
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