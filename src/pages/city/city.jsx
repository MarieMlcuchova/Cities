export const City = ({ name, population, area, district, image }) => {
    return (
            <li className="city-item">
                <div className="city-container">
                    <h3>{name}</h3>
                        <p>Počet obyvatel: {population.toLocaleString()}</p>
                        <p>Rozloha: {area} km²</p>
                        <p>Okres: {district}</p>
                </div>
                <div className="city-container">
                    <img className="city-photo" src={image} alt="Photo of the city" />
                </div>    
            </li>
    ) 
}

