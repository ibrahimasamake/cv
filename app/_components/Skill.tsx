import {Section} from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";
import {Tailwinicon} from "@/app/_components/icons/Tailwinicon";
import {Laravelicon} from "@/app/_components/icons/Laravelicon";
import {AngularIcon} from "@/app/_components/icons/AngularIcon";
import {Nextjsicon} from "@/app/_components/icons/Nextjsicon";
import {Code} from "@/app/_components/Hero";
import { Card } from "@/components/ui/card";

export const Skill = () => {
    return (
        <Section className={'flex flex-col items-start gap-4'}>
            <Badge className={'p-4'} variant={'outline'}>Skills</Badge>
            <h2 className={'text-2xl scroll-m-20 border-b pb-2 font-bold'}>I love working on ... </h2>
            <div className="flex flex-col md:flex-row items-start gap-4">
                <div className={'flex flex-col gap-4 '}>
                    <AngularIcon className={'text-primary animate-pulse'} style={{animationDirection: "15ms"}}
                                 size={33}></AngularIcon>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Angular
                    </h3>
                    <p className="text-primary-foreground text-sm">
                        <Code>Angular</Code> pour des applications robustes et modulaires.
                    </p>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <Laravelicon className={'text-primary animate-pulse'} style={{animationDirection: "15ms"}}
                                 size={33}></Laravelicon>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Laravel
                    </h3>
                    <p className="text-primary-foreground text-sm">
                        <Code>Laravel</Code> pour des projets web simples et puissants.
                    </p>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <Tailwinicon className={'text-primary-foreground animate-pulse'} style={{animationDirection: "15ms"}}
                                 size={33}></Tailwinicon>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Tailwind
                    </h3>
                    <p className="text-primary-foreground text-sm">
                        <Code>Tailwind</Code> pour des interfaces flexibles et personnalisables.
                    </p>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <Nextjsicon className={'text-primary-foreground animate-pulse'} style={{animationDirection: "15ms"}}
                                size={38}></Nextjsicon>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        NextJs
                    </h3>
                    <p className="text-sm text-primary-foreground">
                        <Code>Next.js</Code> pour des applications web modernes et évolutives.
                    </p>
                </div>
            </div>


        </Section>
    );
};