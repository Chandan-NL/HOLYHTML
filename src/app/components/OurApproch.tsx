"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal";
import { IconSquareCheck } from "@tabler/icons-react";
import { OurOffer } from "@/app/data/data"


export function OurApproch() {

    return (
        <div className="py-2 flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        What we offer!
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        ⚡
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            What's included !
                        </h4>

                        <div className="py-10 flex flex-col flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                            {OurOffer.map((items) =>

                                <div key={items.id} className="flex  items-center justify-center">
                                    <IconSquareCheck className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                        {items.title}
                                    </span>
                                </div>

                            )}


                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
}


