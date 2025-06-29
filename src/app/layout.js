import "./globals.css";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de développeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased text-white">
        <div id="moving-circle"></div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
