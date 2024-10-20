import type {Metadata} from 'next';
import '../../styles/globals.css';
import Background from '@/components/Background';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchContextProvider from '@/contexts/search-context-provider';
import PetContextProvider from '@/contexts/pet-context-provider';

export const metadata: Metadata = {
	title: 'PetCare Dashboard',
	description: 'Take care of people’s pets responsibility.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
	const data = await response.json();
	if (!response.ok) throw new Error('Error in fetching data');
	return (
		<>
			<Background />
			<div className='flex flex-col max-w-4xl mx-auto px-4 min-h-screen '>
				<Header />
				<SearchContextProvider>
					<PetContextProvider data={data}>{children}</PetContextProvider>
				</SearchContextProvider>
				<Footer />
			</div>
		</>
	);
}
