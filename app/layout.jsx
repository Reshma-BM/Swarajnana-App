import "../styles/globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Swarajnana",
  description: "Discovering Knowledge Through Indian Music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-templeOrange/20 to-white font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
