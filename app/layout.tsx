'use client'

import localFont from "next/font/local";
import { useEffect } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const modal = document.getElementById('testModal') as HTMLDialogElement;
    const openButton = document.getElementById('open') as HTMLButtonElement;
    const closeButton = document.getElementById('close') as HTMLButtonElement;
    document.addEventListener('keydown', function(e) {
      if (modal.open && e.key === 'Escape') {
        modal.close();
      }
    })
    document.addEventListener('click', function(e) {
      if ((e.target === closeButton && modal.open) || (e.target !== modal && modal.open)) {
        modal.close();
      }
      if (e.target === openButton) {
        modal.show();
      }
    })
  },[])

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <button name='open' id='open'>Open me!</button>
            <dialog id='testModal'>
              <h1>The Fantastic Test Modal</h1>
              <button name='close' id='close'>Close me!</button>
            </dialog>
      </main>
    </div>
      </body>
    </html>
  );
}
