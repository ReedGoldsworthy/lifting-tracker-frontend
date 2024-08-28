import * as React from 'react';

// Define a color palette
const colorPalette = [
  '#d2b48c', // Tan
  '#4caf50', // Green
  '#0288d1', // Blue
];

// Function to hash text to a color from the color palette
const hashToColor = (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Map hash to a color in the color palette
  const colorIndex = Math.abs(hash) % colorPalette.length;
  return colorPalette[colorIndex];
};

// Map specific text to colors
const specificColors = {
  weightlifting: '#c8102e', // Bright maroon color for weightlifting
};

export default function Tag({ text, onClick, isSelected, isClicked }) {
  // Determine background color based on specific text or color palette for other texts
  const backgroundColor = specificColors[text.toLowerCase()] || hashToColor(text);
  // Highlight selected tag and adjust opacity for unclicked tags
  const tagBackgroundColor = isSelected ? '#ff9800' : backgroundColor;
  const tagOpacity = isClicked ? 0.3 : 1; // Reduce opacity of unclicked tags

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: tagBackgroundColor, // Dynamic background color based on text
        borderRadius: '12px',       // Rounded corners for tag effect
        color: 'white',             // Text color
        padding: '4px 8px',        // Smaller padding for tag look
        display: 'inline-block',   // Ensure tag doesn't take full cell width
        margin: '10px 0',           // Add space above and below tag
        top: '2px',                // Move tag down slightly
        zIndex: 1,                 // Ensure tag is above the cell content
        border: '1px solid transparent', // Border to show table lines
        position: 'relative',      // Position relative to allow 'top' adjustment
        cursor: 'pointer',         // Change cursor to pointer for clickable tags
        opacity: tagOpacity,       // Apply opacity based on selection
      }}>
      {text}
    </div>
  );
}
