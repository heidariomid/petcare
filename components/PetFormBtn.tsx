'use client';
import {useFormStatus} from 'react-dom';
import {Button} from './ui/button';
import spinner from '@/public/spinner.svg';
import Image from 'next/image';

type PetFormBtnProps = {
	actionType: 'add' | 'edit';
};

export default function PetFormBtn({actionType}: PetFormBtnProps) {
	const {pending} = useFormStatus();
	return (
		<Button disabled={pending} type='submit' className='mt-5 self-end'>
			{actionType === 'add' ? 'Add a new pet' : 'Edit pet'}
			{pending && (
				<Image
					src={spinner}
					alt='Loading spinner'
					width={16}
					height={16}
					className='animate-spin -mr-1 ml-3 h-5 w-5 text-white'
				/>
			)}
		</Button>
	);
}
