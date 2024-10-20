import {cn} from '@/lib/utils';

type Props = {
	children: React.ReactNode;
	className?: string;
};
const Container = ({children, className}: Props) => {
	return (
		<div className={cn('h-full w-full bg-[#F7F8FA] shadow-sm rounded-md overflow-hidden', className)}>
			{children}
		</div>
	);
};

export default Container;
