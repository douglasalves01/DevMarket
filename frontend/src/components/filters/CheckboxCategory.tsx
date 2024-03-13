import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps {
  texto: string;
  color?: string;
  colorChecked?: string;
}

export default function CheckboxCategory({
  texto,
  color,
  colorChecked,
}: CheckBoxProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: color,
              '&.Mui-checked': {
                color: colorChecked,
              },
            }}
          />
        }
        label={texto}
      />
    </FormGroup>
  );
}
