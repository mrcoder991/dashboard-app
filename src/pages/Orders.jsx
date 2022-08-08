import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, Inject , PdfExport} from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-5 md:p-10 bg-gray-100 dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {... item}/>
        ))}
        </ColumnsDirective>
      <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]}/>
      </GridComponent>
    </div>

  )
}

export default Orders