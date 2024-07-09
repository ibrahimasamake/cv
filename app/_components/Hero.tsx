import Image from "next/image";
import profilImage  from "@/public/profilImage.jpg"
import {Section} from "@/app/_components/Section";
import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import image from "@/public/profild/IMG_2675.jpg";
import {BriefcaseBusiness, Users} from "lucide-react";

export const Code= ({className ,...props}:ComponentPropsWithoutRef<'span'>)=>{
    return <span className={cn('bg-accent/30 font-mono   border border-accent text-nowrap p-1 rounded','',className)} {...props}>

    </span>

}
export const Hero = () => {

    return (
        <Section className={'flex max-md:flex-col items-start gap-4'}>
            <div className={'flex-[2] flex flex-col gap-2  px-4 '}>
                <h2 className={'font-caption text-5xl  font-bold text-primary text-gray-600'}>Ibrahima Samake</h2>
                <h3 className={'text-xl font-caption  text-gray-400'}>Develloppeur fullStack,experte en maintenance informatique et reparation de telephone </h3>
                <p className={cn(' text-gray-400')}>
                    Je cree des sites web proffesionnels pour les
                    <span><Code><BriefcaseBusiness className={'inline'} size={12}/> Entreprises</Code> </span>
                    & <span><Code><Users  className={'inline'} size={12}/> Particulier</Code></span>,
                    J'habite au <Code><img className={'inline'} src="https://upload.wikimedia.org/wikipedia/commons/3/39/Maliba.png" width={12} height={2} alt={'mali'}/> Mali</Code> precisement a Bamako.
                </p>


            </div>

            <div className={'flex-1 m-auto max-md:m-auto ml-auto'}>
                <img  className='w-full h-auto max-w-xs max-md:w-52 m-auto  rounded-full' src={'https://media.licdn.com/dms/image/D4E03AQGYNdNQAngocA/profile-displayphoto-shrink_800_800/0/1713457903400?e=1718841600&v=beta&t=5RFq0accb1Ej5iWQx45W71Jl20jj--KDUCNOIzSTttU'}/>
            </div>
        </Section>
    );
};