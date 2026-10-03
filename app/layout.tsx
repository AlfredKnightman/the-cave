import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Cave — Agent Command Center",
  description: "Alfred's AI agent command center. All agents standing by.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="cave-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}
