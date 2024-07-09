import {Card} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";
import * as React from "react";

export const ContactsProps = (props: {
    image: string,
    title: string,
    meduimImage: string
    description: string,
}) => {
    return (
        <Card className={'flex  gap-4 w-full bg-accent/10  hover:bg-accent/30 transition-colors group p-4'}>
            <div className={'relative'}>
                <img className={'w-10 h-10 rounded-full '} src={props.image}></img>
                <img className={'absolute w-5 h-5  rounded object-cover -bottom-2 -right-1 '}
                     src={props.meduimImage}></img>

            </div>

            <div>
                <p className={'text-sm text-font-semibold'}>{props.title}</p>
                <p className={'text-sm text-muted-foreground'}>{props.description}</p>
            </div>
            <ArrowUpRight
                className={'ml-auto group-hover:translate-x-2 group-hover:translate-y-2 transition-transform mr-2'}
                size={16}> </ArrowUpRight>


        </Card>
    );
};