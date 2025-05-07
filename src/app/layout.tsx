// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


export const metadata = {
  title: 'Afsana F S || Portfolio',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='font-sans text-white bg-[rgb(16,1,29)]'>
        <Navbar />
        {children}
        <hr className='border-solid border-gray-50 opacity-20' />
        <Footer />
      </body>
    </html>
  );
}
