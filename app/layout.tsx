import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
