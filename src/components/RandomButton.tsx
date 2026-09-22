import Link from 'next/link';
import dict from '../app/[lang]/dictionaries/en.json';

export default async function RandomButton() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json()); 
    const cardApiData = response;
    const number = Math.floor(Math.random() * Object.keys(cardApiData.message).length);
    return (
        <Link href={`/bread/${Object.keys(cardApiData.message)[number]}`} className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#FF6B35] transition-colors duration-200">
            {dict.Random}
        </Link>
    );
}