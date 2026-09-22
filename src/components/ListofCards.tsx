import Card from "@/components/Card";

export default async function ListofCards() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json()); 
    const cardApiData = response;
    return (
        <ul className="mt-4">
            <div className="grid grid-cols-3 gap-4">
                <li><Card title={cardApiData.results[0].name} content="Contenido del card" /></li>
                <li><Card title={cardApiData.results[1].name} content="Contenido del card" /></li>
                <li><Card title={cardApiData.results[2].name} content="Contenido del card" /></li>
                <li><Card title={cardApiData.results[3].name} content="Contenido del card" /></li>
                <li><Card title={cardApiData.results[4].name} content="Contenido del card" /></li>
                <li><Card title={cardApiData.results[5].name}    content="Contenido del card" /></li>
            </div>
        </ul>
    );
}
