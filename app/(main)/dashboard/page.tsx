import Container from '@/components/Container';
import PetDetails from './pet/PetDetails';
import PetHeaders from './pet/PetHeaders';
import PetList from './pet/PetList';
import PetSearch from './pet/PetSearch';
import PetButton from '@/components/PetButton';

const Dashboard = async () => {
	return (
		<main>
			<div className='flex items-center justify-between text-white py-8'>
				<PetHeaders />
			</div>
			<div className='grid  md:grid-cols-3  grid-rows-[45px_300px_500px] md:grid-rows-[45px_1fr] gap-4 md:h-[600px]  '>
				<div className='md:row-start-1 md:row-span-1 md:col-start-1  md:col-span-1'>
					<PetSearch />
				</div>
				<div className='relative md:row-start-2  md:row-span-1  md:col-start-1  md:col-span-1'>
					<Container>
						<PetList />
						<div className='absolute bottom-4 right-4'>
							<PetButton actionType='add' />
						</div>
					</Container>
				</div>
				<div className=' md:row-start-1  md:row-span-full  md:col-start-2  md:col-span-full'>
					<Container>
						<PetDetails />
					</Container>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
