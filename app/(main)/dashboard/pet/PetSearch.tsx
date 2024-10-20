'use client';
import {useSearchContext} from '@/lib/hooks';

const PetSearch = () => {
	const {handleChangeSearchQuery, searchQuery} = useSearchContext();
	return (
		<form className='w-full h-full'>
			<input
				className='w-full h-full bg-white/80 outline-none rounded-md transition px-5 focus:bg-white'
				type='search'
				placeholder='Search pets'
				value={searchQuery}
				onChange={(e) => handleChangeSearchQuery(e.target.value)}
			/>
		</form>
	);
};

export default PetSearch;
