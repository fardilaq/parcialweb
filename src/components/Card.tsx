import Image from "next/image";
import Link from "next/link";
import { getDictionary} from "@/app/[lang]/dictionaries"

interface CardProps {
    title: string;
    content: string;
}

export default async function Card({ title, content }: CardProps) {
    const dict = await getDictionary();
    const cardData = {
        title: title,
        description: content,
        imageUrl: "https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/dibujar-sobre-imagen-r.png",
        link: "#"
    };
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">

  <Image className="w-full h-48 object-cover" src={cardData.imageUrl} alt="Ejemplo de tarjeta" width={400} height={300} />
  

  <div className="p-5">
    <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{cardData.title}</h3>
    <p className="mb-4 text-sm text-gray-600 leading-relaxed">{cardData.description}</p>
    <Link href={cardData.link} className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
      {dict.LeerMas}
    </Link>
  </div>
</div>
    );
}