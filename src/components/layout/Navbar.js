import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import logo from "../../../public/assets/icons/navbar-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { lato, poppins } from "@/fonts";
import Searchbar from "../utils/Searchbar";

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
        maxWidth="xl"
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#FFF",
          px: 4,
          py: 2,
          zIndex: 21,
          margin: "0 auto",
          gap: 1,
          justifyContent: { ss: "center", xs: "center", sm: "space-between" },
          flexWrap: { ss: "wrap", xs: "wrap", sm: "no-wrap" },
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          border={1}
          backgroundColor={"primary.light"}
          py={1}
          px={2}
          borderRadius={10}
        >
          <Link href={"/"}>
            <Box
              sx={{
                width: { ss: 25, xs: 30, sm: 40, md: 45 },
                height: { ss: 25, xs: 30, sm: 40, md: 45 },
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
              fontSize={{ ss: 22, xs: 24, sm: 26, md: 28 }}
              fontWeight={700}
              lineHeight={"100%"}
              mr={"auto"}
              color={"primary.main"}
            >
              Rajan
            </Typography>
          </Link>
        </Stack>
        <Searchbar />
      </Box>
    </AppBar>
  );
}
export default Navbar;
