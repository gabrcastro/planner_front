import {
    Plus
} from "lucide-react";
import { useState } from "react";
import { CreateActivityModalComponent } from "./components/create_activity_modal.component";
import { ImportantLinksComponent } from "./components/important_links.component";
import { GuestsComponent } from "./components/guests.component";
import { AcitiviesComponent } from "./components/activities.component";
import { DestinationAndDateHeaderComponent } from "./components/destination_and_date_header.component";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeaderComponent />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 bg-primary text-primaryDark rounded-lg px-5 py-2 font-medium hover:bg-primaryHover"
            >
              <Plus className="size-5 text-primaryDark " />
              Cadastrar atividade
            </button>
          </div>

          <AcitiviesComponent />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinksComponent />

          <div className="w-full h-px bg-zinc-800" />

          <GuestsComponent />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModalComponent 
            closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
