import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
const Linechart = () => {

    const studentData = [
        { id: 1, name: "John Doe", math: 76, physics: 85, chemistry: 90 },
        { id: 2, name: "Jane Smith", math: 88, physics: 78, chemistry: 92 },
        { id: 3, name: "Alice Johnson", math: 92, physics: 95, chemistry: 89 },
        { id: 4, name: "Bob Wilson", math: 71, physics: 80, chemistry: 75 },
        { id: 5, name: "Ella Davis", math: 95, physics: 92, chemistry: 88 },
        { id: 6, name: "David Lee", math: 82, physics: 86, chemistry: 80 },
        { id: 7, name: "Sarah Brown", math: 77, physics: 88, chemistry: 81 },
        { id: 8, name: "Michael Clark", math: 89, physics: 91, chemistry: 93 },
        { id: 9, name: "Olivia Turner", math: 93, physics: 97, chemistry: 94 },
        { id: 10, name: "James White", math: 80, physics: 84, chemistry: 79 }
      ];
      
      

    return (
        <div>
            <h3 className='text-7xl'>line bitch</h3>
            <LChart width={900} height={400} data={studentData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Line type={'monotone'} dataKey="math" stroke='aqua'></Line>
            <Line type={'monotone'} dataKey='physics' stroke='green'></Line>
            <Line type={'monotone'} dataKey='chemistry' stroke='white'></Line>
            </LChart>
        </div>
    );
};

export default Linechart;