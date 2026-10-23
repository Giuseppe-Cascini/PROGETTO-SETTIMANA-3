const contenitoreFilm = document.querySelector('#contenitoreFilm');

const films = [
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
        visto: true,
    },
    {
        id: 5,
        titolo: 'Interstellar',
        attore: 'Matthew McConaughey',
        regista: 'Christopher Nolan',
        anno: 2014,
        valutazione: 4.3,
        visto: true,
    },
]

//devo inserire la funzione

   function render() {
    contenitoreFilm.textContent = '';

    films.forEach((film)=> {
        const infoFilm = document.createElement('li');
        contenitoreFilm.appendChild(infoFilm);
        infoFilm.textContent = `${film.titolo}, ${film.attore}, ${film.regista}, ${film.anno}, ${film.valutazione}, ${film.visto}`;

   })
   }
      render();