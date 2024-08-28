import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HeatMap from '@uiw/react-heat-map';

const value = [
  { date: '2016/01/11', count: 2 },
  { date: '2016/01/12', count: 20 },
  { date: '2016/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
  { date: '2016/04/11', count: 2 },
  { date: '2016/05/01', count: 5 },
  { date: '2016/05/02', count: 5 },
  { date: '2016/05/04', count: 11 },
];


export const mainListItems = (setDisplayComponent) => (
  <React.Fragment>
    <ListItemButton onClick={() => setDisplayComponent('DashboardHome')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={() => setDisplayComponent('AddWorkout')}>
      <ListItemIcon>
        <AddBoxOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Add Workout" />
    </ListItemButton>
    <ListItemButton onClick={() => setDisplayComponent('Reports')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (setDisplayComponent) => (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton onClick={() => setDisplayComponent('Templates')}>
      <ListItemIcon>
        <AutoAwesomeMotionIcon />
      </ListItemIcon>
      <ListItemText primary="Create Template" />
    </ListItemButton>
    <ListItemButton onClick={() => setDisplayComponent('LastQuarter')}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton onClick={() => setDisplayComponent('YearEndSale')}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
