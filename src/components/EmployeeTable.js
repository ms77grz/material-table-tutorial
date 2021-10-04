import { useState } from 'react';
import MaterialTable from 'material-table';
import EmployeeData from '../EmployeeData.json';
import { Avatar, Grid } from '@material-ui/core';

export const EmployeeTable = () => {
  const [data, setData] = useState(EmployeeData);

  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const NameContainer = ({ row }) => {
    return (
      <Grid container alignItems='center'>
        <Grid item lg={2}>
          <Avatar
            style={{ backgroundColor: randomColor() }}
            alt={row.name}
            src='.'
          />
        </Grid>
        <Grid item lg={8}>
          {row.name}
        </Grid>
      </Grid>
    );
  };

  const columns = [
    { title: 'ID', field: 'id' },
    {
      title: 'Name',
      field: 'name',
      render: row => <NameContainer row={row} />,
    },
    { title: 'Email', field: 'email' },
    {
      title: 'Status',
      field: 'status',
    },
    { title: 'Role', field: 'role' },
  ];

  return <MaterialTable title='Employee Data' data={data} columns={columns} />;
};
