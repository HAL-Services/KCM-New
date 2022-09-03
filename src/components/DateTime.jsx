import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";

export default function DateTime({ updateTime, updateDate }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleDateChange = (newValue) => {
    setDate(newValue);
    const selectedDate = `${newValue.$D}-${newValue.$d.getMonth() + 1}-${
      newValue.$y
    }`;
    updateDate(selectedDate);
  };
  const handleTimeChange = (newValue) => {
    setTime(newValue);
    const selectedTime = `${newValue.$H}:${newValue.$M}`;
    updateTime(selectedTime);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="Select Date"
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={handleDateChange}
          disablePast
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Select Time"
          value={time}
          disablePast
          onChange={handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
