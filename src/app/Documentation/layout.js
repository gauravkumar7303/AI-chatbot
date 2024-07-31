
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/chatbot.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
