import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from './city/city';
import { cities } from '../cz-cities';



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h3 class="city-title">Města v ČR</h3>
    <ul className="city-list"> 
      {cities.map((city) => (
        <City key={city.name} name={city.name} population={city.population} area={city.area} district={city.district} image={city.photo}/>
      ))}
    </ul>
  </div>
);