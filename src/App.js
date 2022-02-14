import React from 'react';
import VirtualTable from './VirtualTable'
import './App.css';
import { Table } from 'antd';
const columns = [
  { title: 'A', dataIndex: 'key', width: 150 },
  { title: 'B', dataIndex: 'key',width: 150},
  { title: 'C', dataIndex: 'key',width: 150},
  { title: 'D', dataIndex: 'key',width: 150},
  { title: 'E', dataIndex: 'key', width: 200 },
];

const data = Array.from({ length: 2000 }, (_, key) => ({ key }));

const App = (props) => (

  <Table
   columns={columns}
   dataSource={data}
   pagination={false}
   components={{ body:  ()=>(<VirtualTable {...{columns,dataSource:data}}></VirtualTable>) }}></Table>
);

export default App;
