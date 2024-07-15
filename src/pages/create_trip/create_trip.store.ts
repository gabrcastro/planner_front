import { DateRange } from 'react-day-picker';
import { create } from 'zustand'

type Store = {
    isGuestsInputOpen: boolean;
    setIsGuestsInputOpen: (state: boolean) => void;
    isGuestsModalOpen: boolean;
    setIsGuestsModalOpen: (state: boolean) => void;
    isConfirmTripModalOpen: boolean;
    setIsConfirmTripModalOpen: (state: boolean) => void;
    emailsToInvite: string[];
    setEmailsToInvite: (emails: string[]) => void;
    destination: string;
    setDestination: (destination: string) => void;
    ownerName: string;
    setOwnerName: (name: string) => void;
    ownerEmail: string;
    setOwnerEmail: (email: string) => void;
    eventStartAndEndDates: DateRange | undefined;
    setEventStartAndEndDates: (event: DateRange | undefined) => void;
  };

export const useCreateTripStore = create<Store>((set) => ({
    isGuestsInputOpen: false,
    setIsGuestsInputOpen: (state: boolean) => set(() => ({ isGuestsInputOpen: state})),

    isGuestsModalOpen: false,
    setIsGuestsModalOpen: (state: boolean) => set(() => ({ isGuestsModalOpen: state})),

    isConfirmTripModalOpen: false,
    setIsConfirmTripModalOpen: (state: boolean) => set(() => ({ isConfirmTripModalOpen: state})),

    emailsToInvite: [],
    setEmailsToInvite: (emails: string[]) => set(() => ({ emailsToInvite: emails})),

    destination: '',
    setDestination: (destination: string) => set(() => ({ destination: destination})),

    ownerName: '',
    setOwnerName: (name: string) => set(() => ({ ownerName: name})),
    
    ownerEmail: '',
    setOwnerEmail: (email: string) => set(() => ({ ownerEmail: email})),

    eventStartAndEndDates: undefined,
    setEventStartAndEndDates: (event: DateRange | undefined) => set(() => ({ eventStartAndEndDates: event})),
}))