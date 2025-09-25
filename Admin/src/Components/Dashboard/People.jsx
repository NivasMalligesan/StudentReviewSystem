import React from 'react';
import { IoInformationCircle } from 'react-icons/io5';
import DashboardCard from './DashboardCard';

const People = () => {
  return (
    <DashboardCard
      title="People"
      logo={IoInformationCircle}
      info="Number of People Using the platform"
      number="1,024"
      growth={5.4}
    />
  );
};

export default People;
