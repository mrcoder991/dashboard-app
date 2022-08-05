import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-5 md:p-10 bg-gray-100 dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='Inflation Rate' category='Chart' />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line