import PetFormBtn from './PetFormBtn';
import {Input} from './ui/input';
import {Label} from './ui/label';
import {Textarea} from './ui/textarea';

type PetFormProps = {
	actionType: 'add' | 'edit';
	onFormSubmission: () => void;
};

const PetForm = ({actionType, onFormSubmission}: PetFormProps) => {
	return (
		<form className='flex flex-col'>
			<div className='space-y-3'>
				<div className='space-y-1'>
					<Label htmlFor='name'>Name</Label>
					<Input id='name' />
					{/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='ownerName'>Owner Name</Label>
					<Input id='ownerName' />
					{/* {errors.ownerName && (
            <p className="text-red-500">{errors.ownerName.message}</p>
          )} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='imageUrl'>Image Url</Label>
					<Input id='imageUrl' />
					{/* {errors.imageUrl && (
            <p className="text-red-500">{errors.imageUrl.message}</p>
          )} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='age'>Age</Label>
					<Input id='age' />
					{/* {errors.age && <p className="text-red-500">{errors.age.message}</p>} */}
				</div>

				<div className='space-y-1'>
					<Label htmlFor='notes'>Notes</Label>
					<Textarea id='notes' rows={3} />
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
