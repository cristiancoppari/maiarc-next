import { cn } from "@/lib/utils";

interface BurgerProps {
    onClick: () => void;
    isOpen: boolean;
    classes: string;
}

function Burger({ onClick, isOpen, classes }: BurgerProps) {
    return (
        <button
            type="button"
            className={cn("menu-toggle", classes, isOpen ? "open" : "")}
            onClick={onClick}
        >
            <span />
            <span />
            <span />
            <span />
        </button>
    );
}

export default Burger;
