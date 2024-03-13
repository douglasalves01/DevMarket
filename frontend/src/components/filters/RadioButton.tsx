import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Categoria</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Eletrônicos"
          control={
            <Radio
              sx={{
                color: '#7E5686',
                '&.Mui-checked': {
                  color: '#7E5686',
                },
              }}
            />
          }
          label="Eletrônicos"
        />
        <FormControlLabel
          value="Livros"
          control={
            <Radio
              sx={{
                color: '#7E5686',
                '&.Mui-checked': {
                  color: '#7E5686',
                },
              }}
            />
          }
          label="Livros"
        />
      </RadioGroup>
    </FormControl>
  );
}
