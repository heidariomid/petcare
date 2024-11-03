import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../../styles/globals.css';
import Logo from '@/components/Logo';

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
	return (
		<div className='flex flex-col gap-y-5 justify-center items-center min-h-screen bg-zinc-900 text-white'>
			<Logo />
			{children}
		</div>
	);
}
