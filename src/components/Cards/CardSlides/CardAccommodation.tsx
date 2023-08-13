import type { Accommodation, Hotel, Villa } from "@/types/services";

import { BsPeople } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";

import { Button } from "@/components/ui/button";

interface AccomodationProps {
  card: Accommodation | Villa | Hotel;
  handlers: {
    selectService: (id: string | number) => void;
    openModal: () => void;
  };
}

const CardAccommodation: React.FC<AccomodationProps> = ({ card, handlers }) => {
  const { selectService, openModal } = handlers;

  return (
    <div className="shadow-xl">
      <img src={card.main_image} alt="" className="h-52 w-full object-cover" />

      <div className="bg-zinc-100 p-6 text-slate-900">
        <h4 className="h4 --font-lora mb-4 text-left">{card.name}</h4>
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            {/* Capacity */}
            <div className="flex items-center gap-2">
              <BsPeople className="h-6 w-6" />

              <p className="text-sm">{card.capacity}</p>
            </div>

            {/* Destination and location */}
            <div className="flex items-center gap-2">
              <IoLocationOutline className="h-6 w-6" />

              <p className="text-sm capitalize">
                {!!card.location && `${card.location} ,`} {card.destination}
              </p>
            </div>

            {/* Breakfast */}
            {"includes_breakfast" in card && card.includes_breakfast && (
              <div className="flex items-center gap-2">
                <MdOutlineFreeBreakfast className="h-6 w-6" />

                <p className="text-sm">Incluido</p>
              </div>
            )}
          </div>

          <Button
            variant="link"
            onClick={() => {
              selectService(card.uuid);
              openModal();
            }}
            className="p-0"
          >
            Consultar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardAccommodation;
