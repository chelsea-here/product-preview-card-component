import type { Metadata } from "next";
import { mont, fraunces } from "./styles/fonts";
import "./styles/globals.scss";

var challengeName: string = "Social Links Profile";

export const metadata: Metadata = {
  title: `Frontend Mentor | ${challengeName}`,
  description: `My solution to Frontend Mentor'\s ${challengeName} challenge`,
  keywords: ["HTML, CSS, JavaScript, NextJS, Tailwindcss, React"],
  creator: "Chelsea Anne Livingston Cruz",

  openGraph: {
    title: `Frontend Mentor | ${challengeName}`,
    description:
      `My solution to Frontend Mentor'\s ` + { challengeName } + ` challenge`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont} ${fraunces}`}>{children}</body>
    </html>
  );
}
