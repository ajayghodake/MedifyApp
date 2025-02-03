import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import { useState } from "react";
export default function BookingModal({
  open,
  setOpen,
  bookingDetails,
  setShowBookingSuccess,
}) {
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();
    const bookings = localStorage.getItem("bookings") || "[]";
    const oldBookings = JSON.parse(bookings);
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );
    setShowBookingSuccess(true);
    setEmail("");
    setOpen(false);
  };

  // To access this we have to create account on GTM(Google Tag Manager)
  // By GTM we can send the event data when an action occurs
  // triggerEvent Copied from the Reference Project
  const triggerEvent = () => {
    // Ensure dataLayer is defined
    window.dataLayer = window.dataLayer || [];
    // Function to push the first_visit event to the dataLayer
    function triggerFirstVisitEvent() {
      window.dataLayer.push({
        event: "First_Event",
        eventDate: new Date().toISOString(), // Optional: track the exact time of the event
      });
    }

    triggerFirstVisitEvent();
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3">
          Confirm Booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {/* {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`} */}
            {bookingDetails?.bookingTime && bookingDetails?.bookingDate // Corrected Here: Added optional chaining to prevent errors if bookingDetails is undefined.
              ? `${bookingDetails.bookingTime} on ${format(
                  new Date(bookingDetails.bookingDate),
                  "dd/MM/yyyy"
                )}`
              : "N/A"}
          </Box>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outline"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
