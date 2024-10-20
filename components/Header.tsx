'use client';
import {usePathname} from 'next/navigation';
import Logo from './Logo';
import Link from 'next/link';
import {cn} from '@/lib/utils';
const routes = [
	{
		label: 'Dashboard',
		path: '/dashboard',
	},
	{
		label: 'Account',
		path: '/account',
	},
];

const Header = () => {
	const path = usePathname();

	return (
		<header className='flex justify-between items-center py-2 border-b border-white'>
			<Logo />
			<nav>
				<ul className='flex gap-2 '>
					{routes.map((route) => (
						<li key={route.path}>
							<Link
								className={cn(
									'text-white rounded-sm px-2 py-1 hover:text-zinc-200 focus:text-zinc-200 transition',
									{
										'bg-zinc-800/20 px-2 text-white': route.path === path,
									},
								)}
								href={route.path}
							>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
