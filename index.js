const personagensContador = document.getElementById("personagens");
const luasContador = document.getElementById("luas");
const planetasContador = document.getElementById("planetas");
const navesContador = document.getElementById("naves");

preencherContadores();
preeecherTabela();

function preencherContadores() {

    Promise.all([
        swapiGet('people/'), 
        swapiGet('vehicles/'),
        swapiGet('planets/'),
        swapiGet('starships/')
    ]).then(function (results) {
        personagensContador.innerHTML = results[0].data.count;
        luasContador.innerHTML = results[1].data.count;
        planetasContador.innerHTML = results[2].data.count;
        navesContador.innerHTML = results[3].data.count;

    });
}

async function preeecherTabela(){
    const response = await swapiGet('films/')
    console.log(response);
}

function swapiGet(params) {
    return axios.get(`https://swapi.dev/api/${params}`);
}


