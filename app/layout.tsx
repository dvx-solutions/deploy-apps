import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Deploy App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
