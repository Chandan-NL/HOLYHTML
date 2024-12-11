import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

import { IconSquareCheck } from "@tabler/icons-react";
import { OurOffer } from "@/app/data/data"

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>We Provide</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">We Provide</ModalHeader>
                            <ModalBody>

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
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
