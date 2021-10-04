import { useState } from 'react';
import MaterialTable from 'material-table';
import Employees from '../Employees.json';

export const EmployeesCRUD = () => {
  const [data, setData] = useState(Employees);

  const columns = [
    { title: 'ID', field: 'id', editable: false },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Phone', field: 'phone' },
    { title: 'City', field: 'city' },
  ];

  return (
    <MaterialTable
      title='Employees CRUD'
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newRow =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, { ...newRow, id: data.length + 1 }]);
              resolve();
            }, 500);
          }),
        onRowUpdate: (newRow, oldRow) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData(data.map(row => (row.id === newRow.id ? newRow : row)));
              resolve();
            }, 500);
          }),
        onRowDelete: selectedRow =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData(data.filter(row => row.id !== selectedRow.id));
              resolve();
            }, 500);
          }),
        onBulkUpdate: selectedRows =>
          new Promise((resolve, reject) => {
            const rows = Object.values(selectedRows);
            const updatedRows = [...data];
            let index;
            rows.map(row => {
              index = row.oldData.tableData.id;
              return (updatedRows[index] = row.newData);
            });
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 500);
          }),
      }}
      options={{
        addRowPosition: 'first',
        actionsColumnIndex: -1,
      }}
    />
  );
};
