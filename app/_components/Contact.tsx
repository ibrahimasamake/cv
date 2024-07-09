import {Section} from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";
import {Tailwinicon} from "@/app/_components/icons/Tailwinicon";
import {Laravelicon} from "@/app/_components/icons/Laravelicon";
import {AngularIcon} from "@/app/_components/icons/AngularIcon";
import {Nextjsicon} from "@/app/_components/icons/Nextjsicon";
import {Code} from "@/app/_components/Hero";
import { Card } from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";
import * as React from "react";
import {ContactsProps} from "@/app/_components/ContactsProps";

export const Contact = (props:{

}) => {
    return (
        <Section className={'flex flex-col items-start gap-4 '}>
            <h2 className={'text-2xl scroll-m-20 border-b pb-2 font-bold'}>Contact me  </h2>
            <div className="flex flex-col w-full md:flex-row items-start gap-4">
                <ContactsProps
                    image='https://media.licdn.com/dms/image/D4E03AQGYNdNQAngocA/profile-displayphoto-shrink_800_800/0/1713457903400?e=1718841600&v=beta&t=5RFq0accb1Ej5iWQx45W71Jl20jj--KDUCNOIzSTttU'
                    title="FaceBook"
                    meduimImage='https://img.freepik.com/vecteurs-libre/nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1713225600&semt=ais'
                    description="16'000 abonne"
                />

                <ContactsProps
                    image='https://media.licdn.com/dms/image/D4E03AQGYNdNQAngocA/profile-displayphoto-shrink_800_800/0/1713457903400?e=1718841600&v=beta&t=5RFq0accb1Ej5iWQx45W71Jl20jj--KDUCNOIzSTttU'
                    title="FaceBook"
                    meduimImage='https://img.freepik.com/vecteurs-libre/nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1713225600&semt=ais'
                    description="16'000 abonne"
                />
            </div>


        </Section>
    );
};