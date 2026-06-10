import "../index.css";

export const metadata = {
  title: "Creyotech",
  description: "Creyotech IT Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
