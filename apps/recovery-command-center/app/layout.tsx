import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Recovery-in-a-Box | Absolute Health Group',description:'Private command center for the planned 90-day Recovery-in-a-Box pilot.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
