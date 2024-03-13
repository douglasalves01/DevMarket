import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}

export default function Range() {
  const [value, setValue] = React.useState<number[]>([50, 10000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          color: '#7E5686',
          '&.Mui-checked': {
            color: '#7E5686',
          },
        }}
      />
    </Box>
  );
}
