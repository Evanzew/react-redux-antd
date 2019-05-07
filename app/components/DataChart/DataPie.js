import { Chart, Tooltip, Axis, Legend, Pie, Coord } from 'viser-react';
import * as React from 'react';
import PropTypes from 'prop-types';
import DataSet from '@antv/data-set';

export default class DataPie extends React.Component {
  render() {
    let filters = 'Gender';
    const sourceData = [
      //根据三目运算，如果famle或者male没有数据则给一个mock的数据。
      {
        item: 'Famale',
        count:
          this.props.employees.filter(t => t[filters] == 'F').length > 0
            ? this.props.employees.filter(t => t[filters] == 'F').length
            : 8
      },
      {
        item: 'Male',
        count:
          this.props.employees.filter(t => t[filters] == 'M').length > 0
            ? this.props.employees.filter(t => t[filters] == 'M').length
            : 2
      }
    ];

    const scale = [
      {
        dataKey: 'percent',
        min: 0,
        formatter: '.0%'
      }
    ];

    const dv = new DataSet.View().source(sourceData);
    dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const data = dv.rows;
    return (
      <Chart forceFit height={400} data={data} scale={scale} textAlign="center">
        <Tooltip showTitle={false} />
        <Axis />
        <Legend dataKey="item" />
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Pie
          position="percent"
          color="item"
          style={{ stroke: '#fff', lineWidth: 1 }}
          label={[
            'percent',
            {
              offset: -20,
              textStyle: {
                rotate: 0,
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }
            }
          ]}
        />
      </Chart>
    );
  }
}

DataPie.propTypes = {
  employees: PropTypes.array.isRequired
};
