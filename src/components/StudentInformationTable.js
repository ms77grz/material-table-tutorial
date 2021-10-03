import { useState } from 'react';
import MaterialTable from 'material-table';
import MOCK_DATA from '../MOCK_DATA.json';

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
      editable={{
        onRowAddCancelled: rowData => console.log('Row adding cancelled'),
        onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
        onRowAdd: newRow =>
          new Promise((resolve, reject) => {
            setTableData([...tableData, newRow]);
            setTimeout(() => resolve(), 500);
          }),
        onRowUpdate: (newRow, oldRow) =>
          new Promise((resolve, reject) => {
            const updatedData = [...tableData];
            updatedData[oldRow.tableData.id] = newRow;
            setTableData(updatedData);
            setTimeout(() => resolve(), 500);
          }),
        onRowDelete: selectedRow =>
          new Promise((resolve, reject) => {
            const updatedData = [...tableData];
            updatedData.splice(selectedRow.tableData.id, 1);
            setTableData(updatedData);
            setTimeout(() => resolve(), 500);
          }),
      }}
      options={{
        addRowPosition: 'first',
        actionsColumnIndex: -1,
      }}
    />
  );
}
