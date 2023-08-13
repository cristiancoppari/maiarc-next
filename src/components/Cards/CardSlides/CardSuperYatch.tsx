import type { SuperYatch } from "@/types/services";

import { BsPeople } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";

interface SuperYatchProps {
  card: SuperYatch;
  handlers: {
    selectService: (id: string | number) => void;
    openModal: () => void;
  };
}

const CardYatch: React.FC<SuperYatchProps> = ({ card, handlers }) => {
  const { selectService, openModal } = handlers;

  return (
    <div className="shadow-xl">
      <img src={card.main_image} alt="" className="h-52 w-full object-cover" />

      <div className="bg-zinc-100 p-6 text-slate-900">
        <h4 className="h4 --font-lora mb-2 text-left">{card.name}</h4>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <BsPeople className="h-6 w-6" />

              <p className="text-sm">{card.capacity}</p>
            </div>
            <div className="flex items-center gap-2">
              <IoLocationOutline className="h-6 w-6" />

              <p className="text-sm capitalize">{!!card.location && `${card.location}`}</p>
            </div>
          </div>

          <Button
            variant="link"
            onClick={() => {
              selectService(card.uuid);
              openModal();
            }}
          >
            Consultar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardYatch;
