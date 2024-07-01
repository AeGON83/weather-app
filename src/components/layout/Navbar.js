import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import logo from "../../../public/assets/icons/navbar-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { lato, poppins } from "@/fonts";
import Searchbar from "../utils/Searchbar";
import { LocationOn } from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar
      position="relative"
      sx={{
        boxShadow: "unset",
        bgcolor: "#FFF",
      }}
    >
      <Box
        className="nav"
        maxWidth="xl"
        sx={{
          justifyContent: { ss: "center", xs: "center", sm: "space-between" },
          flexWrap: { ss: "wrap", xs: "wrap", sm: "no-wrap" },
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          backgroundColor={"primary.light"}
          py={1}
          px={2}
          borderRadius={10}
        >
          <Link href={"/"}>
            <Box
              sx={{
                width: { ss: 25, xs: 30, sm: 35, md: 35 },
                height: { ss: 25, xs: 30, sm: 35, md: 35 },
                cursor: "pointer",
              }}
            >
              <Image
                src={logo}
                width={30}
                height={30}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt="weather app icon"
              />
            </Box>
          </Link>
          <Link href={"/"}>
            <Typography
              fontFamily={lato.style.fontFamily}
              fontSize={22}
              fontWeight={700}
              color={"primary.main"}
            >
              Rajan
            </Typography>
          </Link>
        </Stack>
        <Box
          sx={{
            mr: {
              ss: 0,
              xs: 0,
              sm: "auto",
            },
            animation: "wiggle 3s linear infinite",
          }}
        >
          <Link href="/">
            <LocationOn sx={{ width: 30, height: 30 }} color="primary" />
          </Link>
        </Box>
        <Searchbar />
      </Box>
    </AppBar>
  );
}
export default Navbar;
