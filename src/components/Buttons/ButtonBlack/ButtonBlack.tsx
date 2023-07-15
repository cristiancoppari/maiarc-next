import type { BlackButtonProps } from "@/types/buttons";

import Link from "next/link";

import { Button } from "@/components/UI/button";

const ButtonBlack = ({ link, text, classes }: BlackButtonProps) => {
    return (
        <Button
            asChild
            className={`rounded-full px-12 uppercase ${
                !!classes ? classes : ""
            }`}
        >
            <Link href={link}>{text}</Link>
        </Button>
    );
};

export default ButtonBlack;
