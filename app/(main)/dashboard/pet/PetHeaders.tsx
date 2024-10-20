'use client';
import {usePetContext} from '@/lib/hooks';
import React from 'react';

const PetHeaders = () => {
	const {numberOfPets} = usePetContext();
	return (
		<>
			<section>
				<h1>
					Pet<span className='font-semibold'>Soft</span>
				</h1>
				<p>Manage your pets and appointments here.</p>
			</section>
			<section className='text-center'>
				<p className='text-2xl font-bold leading-6'>{numberOfPets}</p>
				<p>Current Guests</p>
			</section>
		</>
	);
};

export default PetHeaders;
