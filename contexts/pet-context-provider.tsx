'use client';

// import { addPet, deletePet, editPet } from "@/actions/actions";
import {Pet, PetEssentials} from '@/lib/types';
// import { Pet } from "@prisma/client";
import {createContext, useOptimistic, useState} from 'react';
// import { toast } from "sonner";

type PetContextProviderProps = {
	data: Pet[];
	children: React.ReactNode;
};

type TPetContext = {
	pets: Pet[];
	selectedPetId: Pet['id'] | null;
	selectedPet: Pet | undefined;
	numberOfPets: number;
	handleAddPet: (newPet: PetEssentials) => void;
	// handleEditPet: (petId: Pet["id"], newPetData: PetEssentials) => Promise<void>;
	handleCheckoutPet: (id: Pet['id']) => Promise<void>;
	handleChangeSelectedPetId: (id: Pet['id']) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({data, children}: PetContextProviderProps) {
	const [pets, setPets] = useState(data);
	// state
	// const [optimisticPets, setOptimisticPets] = useOptimistic(data, (state, {action, payload}) => {
	// 	switch (action) {
	// 		case 'add':
	// 			return [...state, {...payload, id: Math.random().toString()}];
	// 		case 'edit':
	// 			return state.map((pet) => {
	// 				if (pet.id === payload.id) {
	// 					return {...pet, ...payload.newPetData};
	// 				}
	// 				return pet;
	// 			});
	// 		case 'delete':
	// 			return state.filter((pet) => pet.id !== payload);
	// 		default:
	// 			return state;
	// 	}
	// });
	const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

	// derived state
	const selectedPet = pets.find((pet) => pet.id === selectedPetId);
	const numberOfPets = pets.length;

	// event handlers / actions
	// const handleAddPet = async (newPet: PetEssentials) => {
	//   setOptimisticPets({ action: "add", payload: newPet });
	//   const error = await addPet(newPet);
	//   if (error) {
	//     toast.warning(error.message);
	//     return;
	//   }
	// };
	// const handleEditPet = async (petId: Pet["id"], newPetData: PetEssentials) => {
	//   setOptimisticPets({ action: "edit", payload: { id: petId, newPetData } });
	//   const error = await editPet(petId, newPetData);
	//   if (error) {
	//     toast.warning(error.message);
	//     return;
	//   }
	// };
	// const handleCheckoutPet = async (petId: Pet["id"]) => {
	//   setOptimisticPets({ action: "delete", payload: petId });
	//   const error = await deletePet(petId);
	//   if (error) {
	//     toast.warning(error.message);
	//     return;
	//   }
	//   setSelectedPetId(null);
	// };
	const handleChangeSelectedPetId = (id: Pet['id']) => {
		setSelectedPetId(id);
	};

	const handleCheckoutPet = async (petId: Pet['id']) => {
		setPets((prev) => prev.filter((pet) => pet.id !== petId));
		setSelectedPetId(null);
	};
	const handleAddPet = (newPet: PetEssentials) => {
		setPets((prev) => [...prev, {...newPet, id: Math.random().toString()}]);
	};
	return (
		<PetContext.Provider
			value={{
				pets,
				selectedPetId,
				selectedPet,
				numberOfPets,
				handleChangeSelectedPetId,
				handleCheckoutPet,
				handleAddPet,
			}}
		>
			{children}
		</PetContext.Provider>
	);
}
