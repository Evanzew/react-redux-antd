import React, { Component } from 'react';
import DataPie from '../../containers/DataCharts/DataPie';
import SliderLayout from '../SliderLayout/SliderLayout';

//数据图形页面，调用datepie组件。
export default class DataCharts extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SliderLayout
        current={'Charts'}
        title={'Charts'}
        openKey={'Version'}
        selectKey={'Charts'}
        contentStyle={{ overflow: 'hidden' }}
      >
        <DataPie />
      </SliderLayout>
    );
  }
}
