import React from "react";
import { Box, Typography, Button, Stack, Divider, Chip } from "@mui/material";
import HospitalIcon from "../../assets/hospitalicon.png";
import thumbsup from "../../assets/icons/thumbsup.png";
import { format } from "date-fns";
import { useState } from "react";
import Calendar from "../Calander/Calendar";

export default function HospitalCard({
  details,
  slotsAvailable,
  handleBooking,
  booking = false,
}) {
  const [showCalander, setShowCalander] = useState(false);

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        flexWrap={"wrap"}
      >
        <Box
          component="img"
          src={HospitalIcon}
          alt="Icon"
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "self-start" }}
        />

        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            color="#414146"
            fontWeight={700}
            fontSize={14}
            textTransform="capitalize"
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>

          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              color="primary.green"
              textTransform="uppercase"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component="img"
              src={thumbsup}
              alt="ThumbIcon"
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {details["Hospital overall rating"] === "No Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking && (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalander((prev) => !prev)}
              >
                {!showCalander
                  ? "Book FREE  Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="success"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {showCalander && (
       <Calendar details={details} slotsAvailable={slotsAvailable} handleBooking={handleBooking}/>
      )}
      
    </Box>
  );
}
