'use client'
import React from 'react';
import { Tabs, Breadcrumb } from 'antd';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Personal Information',
    //children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Professional Information',
   // children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Equipment Details',
    //children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Document',
    //children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: 'Review',
    //children: 'Content of Tab Pane 3',
  },
];
const AddNewEmployee = () =>

<div style={{
    width:'100%',
    marginTop:'-80px',
    width:'100%',
    height:'30%',
    background:'white',
    marginLeft:'25%',
   
}}>
    <Breadcrumb style={{marginBottom:'15px'}}
    items={[
      {
        title: <a href="">Dashboard</a>,
      },
      {
        title: <a href="">Employee</a>,
      },
      
      {
        title: 'Add new Employee',
      },
    ]}
  />
    <h3>Add New Employee</h3>
<Tabs style={{
    width:'100%',
    paddingTop:'15px',
}} defaultActiveKey="1" items={items} onChange={onChange} />
</div>
export default AddNewEmployee;