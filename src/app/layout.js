import "./globals.css";
import { Providers } from "@/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import { Box } from "@mui/material";
import { poppins } from "@/fonts";

export const metadata = {
  title: "Weather",
  description: "We provide good insigts for weather, have a good day :).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ overflowY: "scroll" }}>
        <Providers>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Navbar />
            <Box
              sx={{
                height: "100%",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
