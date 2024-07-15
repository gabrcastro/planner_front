import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModalComponent } from "./components/invite_guests_modal.component.";
import { ConfirmTripModalComponent } from "./components/confirm_trip_modal.component";
import { DestinationAndDateStep } from "./components/steps/destination_and_date.step";
import { InviteGuestsStep } from "./components/steps/invite_guests.step";
import { api } from "../../lib/axios";
import { useCreateTripStore } from "./create_trip.store";

export function CreateTripPage() {
  const navigate = useNavigate();
  const store = useCreateTripStore()

  function openGuestsInput() {
    store.setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    store.setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    store.setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    store.setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    store.setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    store.setIsConfirmTripModalOpen(false);
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!store.destination) return;
    if (!store.eventStartAndEndDates?.from || !store.eventStartAndEndDates?.to) return;
    if (store.emailsToInvite.length === 0) return;
    if (!store.ownerEmail || !store.ownerName) return;

    const response = await api.post("/trips", {
      destination: store.destination,
      starts_at: store.eventStartAndEndDates.from,
      ends_at: store.eventStartAndEndDates.to,
      emails_to_invite: store.emailsToInvite,
      owner_name: store.ownerName,
      owner_email: store.ownerEmail,
    });

    const { tripId } = response.data;

    navigate(`/trips/${tripId}`);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("guest_email")?.toString();

    if (!email) return;
    if (store.emailsToInvite.includes(email)) return;

    store.setEmailsToInvite([...store.emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = store.emailsToInvite.filter(
      (email) => email !== emailToRemove
    );
    store.setEmailsToInvite(newEmailList);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="planner" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            isGuestsInputOpen={store.isGuestsInputOpen}
            setDestination={store.setDestination}
            setEventStartAndEndDates={store.setEventStartAndEndDates}
            eventStartAndEndDates={store.eventStartAndEndDates}
          />

          {store.isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={store.emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos
          <a className="ml-1 text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
        </p>
      </div>

      {store.isGuestsModalOpen && (
        <InviteGuestsModalComponent
          emailsToInvite={store.emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {store.isConfirmTripModalOpen && (
        <ConfirmTripModalComponent
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          setOwnerName={store.setOwnerName}
          setOwnerEmail={store.setOwnerEmail}
        />
      )}
    </div>
  );
}
