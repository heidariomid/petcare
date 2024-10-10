import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'PetCare',
	description: 'Take care of people’s pets responsibility.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} min-h-screen bg-zinc-300 text-zinc-900`}>{children}</body>
		</html>
	);
}
