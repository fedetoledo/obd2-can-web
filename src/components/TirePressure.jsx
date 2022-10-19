import React from 'react';
import {
  CircularGauge, Scale, Label, RangeContainer, Range, Title, Font, Export,
} from 'devextreme-react/circular-gauge';

const tires = [{
    name: 'Neumatico 1',
    value: 2,
},
{
    name:'Neumatico 2',
    value: 2.4,
},
{
    name:'Neumatico 3',
    value: 2.5,
},
{
    name:'Neumatico 4',
    value: 3.1,
}]

const TirePressure = () => {
    return (
        <div className='tirePressure'>
            {tires.map((tire,index) => (
                <CircularGauge
                // id={`gauge${index}`}
                value={tire.value}
                key={index}
                className='pressureGauge'
            >
                <Scale startValue={0} endValue={7} tickInterval={1}>
                <Label useRangeColors={true} />
                </Scale>
                <RangeContainer palette="pastel">
                <Range startValue={0} endValue={3} />
                <Range startValue={3} endValue={5} />
                <Range startValue={5} endValue={7} />
                </RangeContainer>
                <Title text={`${tire.name} (Bar)`}>
                <Font size={20} />
                </Title>
            </CircularGauge>
            ))}
        </div>
    );
}

export default TirePressure;