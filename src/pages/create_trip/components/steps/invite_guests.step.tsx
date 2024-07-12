import { ArrowRight, UserRoundPlus } from "lucide-react";
import { ButtonComponent } from "../../../../components/button.component";

interface InviteGuestsProps {
    openGuestsModal: () => void,
    emailsToInvite: string[],
    openConfirmTripModal: () => void,
}

export function InviteGuestsStep({
    openGuestsModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center gap-2 flex-1 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-lg text-zinc-100">
                    {emailsToInvite.length} pessoa(s) convidada(s)
                  </span>
                ) : (
                  <span className="text-lg text-zinc-400">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <ButtonComponent onClick={openConfirmTripModal}>
                Confirmar viagem
                <ArrowRight className="size-5 " />
              </ButtonComponent>
            </div>
    )
}