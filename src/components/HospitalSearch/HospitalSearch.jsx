import React from "react";
import axios from "axios";
import { Box, MenuItem, Select, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HospitalSearch() {
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        console.log(res.data);
        setStates(res.data);
      } catch (error) {
        console.error("Error fetching states", error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching cities", error);
      }
    };

    if (formData.state !== "") {
      fetchCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?State=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem value="" selected disabled>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem value="" selected disabled>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
}
