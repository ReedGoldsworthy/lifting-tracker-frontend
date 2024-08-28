import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { formatDate } from '../../utils/FormatDate';
import Tag from './Tag';

function preventDefault(event) {
  event.preventDefault();
}

export default function DayDisplay({ selectedDay }) {
  // State to manage selected tag
  const [selectedTag, setSelectedTag] = React.useState(null);

  // Handler for tag click
  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  // List of tags
  const tags = ['Push A', 'Basketball', 'Stretching', 'Sauna'];

  return (
    <React.Fragment>
      {selectedDay === 'No day selected' ? (
        <>
          <Title>No day selected</Title>
          <Typography component="p" variant="h7" align="center">
            <b>Select a square from the grid to see that day's workouts</b>
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }} />
  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <img 
              src="/images/calendar.png" 
              alt="Calendar" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                maxHeight: '80px',  // Adjust as needed
                objectFit: 'contain'
              }} 
            />
          </div>
        </>
      ) : (
        <>
          <Title>Activity on {formatDate(selectedDay)}</Title>
          <div style={{ 
            display: 'flex', 
            overflowX: 'auto', // Allow horizontal scrolling
            whiteSpace: 'nowrap', // Keep tags in a horizontal line
            
          }}>
            {tags.map(tag => (
              <div style={{ 
                display: 'inline-block', // Display tags inline
                marginRight: '10px', // Space between tags
                verticalAlign: 'top', // Align tags to the top
                height: 'auto', // Allow tag height to adjust
                boxSizing: 'border-box', // Include padding and border in height
                // fontSize: '0.8rem'
              
              }} key={tag}>
                <Tag 
                  text={tag}
                  onClick={() => handleTagClick(tag)}
                  isSelected={selectedTag === tag}
                  isClicked={selectedTag !== null && selectedTag !== tag} // Pass isClicked based on selection state
                />
              </div>
            ))}
          </div>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            Bench press 80LB 4x8 <br /> Incline DB bench 60LB 4x10 <br /> Tricep Extension 40LB 3x16
          </Typography>
          <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              Edit Workout
            </Link>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
