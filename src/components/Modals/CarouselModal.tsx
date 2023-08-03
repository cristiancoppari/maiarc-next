import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import villa_img from "@/assets/images/villa-1.png";

const images = [
  villa_img.src,
  villa_img.src,
  villa_img.src,
  villa_img.src,
  villa_img.src,
  villa_img.src,
];

interface ConsultationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CarouselModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-transparent p-6 text-left align-middle transition-all md:w-max">
                <Swiper
                  modules={[Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  slidesPerView={1}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="" className="h-full w-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* <Swiper
                  modules={[Thumbs]}
                  slidesPerView={4}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index + 1}>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarouselModal;