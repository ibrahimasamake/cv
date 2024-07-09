import {LucideIcon} from "lucide-react";
import Link from "next/link";
import * as React from "react";

export const SideProjectProps = (props: {
    logo: LucideIcon,
    title: string,
    description: string
    url: string
}) => {
    return (
        <div className={'flex w-full  gap-2'}>
            <Link href={props.url}
                  className={'inline-flex  items-center gap-4 hover:bg-accent/50  p-2 transition-colors rounded '}>
                <span className={'bg-accent text-accent-foreground p-3 rounded-sm'}>
                    <props.logo size={16}/>
                </span>
                <div>
                    <p className={'text-sm text-font-semibold'}>{props.title}</p>
                    <p className={'text-sm text-muted-foreground'}>{props.description}</p>

                </div>
            </Link>
        </div>
    )

}