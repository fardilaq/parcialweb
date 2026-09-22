
export default async function BreadDetails({ params }: { params: { bread: string } }) {
    const response = await fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json()); 
    
    const cardApiData = response;
    return (
        <div>
            <h1 className="text-2xl font-bold bg-amber-950">Bread: {params.bread}</h1>
            <p className="text-lg text-black">Details about the {params.bread} will go here.</p>
            <p className="text-lg text-black">Number of sub-breeds: {Object.keys(cardApiData.message[params.bread] || []).length}</p>
            <p className="text-lg text-black">Sub-breeds: { (cardApiData.message[params.bread] || []).join(', ') }</p>
            <p className="text-lg text-black">Random sub-breed: { (cardApiData.message[params.bread] || [])[Math.floor(Math.random() * (cardApiData.message[params.bread] || []).length)] || 'None' }</p>
        </div>
    );
}