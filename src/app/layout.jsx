import { Lustria } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { EvermoreNavbar } from "@/components/ui/resizable-navbar";

const lustria = Lustria({
  variable: "--font-lustria",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Evermore",
  description: "Share your moments with others",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${lustria.variable} antialiased`}
        >
          <EvermoreNavbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}