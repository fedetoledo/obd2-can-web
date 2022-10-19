// import React from 'react';

// import DataSource from 'devextreme/data/data_source';
// import 'devextreme/data/odata/store';

// import Chart, {
//   ValueAxis,
//   ArgumentAxis,
//   CommonPaneSettings,
//   Grid,
//   Series,
//   Label,
//   Legend,
//   Size,
//   Border,
//   Tooltip,
//   LoadingIndicator,
// } from 'devextreme-react/chart';

// function customizeTooltip(arg) {
//     return {
//       text: `${arg.valueText}${'&#176C'}`,
//     };
//   }

// const TimelineChart = () => {
//     const chartDataSource = new DataSource({
//         store: {
//           type: 'odata',
//           url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
//         },
//         postProcess(results) {
//           return results[0].DayItems;
//         },
//         expand: 'DayItems',
//         filter: ['Id', '=', 1],
//         paginate: false,
//       });

//   const customizeLabel = (e) => {
//     return `${e.valueText}${'&#176C'}`;
//   }

//     return (
//       <div className='chartTest'>
//         <Chart
//           title="Velocidad ( cambiar axis a rpm )"
//           dataSource={chartDataSource}>
//           <Size height={400} />
//           <ValueAxis
//             valueType="numeric"
//           >
//             <Grid opacity={0.2} />
//             <Label customizeText={customizeLabel} />
//           </ValueAxis>
//           <ArgumentAxis type="discrete">
//             <Grid visible={true} opacity={0.5} />
//           </ArgumentAxis>
//           <CommonPaneSettings>
//             <Border
//               visible={true}
//               width={2}
//               top={false}
//               right={false}
//             />
//           </CommonPaneSettings>
//           <Series
//             argumentField="Number"
//             valueField="Temperature"
//             type="spline"
//           />
//           <Legend visible={false} />
//           <Tooltip
//             enabled={true}
//             customizeTooltip={customizeTooltip} />
//           <LoadingIndicator enabled={true} />
//         </Chart>

//       </div>
//     );

// }


// export default TimelineChart;
import React from 'react';
import {
  CircularGauge, Scale, Tick, MinorTick, RangeContainer, Title, Font, Export,
} from 'devextreme-react/circular-gauge';

const SpeedChart = () => {
    return (
      <CircularGauge
        id="gauge"
        value={110}
        className="chartTest"
      >
        <Scale startValue={0} endValue={400} tickInterval={10} minorTickInterval={25}>
          <Tick color="#9c9c9c" />
          <MinorTick visible={true} color="#9c9c9c" />
        </Scale>
        <RangeContainer backgroundColor="none" />
        <Title text="Velocidad (en rpm)">
          <Font size={28} />
        </Title>
      </CircularGauge>
    );
}

export default SpeedChart;
