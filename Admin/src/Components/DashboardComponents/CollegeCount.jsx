import React from 'react'
import DashboardCard from './DashboardCard'
import { IoInformationCircle } from 'react-icons/io5';

const CollegeCount = () => {
  return (
    <DashboardCard
    title="Colleges"
    logo={IoInformationCircle}
    info="Number of Colleges"
    number="225"
    growth={3.2}
    />
  )
}

export default CollegeCount