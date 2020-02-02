import React from 'react';
import Table from '../components/table';
import './style.css';
import { data } from '../data/mock_data.js';

export default function App() {
  return (
    <div className="total-wrapper">
      <Table
        data={data}
        isVirtualScroll={true}
        rowsLimit={10}
        scrollableColWidth={1000}
        height={400}
        fixedColWidth={180}
        columns={[
          {
            header: 'Customer',
            accessor: 'customerNumber'
          },
          {
            header: 'Billing Info',
            accessor: 'billingInfo'
          },
          {
            header: 'Subscription Info',
            accessor: 'subscriptionInfo'
          },
          {
            header: 'Created On',
            accessor: 'createdOn'
          },
          {
            header: 'ID',
            accessor: 'ID'
          },
          {
            header: 'NetPayment',
            accessor: 'netPayment'
          },
          {
            header: 'Auto Collection',
            accessor: 'autoCollection'
          },
          {
            header: 'Payment Method',
            accessor: 'paymentMethod'
          },
          {
            header: 'Currency',
            accessor: 'currency'
          },
          {
            header: 'Locale',
            accessor: 'locale'
          },
          {
            header: 'Email',
            accessor: 'email'
          }
        ]}
      />
    </div>
  )
}