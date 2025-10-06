import React from 'react'
import DashboardCard from './DashboardCard'
import { IoInformationCircle } from 'react-icons/io5';

const ReviewCount = () => {
  return (
    <DashboardCard
    title="Reviews"
    logo={IoInformationCircle}
    info="Number of Reviews Submitted"
    number="2,345"
    growth={3.2}
    />
  )
}

export default ReviewCount