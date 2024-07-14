import { Link2, Plus } from "lucide-react";
import { ButtonComponent } from "../../../components/button/button.component";

export function ImportantLinksComponent() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/1231231208319283901283091283
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Regras da casa
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.notion.com/1231231208319283901283091283
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
            </div>

            <ButtonComponent onClick={() => {}} variant="secondary" size="full">
              <Plus className="size-5" />
              Cadastrar novo link
            </ButtonComponent>
          </div>
    )
}