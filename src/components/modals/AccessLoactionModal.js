"use client";

import { getLocation, hasLocationPermission } from "@/fucntions/geoloaction";
import { GlobalContext } from "@/providers/GlobalContextProvider";
import { LocationOn } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { enqueueSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";

export default function AccessLoactionModal() {
  const [open, setOpen] = useState(false);
  const { pos, setPos } = useContext(GlobalContext);
  const loading = pos.status == "loading";

  useEffect(() => {
    async function initialCheck() {
      const hasPermission = await hasLocationPermission();
      if (hasPermission) {
        getLocation(setPos, enqueueSnackbar);
      } else {
        setOpen(true);
      }
    }
    initialCheck();
  }, []);

  async function handleConfirm() {
    await getLocation(setPos, enqueueSnackbar);
    setOpen(false);
  }

  async function handleCancel() {
    enqueueSnackbar("Access denied, showing default location Surat", {
      variant: "info",
    });
    setPos({ status: "denied" });
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Paper
            component={"div"}
            elevation={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(-50%, -50%)",
              border: 0,
              borderRadius: 4,
              ":focus-visible": {
                outline: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "80vh",
                maxWidth: "98vw",
                gap: 2,
                p: 2,
                ":focus-visible": {
                  outline: "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  width: "min(400px,80vw)",
                }}
              >
                {loading ? (
                  <CircularProgress sx={{ width: 80, height: 80 }} />
                ) : (
                  <LocationOn
                    color="primary"
                    sx={{ width: 80, height: 80, p: 2 }}
                  />
                )}
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: 32,
                    fontWeight: 600,
                  }}
                >
                  {loading ? "Fetching Location" : "Please allow location"}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: 14,
                    color: "grey",
                    whiteSpace: "balance",
                  }}
                >
                  {loading
                    ? ""
                    : "In order to show weather information around you we need location access."}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: loading ? "none" : "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button variant="contained" onClick={handleCancel}>
                  Deny
                </Button>
                <Button variant="contained" onClick={handleConfirm}>
                  Allow
                </Button>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
