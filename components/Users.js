import React from 'react';
import Typography from '@mui/material/Typography';
import ActionAreaCard from './ActionAreaCard';

const Users = ({ users }) => {
 const generateShade = (index) => {
    const rgb = [parseInt('FF', 16), parseInt('C4', 16), parseInt('36', 16)];
    const red = Math.min(rgb[0] + index * 10, 255);
    const shade = `#${red.toString(16).padStart(2, '0')}${rgb[1].toString(16).padStart(2, '0')}${rgb[2].toString(16).padStart(2, '0')}`;
    return shade;
 };

 const renderUsers = () => {
    return users.map((user, index) => {
      const shade = generateShade(index);

      return (
        <div key={user.id} style={{ margin: '1cm' }}>
          <ActionAreaCard
            data={{
              name: user.name,
              details: `Phone: ${user.phno} | TaskTime: ${user.TaskTime} | Task: ${user.Task} `,
            }}
            cardColor={shade} // Use the generated shade for each user
          />
        </div>
      );
    });
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '130px' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'darkblue', fontWeight: 'bold' }}>
        Users
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        {renderUsers()}
      </div>
    </div>
 );
};

export default Users;
