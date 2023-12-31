import "./globals.css";

export const metadata = {
  title: "Newsy",
  description: "Wonderfully organised",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
