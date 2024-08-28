import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import HeatMap from '@uiw/react-heat-map';
import RecentWorkouts from './RecentWorkouts';
import DayDisplay from './DayDisplay';

const value = [
  { date: '2024/01/11', count: 2 },
  { date: '2024/01/12', count: 20 },
  { date: '2024/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2024/02/${idx + 10}`, count: idx, content: '' })),
  { date: '2024/04/11', count: 2 },
  { date: '2024/05/01', count: 5 },
  { date: '2024/05/02', count: 5 },
  { date: '2024/05/04', count: 11 },
];

export default function DashboardDisplay({selectedDay,setSelectedDay}) {
  const theme = useTheme();

  return (
    <>  
    
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', overflowX: 'auto' }}>
  <h3>Your Activity in the Last Year</h3>

  <div style={{ overflowX: 'auto', width: '100%' }}>
    <div style={{ minWidth: '750px', whiteSpace: 'nowrap' }}>
      <HeatMap
        value={value}
        width={'100%'}
        style={{ color: '#ad001d', '--rhm-rect-active': 'red' }}
        startDate={new Date('2024/01/01')}
        endDate={new Date('2025/01/01')}
        rectRender={(props, data) => {
          if (selectedDay !== '') {
            props.opacity = data.date === selectedDay ? 1 : 0.45;
          }
          return (
            <rect
              {...props}
              onClick={() => {
                setSelectedDay(data.date === selectedDay ? 'No day selected' : data.date);
              }}
            />
          );
        }}
      />
    </div>
  </div>
</Paper>




              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 275 }}>
                  <DayDisplay selectedDay={selectedDay}/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <RecentWorkouts />
                </Paper>
              </Grid>
            </Grid>
     
          </Container>

    </>
  );
}