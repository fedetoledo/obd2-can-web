import React from 'react';
import {
  LinearGauge, Title, Font, Geometry, Scale, RangeContainer, Range, ValueIndicator, Label,
} from 'devextreme-react/linear-gauge';
import { SelectBox } from 'devextreme-react/select-box';
// import { cities } from './data.js';
import { useState } from 'react';

const customTicks = [900, 1000, 1020, 1100];

const pressureLabelFormat = {
  type: 'decimal',
};

const SecondChart = () => {
    const [data, setData] = useState({
          temperature: 30,
          gasoline: 40,
          water: 50,
        })


    const temperatureGaugeStartValue = -40;
    return (
      <div>
        <div id="gauge-demo">
          <LinearGauge
            className="gauge-element"
            value={data.temperature}
          >
            <Title text="Temperatura (°C)">
              <Font size={16} />
            </Title>
            <Geometry orientation="vertical" />
            {/* <Scale startValue={temperatureGaugeStartValue} endValue={40} tickInterval={40} /> */}
            <RangeContainer backgroundColor="none">
              <Range startValue={temperatureGaugeStartValue} endValue={0} color="#679EC5" />
              <Range startValue={0} endValue={120} />
            </RangeContainer>
          </LinearGauge>
          <LinearGauge
            className="gauge-element"
            value={data.gasoline}
          >
            <Title text="Nafta (L)">
              <Font size={16} />
            </Title>
            <Geometry orientation="vertical" />
            <Scale startValue={0} endValue={50} tickInterval={10} />
            <RangeContainer backgroundColor="#CACACA" />
            <ValueIndicator type="rhombus" color="#A4DDED" />
          </LinearGauge>
          <LinearGauge
            className="gauge-element"
            value={data.water}
          >
            <Title text="Agua (°C)">
              <Font size={16} />
            </Title>
            <Geometry orientation="vertical" />
            <RangeContainer backgroundColor="none">
              {/* <Range startValue={temperatureGaugeStartValue} endValue={0} color="#679EC5" /> */}
              <Range startValue={0} endValue={120} color="#679EC5"/>
            </RangeContainer>
          </LinearGauge>
        </div>
        {/* <SelectBox
          dataSource={cities}
          valueExpr="data"
          value={data.selectBoxValue}
          displayExpr="name"
          onSelectionChanged={this.onSelectionChanged}
        /> */}
      </div>
    );
}

export default SecondChart;