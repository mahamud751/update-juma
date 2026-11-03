import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider, Header, Footer } from '@/components/store';
export const metadata: Metadata = { title: {default:'Jhuma Jewellers — Some things, forever.',template:'%s | Jhuma Jewellers'}, description:'Discover gold necklaces, rings, earrings and bridal sets at Jhuma Jewellers, Zindabazar, Sylhet.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body suppressHydrationWarning><StoreProvider><Header/><main id="main">{children}</main><Footer/></StoreProvider></body></html>}
