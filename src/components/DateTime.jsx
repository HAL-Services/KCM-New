import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";

export default function DateTime({ updateDate }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newValue) => {
    setDate(newValue);
    const selectedDate = `${newValue.$D}-${newValue.$d.getMonth() + 1}-${
      newValue.$y
    }`;
    updateDate(selectedDate);
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
          required={true}
        />
      </Stack>
    </LocalizationProvider>
  );
}
