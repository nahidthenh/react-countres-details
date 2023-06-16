import { useLoaderData } from "react-router-dom"



function Home() {

    const countres = useLoaderData()
    console.log(countres);
    return (
        <div className="margin-75">
            Total Country: {countres.length}

            {
                countres.map(country => (<li key={country.id}>{country.name.common}</li>))
            }
        </div>
    )
}

export default Home