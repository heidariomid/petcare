import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../../styles/globals.css';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'PetCare Login',
	description: 'Please login to access the PetCare dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
