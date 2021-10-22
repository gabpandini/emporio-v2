import { useEffect, useState } from "react";

interface Beer {
    id: number,
    name: string
}

export function List() {
    const [beers, setBeers] = useState<Beer[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/beers').then((response) => response.json()).then((data) => setBeers(data));
    }, []);

    return (
        <ul className="Beer-List">
            {
                beers.map((beer) => <li key={beer.id}>{beer.name}</li>)
            }
        </ul>

    );
}