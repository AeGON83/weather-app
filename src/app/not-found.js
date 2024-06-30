import { Box, Container, Stack, Typography } from "@mui/material";
import bgStyles from "@/styles/backdrops.module.css";
import Searchbar from "@/components/utils/Searchbar";

export default function FourZeroFour() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        height: "100%",
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        mb: 4,
        px: 4,
      }}
    >
      <Stack
        className={bgStyles.not_found_bg}
        justifyContent={"center"}
        borderRadius={4}
        alignItems={"center"}
        direction={"column"}
        width={"100%"}
        flexGrow={1}
        gap={4}
      >
        <Typography
          sx={{
            color: "#fff",
            opacity: "0.4",
            fontSize: { ss: "45vmin", xs: "45vmin", sm: "55vmin" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            fontSize: { ss: 22, xs: 22, sm: 32 },
            color: "#fff",
            textWrap: "balance",
            px: 4,
            textAlign: "center",
          }}
        >
          Searched location not found, please check city name
        </Typography>
        <Box
          sx={{
            zIndex: 10,
            width: "100%",
            px: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Searchbar autofocus />
        </Box>
      </Stack>
    </Container>
  );
}
