import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function SnackbarAuto({ open, setOpen, message }) {
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        icon={false}
        sx={{ bgcolor: "primary.green", color: "#fff" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
