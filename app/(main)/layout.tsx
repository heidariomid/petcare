import type {Metadata} from 'next';
import '../../styles/globals.css';
import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchContextProvider from '@/contexts/search-context-provider';
import PetContextProvider from '@/contexts/pet-context-provider';
import prisma from '@/lib/db';
import {Toaster} from '@/components/ui/sonner';
export const metadata: Metadata = {
	title: 'PetCare Dashboard',
	description: 'Take care of people’s pets responsibility.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pets = await prisma.pet.findMany();
	return (
		<>
			<Background />
			<div className='flex flex-col max-w-4xl mx-auto px-4 min-h-screen '>
				<Header />
				<SearchContextProvider>
					<PetContextProvider pets={pets}>{children}</PetContextProvider>
				</SearchContextProvider>
				<Footer />
			</div>
			<Toaster position='top-right' />
		</>
	);
}
