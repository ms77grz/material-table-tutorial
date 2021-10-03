import { useState } from 'react';
import MaterialTable from 'material-table';
import MOCK_DATA from '../MOCK_DATA.json';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function StudentInformationTable() {
  const [tableData, setTableData] = useState(MOCK_DATA);

  const columns = [
    { title: 'ID', field: 'id' },
    {
      title: 'First Name',
      field: 'first_name',
    },
    { title: 'Last Name', field: 'last_name' },
    { title: 'Email', field: 'email' },
    {
      title: 'Phone Number',
      field: 'phone',
      align: 'center',
      emptyValue: () => <em>null</em>,
    },
    { title: 'Age', field: 'age' },
    { title: 'Gender', field: 'gender', lookup: { M: 'Male', F: 'Female' } },
    { title: 'City', field: 'city' },
    {
      title: 'School Fee',
      field: 'fee',
      type: 'currency',
      currencySetting: { currencyCode: 'EUR', minimumFractionDigits: 0 },
    },
  ];

  return (
    <MaterialTable
      title='Student Information'
      columns={columns}
      data={tableData}
      options={{
        selection: true,
        selectionProps: { color: 'primary' },
      }}
    />
  );
}
