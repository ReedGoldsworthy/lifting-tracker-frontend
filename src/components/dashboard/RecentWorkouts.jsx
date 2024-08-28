import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Tag from './Tag'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}


const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Cardio',
    'Running, Cycling, Jump Rope',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Stretching',
    'Hamstring Stretch, Quadriceps Stretch, Calf Stretch',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Basketball', 'Dribbling, Shooting, Passing', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Weights',
    'Bench Press, Squats, Deadlifts',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Yoga',
    'Downward Dog, Warrior Pose, Tree Pose',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];



function preventDefault(event) {
  event.preventDefault();
}

export default function RecentWorkouts() {
  return (
    <React.Fragment>
      <Title>Recent Workouts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Workout Type</TableCell>
            <TableCell>Exercises</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
  {rows.map((row) => (
    <TableRow key={row.id}>
      <TableCell>{row.date}</TableCell>

      <TableCell
      >
       <Tag text={row.name} />
       
      </TableCell>
      <TableCell>{row.shipTo}</TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more workouts
      </Link>
    </React.Fragment>
  );
}