import {
    URL_OBJ
} from '../data/urls.js';

async function gerCurrentLocation() {
    const response = await fetch(URL_OBJ.CURRENT_LOCATION);
    const data = await response.json();

    return `${data.city}`;
}
