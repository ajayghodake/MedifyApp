import { Box } from '@mui/material'
import { useState } from 'react'
import { startOfDay } from 'date-fns'
import DayPicker from './DayPicker/DayPicker'
import TimeSlotPicker from './TimePicker/TimeSlotPicker'

export default function Calendar({slotsAvailable, details, handleBooking}) {
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
    
    const totalSlots = slotsAvailable.morning.length + slotsAvailable.afternoon.length + slotsAvailable.evening.length;

  return (
    <Box>
      <DayPicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} totalSlots={totalSlots}/>
      <TimeSlotPicker slotsAvailable={slotsAvailable} selectedDate={selectedDate} details={details} handleBooking={handleBooking}/>
    </Box>
  )
}
