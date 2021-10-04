import { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

export const UsersTable = () => {
  const [users, setUsers] = useState([]);

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Username', field: 'username' },
    { title: 'Email', field: 'email' },
    { title: 'Phone', field: 'phone' },
    { title: 'Web Link', field: 'website' },
    {
      title: 'Address',
      filed: 'address',
      render: rowData => (
        <div>
          {`${rowData.address.street}, ${rowData.address.suite}, ${rowData.address.city}`}
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <MaterialTable title='Users' columns={columns} data={users} />;
};
