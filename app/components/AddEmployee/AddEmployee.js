import React, { Component } from 'react';
import CreateForm from '../../containers/CreateForm/CreateForm';
import SliderLayout from '../SliderLayout/SliderLayout';

//创建新员工页面，调用了Creteform和Header组件。
export default class AddEmployee extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SliderLayout
        current={'New'}
        title={'NewEmployee'}
        openKey={'Action'}
        selectKey={'New'}
        contentStyle={{ padding: '24px' }}
      >
        <CreateForm />
      </SliderLayout>
    );
  }
}
