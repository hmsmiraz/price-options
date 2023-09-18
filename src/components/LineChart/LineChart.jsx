// import PropTypes from 'prop-types'
import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {


    const studentData = [
        { id: 1, name: 'John', math: 85, physics: 78, chemistry: 90, biology: 92 },
        { id: 2, name: 'Alice', math: 90, physics: 86, chemistry: 88, biology: 91 },
        { id: 3, name: 'Bob', math: 78, physics: 75, chemistry: 80, biology: 85 },
        { id: 4, name: 'Emily', math: 92, physics: 88, chemistry: 91, biology: 94 },
        { id: 5, name: 'David', math: 88, physics: 82, chemistry: 85, biology: 89 },
        { id: 6, name: 'Sophia', math: 76, physics: 70, chemistry: 72, biology: 80 },
        { id: 7, name: 'Oliver', math: 95, physics: 91, chemistry: 94, biology: 96 },
        { id: 8, name: 'Ava', math: 82, physics: 76, chemistry: 80, biology: 84 },
        { id: 9, name: 'Liam', math: 89, physics: 85, chemistry: 88, biology: 91 },
        { id: 10, name: 'Mia', math: 91, physics: 88, chemistry: 90, biology: 93 },
      ];


  return (
    <div>
        <LC width={1000} height={500} data={studentData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line type="monotone" dataKey="math" stroke="red"></Line>
            <Line type="monotone" dataKey="physics" stroke="green"></Line>
            <Line type="monotone" dataKey="chemistry" stroke="blue"></Line>
            <Line type="monotone" dataKey="biology" stroke="purple"></Line>
        </LC>
    </div>
  )
}

LineChart.propTypes = {}

export default LineChart