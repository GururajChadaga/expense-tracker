import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
  let maxAmount = props.dataPoints.reduce(
    (max, dataPoint) => Math.max(max, dataPoint.value),
    0
  );
  return (
    <ul className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxAmount}
          label={dataPoint.label}
        />
      ))}
    </ul>
  );
};

export default Chart;
