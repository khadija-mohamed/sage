import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const card = (
  <React.Fragment className="card">
    <CardContent className='Outlinedcard'>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        noun
      </Typography>
      <Typography variant="h5" component="div">
        sage
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        /sāj/
      </Typography>
      <Typography variant="body2">
        having, showing, or indicating profound wisdom.
        <br />
        {'"the sayings of the numerous venerable sages"'}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}