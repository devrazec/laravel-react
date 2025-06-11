import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Container, Typography } from '@mui/material';

export default function DateForm() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        MUI Date Picker with Day.js
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select a date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </Container>
  );
}
