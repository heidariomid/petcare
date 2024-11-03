import {addPet, editPet} from '@/actions/actions';
import PetFormBtn from './PetFormBtn';
import {Input} from './ui/input';
import {Label} from './ui/label';
import {Textarea} from './ui/textarea';
import {toast} from 'sonner';
import {usePetContext} from '@/lib/hooks';

type PetFormProps = {
	actionType: 'add' | 'edit';
	onFormSubmission: () => void;
};

const PetForm = ({actionType, onFormSubmission}: PetFormProps) => {
	const {selectedPet} = usePetContext();
	const actionHandler = async (formData) => {
		if (actionType === 'add') {
			const result = await addPet(formData);
			if (result) {
				toast.error(result?.message);
				return;
			}
		}
		if (actionType === 'edit') {
			const result = await editPet(selectedPet?.id, formData);
			if (result) {
				toast.error(result?.message);
				return;
			}
		}

		onFormSubmission();
	};
	return (
		<form action={actionHandler} className='flex flex-col'>
			<div className='space-y-3'>
				<div className='space-y-1'>
					<Label htmlFor='name'>Name</Label>
					<Input
						id='name'
						name='name'
						defaultValue={actionType === 'edit' ? selectedPet?.name : ''}
					/>
					{/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='ownerName'>Owner Name</Label>
					<Input
						id='ownerName'
						name='ownerName'
						defaultValue={actionType === 'edit' ? selectedPet?.ownerName : ''}
					/>
					{/* {errors.ownerName && (
            <p className="text-red-500">{errors.ownerName.message}</p>
          )} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='imageUrl'>Image Url</Label>
					<Input
						id='imageUrl'
						name='imageUrl'
						defaultValue={actionType === 'edit' ? selectedPet?.imageUrl : ''}
					/>
					{/* {errors.imageUrl && (
            <p className="text-red-500">{errors.imageUrl.message}</p>
          )} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='age'>Age</Label>
					<Input id='age' name='age' defaultValue={actionType === 'edit' ? selectedPet?.age : ''} />
					{/* {errors.age && <p className="text-red-500">{errors.age.message}</p>} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='notes'>Notes</Label>
					<Textarea
						id='notes'
						name='notes'
						rows={3}
						defaultValue={actionType === 'edit' ? selectedPet?.notes : ''}
					/>
					{/* {errors.notes && (
            <p className="text-red-500">{errors.notes.message}</p>
          )} */}
				</div>
			</div>
			<PetFormBtn actionType={actionType} />
		</form>
	);
};

export default PetForm;
