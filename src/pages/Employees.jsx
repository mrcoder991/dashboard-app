import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Search, Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-5 md:p-10 bg-gray-100 dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {... item}/>
        ))}
        </ColumnsDirective>
      <Inject services={[Page, Search, Toolbar ]}/>
      </GridComponent>
    </div>

  )
}

export default Employees