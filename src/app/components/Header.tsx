"use client"
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "@/app/assets/holyhtml-logo.png"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import Form from "./Form";


export const AcmeLogo = () => {
    return (
        <Image src={logo} alt="logo" height={150} width={150} />
    );
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const menuItems = [
        {
            id: 1,
            title: "Work",
            link: "#projects"
        },
        {
            id: 1,
            title: "Service",
            link: "#service"
        },
        {
            id: 1,
            title: "Contact",
            link: "#contact"
        }
    ];

    return (

        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <AcmeLogo />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#projects">
                            Work
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link color="foreground" href="#service">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#contact">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">

                    <NavbarItem>
                        <Button onPress={onOpen} as={Link} className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200" >
                            Contact Us
                        </Button>
                    </NavbarItem>

                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    "foreground"
                                }
                                href={item.link}
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Contact Us 📧</ModalHeader>
                            <ModalBody>
                                <Form />
                            </ModalBody>
                            <ModalFooter>
                                {/*  */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    );
}

