export const metadata = {
  title: "Santiago — Timeline",
  description: "De un chuzón en el pecho a líneas de código",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
