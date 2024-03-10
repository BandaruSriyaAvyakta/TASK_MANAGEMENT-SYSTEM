import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grow from '@mui/material/Grow';

const ActionAreaCard = ({ data, cardColor }) => {
  const { name, details } = data;

  // Set a default color if cardColor prop is not provided
  const backgroundColor = cardColor || '#FFA500'; // Default to orange if not provided

  return (
    <Grow in={true} timeout={500}>
      <Card style={{ maxWidth: 345, backgroundColor }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default ActionAreaCard;
