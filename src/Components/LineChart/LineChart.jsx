import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const mathMarksData = [
        { "id": 1, "name": "Student A", "mathMarks": 78, "englishMarks": 82, "scienceMarks": 74 },
        { "id": 2, "name": "Student B", "mathMarks": 85, "englishMarks": 76, "scienceMarks": 88 },
        { "id": 3, "name": "Student C", "mathMarks": 92, "englishMarks": 89, "scienceMarks": 91 },
        { "id": 4, "name": "Student D", "mathMarks": 65, "englishMarks": 72, "scienceMarks": 70 },
        { "id": 5, "name": "Student E", "mathMarks": 74, "englishMarks": 68, "scienceMarks": 78 },
        { "id": 6, "name": "Student F", "mathMarks": 88, "englishMarks": 85, "scienceMarks": 84 },
        { "id": 7, "name": "Student G", "mathMarks": 91, "englishMarks": 90, "scienceMarks": 92 },
        { "id": 8, "name": "Student H", "mathMarks": 69, "englishMarks": 74, "scienceMarks": 72 },
        { "id": 9, "name": "Student I", "mathMarks": 83, "englishMarks": 80, "scienceMarks": 86 },
        { "id": 10, "name": "Student J", "mathMarks": 76, "englishMarks": 78, "scienceMarks": 79 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Line dataKey="mathMarks"></Line>
                <Line dataKey="englishMarks" stroke='red'></Line>
                <Line dataKey="scienceMarks" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;