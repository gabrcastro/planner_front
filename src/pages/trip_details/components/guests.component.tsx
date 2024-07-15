import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { ButtonComponent } from "../../../components/button/button.component";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { useParams } from "react-router-dom";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function GuestsComponent() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[] | undefined>();

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants?.map((participant: Participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? 'Convidado '+index}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CheckCircle2 className="text-primary size-5 shrink-0" />
            ) : (
              <CircleDashed className="text-primary size-5 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <ButtonComponent onClick={() => {}} variant="secondary" size="full">
        <UserCog className="size-5 text-zinc-200 " />
        Gerenciar convidados
      </ButtonComponent>
    </div>
  );
}
