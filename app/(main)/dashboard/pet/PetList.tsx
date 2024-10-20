'use client';

import {usePetContext, useSearchContext} from '@/lib/hooks';
import {cn} from '@/lib/utils';
import Image from 'next/image';

const PetList = () => {
	const {pets, handleChangeSelectedPetId, selectedPetId} = usePetContext();
	const {searchQuery} = useSearchContext();
	const filteredPets = pets.filter((pet) => pet.name.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<ul className='bg-white border-b border-black/35 '>
			{filteredPets.map((pet) => (
				<li key={pet.id}>
					<button
						onClick={() => handleChangeSelectedPetId(pet.id)}
						className={cn(
							'flex gap-3 w-full items-center h-[70px] px-5 text-base cursor-pointer hover:bg-[#90e6ce]',
							{
								'bg-[#90e6ce]': selectedPetId === pet.id,
							},
						)}
					>
						<Image
							src={pet.imageUrl}
							alt='pet'
							width={45}
							height={45}
							className='h-[45px] w-[45px] rounded-full object-cover'
						/>
						<p>{pet.name}</p>
					</button>
				</li>
			))}
		</ul>
	);
};

export default PetList;
