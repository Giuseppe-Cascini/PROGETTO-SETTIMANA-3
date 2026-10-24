const contenitoreFilm = document.querySelector('#contenitoreFilm');
const formFilm = document.querySelector('#formFilm');
const ricerca = document.querySelector('#ricerca');
const btnTemaScuro = document.querySelector('#btnTemaScuro')

let films = [
    {
        id: 1,
        titolo: 'Quo vado?',
        attore: 'Checco Zalone',
        regista: 'Gennaro Nunziante',
        anno: 2016,
        valutazione: 5,
        visto: true,
    },
    {
        id: 2,
        titolo: 'Al bar dello sport',
        attore: 'Lino Banfi',
        regista: 'Francesco Massaro',
        anno: 1983,
        valutazione: 4.6,
        visto: true,
    },
    {
        id: 3,
        titolo: 'Il padrino',
        attore: 'Marlon Brando',
        regista: 'Francis Ford Coppola',
        anno: 1972,
        valutazione: 4.8,
        visto: true,

    },
    {
        id: 4,
        titolo: 'Scarface',
        attore: 'Al Pacino',
        regista: 'Brian De Palma',
        anno: 1983,
        valutazione: 4.1,
        visto: false,
    },
    {
        id: 5,
        titolo: 'Interstellar',
        attore: 'Matthew McConaughey',
        regista: 'Christopher Nolan',
        anno: 2014,
        valutazione: 4.3,
        visto: false,
    },
]

//devo inserire la funzione

function render() {
    contenitoreFilm.textContent = '';

    films.forEach((film) => {
        const infoFilm = document.createElement('li');
        contenitoreFilm.appendChild(infoFilm);
        infoFilm.textContent = `${film.titolo}, ${film.attore}, ${film.regista}, ${film.anno}, ${film.valutazione}, ${film.visto ? 'Visto' : 'Da vedere'}`;

        const btnElimina = document.createElement('button');
        btnElimina.textContent = 'Elimina'
        infoFilm.appendChild(btnElimina);

        btnElimina.addEventListener('click', (e) => {
            films = films.filter((elemento) => {
                return elemento.id !== film.id;

            });
            render();
        })
        const btnModifica = document.createElement('button');
        btnModifica.textContent = 'Visto / Da vedere'
        infoFilm.appendChild(btnModifica);

        btnModifica.addEventListener('click', (e) => {
                if(film.visto === true) {
                    film.visto = false;
                } else {
                    film.visto = true;
                }
            render(); 
            });
            
        })
    }
render();
    let prossimoId = 6
    formFilm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titolo = document.querySelector('#titolo').value;
        const attore = document.querySelector('#attore').value;
        const regista = document.querySelector('#regista').value;
        const anno = Number(document.querySelector('#anno').value);
        const valutazione = Number(document.querySelector('#valutazione').value);
        const visto = document.querySelector('#visto').checked;

        const nuovoFilm = {
            id: prossimoId++,
            titolo: titolo,
            attore: attore,
            regista: regista,
            anno: anno,
            valutazione: valutazione,
            visto: visto,
        };
        films.push(nuovoFilm);
        render();
    });

 
btnTemaScuro.addEventListener('click', (e) => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')) {
        btnTemaScuro.textContent = 'Tema chiaro'
    } else {
        btnTemaScuro.textContent = 'Tema scuro'
    }
})