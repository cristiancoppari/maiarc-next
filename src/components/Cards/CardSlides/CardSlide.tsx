import type {
  Accommodation,
  Hotel,
  Villa,
  SuperYatch,
  Yatch,
  PremiumVehicle,
  RealEstateItem,
  UniqueExperience,
} from "@/types/services";

import { BsCarFrontFill, BsPeople } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbManualGearbox } from "react-icons/tb";

import { useModalStore } from "@/state/modalStore";
import { Button } from "@/components/ui/button";

interface CardSlideProps {
  service: Villa | Hotel | Yatch | SuperYatch | Accommodation | PremiumVehicle | RealEstateItem | UniqueExperience;
  // handlers: {
  //   selectService: (id: string | number) => void;
  //   openModal: () => void;
  //   openCarouselModal: () => void;
  // };
}

const CardSlide: React.FC<CardSlideProps> = ({ service }) => {
  const { openModal } = useModalStore();
  return (
    <div className="shadow-xl">
      <img src={service.main_image} alt="" className="h-52 w-full object-cover" />

      <div className="bg-zinc-100 p-6 text-slate-900">
        <h4 className="h4 --font-lora mb-4 text-left">{service.name}</h4>
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            {/* Capacity */}
            {"capacity" in service && (
              <div className="flex items-center gap-2">
                <BsPeople className="h-6 w-6" />

                <p className="text-sm">{service.capacity}</p>
              </div>
            )}

            {/* Destination and location */}
            {"destination" in service && (
              <div className="flex items-center gap-2">
                <IoLocationOutline className="h-6 w-6" />
                <p className="text-sm capitalize">
                  {"location" in service && service.location ? `${service.location},` : ""} {service.destination}
                </p>
              </div>
            )}

            {/* Location */}
            {"location" in service && !("destination" in service) && (
              <div className="flex items-center gap-2">
                <IoLocationOutline className="h-6 w-6" />
                <p className="text-sm capitalize">{service.location}</p>
              </div>
            )}

            {/* Breakfast */}
            {"includes_breakfast" in service && service.includes_breakfast && (
              <div className="flex items-center gap-2">
                <MdOutlineFreeBreakfast className="h-6 w-6" />

                <p className="text-sm">Incluido</p>
              </div>
            )}

            {/* Transmission */}
            {"transmission" in service && (
              <div className="flex items-center gap-2">
                <TbManualGearbox className="h-6 w-6" />

                <p className="text-sm capitalize">{service.transmission}</p>
              </div>
            )}

            {/* Type */}
            {"type" in service && (
              <div className="flex items-center gap-2">
                <BsCarFrontFill className="h-6 w-6" />

                <p className="text-sm capitalize">{service.type}</p>
              </div>
            )}
          </div>

          <Button
            variant="link"
            onClick={() => {
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

export default CardSlide;
