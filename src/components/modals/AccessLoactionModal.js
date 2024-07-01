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
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";

export default function AccessLoactionModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { pos, setPos } = useContext(GlobalContext);
  const loading = pos.status == "loading";

  useEffect(() => {
    async function initialCheck() {
      // if user has already granted permission
      if (pos.status == "success") {
        router.push(`/latlon?lat=${pos.position.lat}&lon=${pos.position.lon}`);
        return;
      }
      // check for permission
      const hasPermission = await hasLocationPermission();
      // access location
      if (hasPermission) {
        getLocation(setPos, enqueueSnackbar, router.push);
      }
      //  if user previously denied premission ask again
      else if (
        ["error", "denied", "unset"].includes(pos.status) &&
        pos.count < 3
      ) {
        setOpen(true);
      }
      // number of denials reached 3, show default location
      else {
        enqueueSnackbar(
          "Maximum limit for dinials reached, showing default location surat",
          {
            variant: "error",
          }
        );
        router.push("/Surat");
      }
    }
    initialCheck();
  }, []);

  async function handleConfirm() {
    await getLocation(setPos, enqueueSnackbar, router.push);
    setOpen(false);
  }

  async function handleCancel() {
    enqueueSnackbar("Access denied, showing default location Surat", {
      variant: "info",
    });
    setPos((old) => {
      return { ...old, status: "denied", count: old.count + 1 };
    });
    router.push("/Surat");
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
