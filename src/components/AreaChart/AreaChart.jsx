import { Area, AreaChart as AreaChar, CartesianGrid, Line, Tooltip, XAxis, YAxis } from "recharts";

export default function AreaChart() {
  const studentMarks = [
    { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 75 },
    { id: 2, name: "Bob", math: 85, physics: 78, chemistry: 88 },
    { id: 3, name: "Charlie", math: 62, physics: 74, chemistry: 69 },
    { id: 4, name: "David", math: 90, physics: 92, chemistry: 85 },
    { id: 5, name: "Eva", math: 74, physics: 70, chemistry: 73 },
    { id: 6, name: "Frank", math: 88, physics: 84, chemistry: 90 },
    { id: 7, name: "Grace", math: 67, physics: 65, chemistry: 68 },
    { id: 8, name: "Hannah", math: 80, physics: 79, chemistry: 77 },
    { id: 9, name: "Ian", math: 92, physics: 88, chemistry: 91 },
    { id: 10, name: "Julia", math: 76, physics: 81, chemistry: 79 },
  ];

  return (
    <div className="bg-slate-600">
      <AreaChar width={800} height={400} data={studentMarks}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={"math"}
          stroke="yellow"
          fillOpacity={1}
          fill="url(#colorUv)"
        ></Area>
        <Area
          type={"monotone"}
          dataKey={"chemistry"}
          stroke="white"
          fillOpacity={1}
          fill="url(#colorPv)"
        ></Area>
        <Area type={"monotone"} dataKey={"physics"} stroke="purple"></Area>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip></Tooltip>
        <XAxis dataKey={'name'} stroke="white"></XAxis>
        <YAxis stroke="red"></YAxis>
      </AreaChar>
    </div>
  );
}
