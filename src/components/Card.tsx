import Image from "next/image";
import Link from "next/link";
import { getDictionary} from "@/app/[lang]/dictionaries"

interface CardProps {
    title: string;
    content: string;
    image: string;
    category: string;
}

export default async function Card({ title, content, image, category }: CardProps) {
    const dict = await getDictionary();
    const cardData = {
        title: title,
        description: content,
        imageUrl: image,
        category: category,
        link: "#"
    };
    const BgColorBreed: Record<string, string> = {
    affenpinscher: 'bg-[#FDE68A]',
    african: 'bg-[#BFDBFE]',
    airedale: 'bg-[#C7F9CC]',
    akita: 'bg-[#FBCFE8]',
    appenzeller: 'bg-[#DDD6FE]',
    australian: 'bg-[#FDE68A]',
    bakharwal: 'bg-[#BFDBFE]',
    basenji: 'bg-[#C7F9CC]',
    beagle: 'bg-[#FBCFE8]',
    bluetick: 'bg-[#DDD6FE]',
    borzoi: 'bg-[#FDE68A]',
    bouvier: 'bg-[#BFDBFE]',
    boxer: 'bg-[#C7F9CC]',
    brabancon: 'bg-[#FBCFE8]',
    briard: 'bg-[#DDD6FE]',
    buhund: 'bg-[#FDE68A]',
    bulldog: 'bg-[#BFDBFE]',
    bullterrier: 'bg-[#C7F9CC]',
    cattledog: 'bg-[#FBCFE8]',
    cavapoo: 'bg-[#DDD6FE]',
    chihuahua: 'bg-[#FDE68A]',
    chippiparai: 'bg-[#BFDBFE]',
    chow: 'bg-[#C7F9CC]',
    clumber: 'bg-[#FBCFE8]',
    cockapoo: 'bg-[#DDD6FE]',
    collie: 'bg-[#FDE68A]',
    coonhound: 'bg-[#BFDBFE]',
    corgi: 'bg-[#C7F9CC]',
    cotondetulear: 'bg-[#FBCFE8]',
    dachshund: 'bg-[#DDD6FE]',
    dalmatian: 'bg-[#FDE68A]',
    dane: 'bg-[#BFDBFE]',
    danishswedish: 'bg-[#C7F9CC]',
    deerhound: 'bg-[#FBCFE8]',
    dhole: 'bg-[#DDD6FE]',
    dingo: 'bg-[#FDE68A]',
    doberman: 'bg-[#BFDBFE]',
    elkhound: 'bg-[#C7F9CC]',
    entlebucher: 'bg-[#FBCFE8]',
    eskimo: 'bg-[#DDD6FE]',
    finnish: 'bg-[#FDE68A]',
    frise: 'bg-[#BFDBFE]',
    gaddi: 'bg-[#C7F9CC]',
    german: 'bg-[#FBCFE8]',
    greyhound: 'bg-[#DDD6FE]',
    groenendael: 'bg-[#FDE68A]',
    havanese: 'bg-[#BFDBFE]',
    hound: 'bg-[#C7F9CC]',
    husky: 'bg-[#FBCFE8]',
    keeshond: 'bg-[#DDD6FE]',
    kelpie: 'bg-[#FDE68A]',
    kombai: 'bg-[#BFDBFE]',
    komondor: 'bg-[#C7F9CC]',
    kuvasz: 'bg-[#FBCFE8]',
    labradoodle: 'bg-[#DDD6FE]',
    labrador: 'bg-[#FDE68A]',
    leonberg: 'bg-[#BFDBFE]',
    lhasa: 'bg-[#C7F9CC]',
    malamute: 'bg-[#FBCFE8]',
    malinois: 'bg-[#DDD6FE]',
    maltese: 'bg-[#FDE68A]',
    mastiff: 'bg-[#BFDBFE]',
    mexicanhairless: 'bg-[#C7F9CC]',
    mix: 'bg-[#FBCFE8]',
    mountain: 'bg-[#DDD6FE]',
    mudhol: 'bg-[#FDE68A]',
    newfoundland: 'bg-[#BFDBFE]',
    otterhound: 'bg-[#C7F9CC]',
    ovcharka: 'bg-[#FBCFE8]',
    papillon: 'bg-[#DDD6FE]',
    pariah: 'bg-[#FDE68A]',
    pekinese: 'bg-[#BFDBFE]',
    pembroke: 'bg-[#C7F9CC]',
    pinscher: 'bg-[#FBCFE8]',
    pitbull: 'bg-[#DDD6FE]',
    pointer: 'bg-[#FDE68A]',
    pomeranian: 'bg-[#BFDBFE]',
    poodle: 'bg-[#C7F9CC]',
    pug: 'bg-[#FBCFE8]',
    puggle: 'bg-[#DDD6FE]',
    pyrenees: 'bg-[#FDE68A]',
    rajapalayam: 'bg-[#BFDBFE]',
    redbone: 'bg-[#C7F9CC]',
    retriever: 'bg-[#FBCFE8]',
    ridgeback: 'bg-[#DDD6FE]',
    rottweiler: 'bg-[#FDE68A]',
    rough: 'bg-[#BFDBFE]',
    saluki: 'bg-[#C7F9CC]',
    samoyed: 'bg-[#FBCFE8]',
    schipperke: 'bg-[#DDD6FE]',
    schnauzer: 'bg-[#FDE68A]',
    segugio: 'bg-[#BFDBFE]',
    setter: 'bg-[#C7F9CC]',
    sharpei: 'bg-[#FBCFE8]',
    sheepdog: 'bg-[#DDD6FE]',
    shiba: 'bg-[#FDE68A]',
    shihtzu: 'bg-[#BFDBFE]',
    spaniel: 'bg-[#C7F9CC]',
    spitz: 'bg-[#FBCFE8]',
    springer: 'bg-[#DDD6FE]',
    stbernard: 'bg-[#FDE68A]',
    terrier: 'bg-[#BFDBFE]',
    tervuren: 'bg-[#C7F9CC]',
    vizsla: 'bg-[#FBCFE8]',
    waterdog: 'bg-[#DDD6FE]',
    weimaraner: 'bg-[#FDE68A]',
    whippet: 'bg-[#BFDBFE]',
    wolfhound: 'bg-[#C7F9CC]',
    }
    return (
        <div className={`${BgColorBreed[cardData.category] } max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1`}>

  <Image className="w-full h-48 object-cover" src={cardData.imageUrl} alt="Ejemplo de tarjeta" width={400} height={300} />
  

  <div className={`${BgColorBreed[cardData.category] } p-5 `}>
    <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{cardData.title}</h3>
    <Link href={`/bread/${cardData.category}`} className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
      {dict.LeerMas}
    </Link>
  </div>
</div>
    );
}