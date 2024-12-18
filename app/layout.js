import "./globals.css";

export const metadata = {
  title: "This letter is for Grace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full h-screen flex flex-col items-center text-center"
      >
        {children}
      </body>
    </html>
  );
}
