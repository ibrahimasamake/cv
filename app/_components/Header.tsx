// @flow 
import * as React from 'react';
import {PropsWithChildren} from "react";
import {Button, buttonVariants} from "@/components/ui/button";
import {Githubicon} from "@/app/_components/icons/Githubicon"
import { Section } from './Section';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Twittericon} from "@/app/_components/icons/Twittericon";
import {Youtubeicon} from "@/app/_components/icons/Youtubeicon";


export const Header = (props: PropsWithChildren<{clasName?:string}>) => {
    return (
        <header className={"sticky bg-background top-0"}>
            <Section className={"flex items-baseline "}>
                <h1 className="text-sm font-bold ">IbrahimaSamake.com </h1>
                <div className={'flex-1'}></div>

                <ul className={'flex justify-center gap-2'}>
                    <Link className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")} href={"https://github.com/ibrahimasamake"}>
                        <Githubicon size={16} className={'text-foreground'}/>
                    </Link>

                    <Link className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")} href={"https://twitter.com/Ibrahim94077999"}>
                        <Twittericon size={16} className={'text-foreground'}/>
                    </Link>

                    <Link className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")} href={"https://www.youtube.com/channel/UCm046w266nMSPRkvZmvrdkA"}>
                        <Youtubeicon size={16} className={'text-foreground'}/>
                    </Link>

                </ul>
            </Section>
        </header>
    );
};