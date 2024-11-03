import Image from 'next/image';
import logo from '@/public/logo.svg';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
	return (
		<main className=' bg-zinc-400 min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10'>
			<Image src={logo} alt='Preview of PetSoft' width={519} height={472} />
			<div>
				<h1 className='text-xl xl:text-5xl font-bold max-w-[500px] '>
					Manage your pet care business with <span className='text-green-400'>PetSoft</span>
				</h1>
				<p className='text-lg xl:text-2xl max-w-[500px]'>
					Manage your pet care business effortlessly.
				</p>
				<div className='my-4 space-x-3'>
					<Button asChild className='bg-[#312c2c]'>
						<Link href='/dashboard'>Get Started</Link>
					</Button>
					<Button asChild variant={'secondary'}>
						<Link href='/login'>Login</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}

export default Home;
