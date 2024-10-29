import { LineChart as LineChar, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

export default function LineChart() {

    const studentMarks = [
        { id: 1, math: 78, physics: 82, chemistry: 75 },
        { id: 2, math: 85, physics: 78, chemistry: 88 },
        { id: 3, math: 62, physics: 74, chemistry: 69 },
        { id: 4, math: 90, physics: 92, chemistry: 85 },
        { id: 5, math: 74, physics: 70, chemistry: 73 },
        { id: 6, math: 88, physics: 84, chemistry: 90 },
        { id: 7, math: 67, physics: 65, chemistry: 68 },
        { id: 8, math: 80, physics: 79, chemistry: 77 },
        { id: 9, math: 92, physics: 88, chemistry: 91 },
        { id: 10, math: 76, physics: 81, chemistry: 79 }
      ];
      

  return (
    <div className='flex justify-center border-2 border-yellow-800 w-[800px] mx-auto my-10 bg-slate-600'>
        <LineChar width={800} height={400} data={studentMarks} margin={{top:10, bottom:10, left:0, right:20}}>
            <Line type="monotone" dataKey="math" stroke='white'></Line>
            <Line type="monotone" dataKey="chemistry" stroke='yellow'></Line>
            <Line type="monotone" dataKey="physics" stroke='purple'></Line>
            <CartesianGrid stroke='gray' strokeDasharray="10 20"></CartesianGrid>
            <Tooltip></Tooltip>
            <XAxis data={studentMarks.id}></XAxis>
            <YAxis></YAxis>
        </LineChar>
    </div>
  )
}
