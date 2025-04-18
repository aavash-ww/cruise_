import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="m-0 p-0 box-border">{children}</body>
    </html>
  );
}
