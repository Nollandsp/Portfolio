import "./globals.css";
import Navbar from "../components/navbar";
import Main from "../app/page";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de développeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased text-white">
        <Navbar />
        {children}
        <Main />
      </body>
    </html>
  );
}
