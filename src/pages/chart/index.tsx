import {
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Bar
} from "recharts";
import { ChartBlock } from './styles'

const Chart = () => {
  const data = [
    { name: "Page A", uv: 400 },
    { name: "Page B", uv: 300 },
    { name: "Page C", uv: 370 },
    { name: "Page D", uv: 270 },
    { name: "Page E", uv: 570 },
  ];
  const lineChartProps = { as: LineChart,width: 800, height: 400, data: data }
  const barChartProps = { as: BarChart,width: 800, height: 400, data: data }

  return (
    <>
      <ChartBlock {...lineChartProps}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey='uv'/>
      </ChartBlock>
      <ChartBlock {...barChartProps}>
      <Bar dataKey="uv" barSize={30} fill="#8884d8"/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </ChartBlock>
    </>
  );
};

export default Chart;
