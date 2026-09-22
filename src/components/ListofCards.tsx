import Card from "@/components/Card";

export default async function ListofCards() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json()); 
    
    const cardApiData = response;
    return (
        <ul className="mt-4">
            <div className="grid grid-cols-4 gap-4 border-b border-gray-200">

                {await Promise.all(Object.keys(cardApiData.message).slice(0, 15).map(async (breed, index) => {
                    const imageUrl = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(res => res.json()).then(data => data.message);

                    return (
                        <li key={index}><Card title={breed} content="Contenido del card" image={imageUrl} category={breed} /></li>
                    );
                }))}


            </div>
        </ul>
    );
}
