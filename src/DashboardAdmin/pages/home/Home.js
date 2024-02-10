import React from 'react';
import Features from './../../components/features/Feature'
import Chart from './../../components/Chart/Chart'
import WidgetSm from './../../components/widgetSm/widgetSm'
import WidgetLg from './../../components/WidgetLg/WidgetLg'
import { xAxisData } from '../../datas';

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
