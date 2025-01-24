import { cn } from "@/lib/utils";

interface Props {
    title: string;
    href?: string;
    type: string;
    image?: string;
    className?: string;
}

export function ProjectCard({ title, href, type, image, className }: Props) {
    return (
        <a href={href || "#"} className={cn("block cursor-pointer", className)}>
            <img src={image} alt={title} width={500} height={300} className="w-full aspect-square overflow-hidden object-cover object-top rounded-lg" />
            <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{type}</p>
            </div>
        </a>
    );
}
