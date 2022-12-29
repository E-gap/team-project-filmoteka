const URL = 'https://api.themoviedb.org/3';
const KEY = 'cf961b1b89f4c4a28558be2b04fdd59a';

// FETCH FOR MOVIE OF THE DAY
async function fetchFilmsAPI(page=1) {
    return await
        fetch(`${URL}/trending/movie/day?api_key=${KEY}&page=${page}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then((data) => {
            return data.results;
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
//FUNCTION CALL
//fetchFilmsAPI();

// FETCH FOR GENRE
async function fetchGenresAPI() {
    return await
        fetch(`${URL}/genre/movie/list?api_key=${KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then((data) => {
            return data.genres;
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
//FUNCTION CALL
//fetchGenresAPI();
//EXPORT TWO FUNCTIONS
export { fetchFilmsAPI, fetchGenresAPI };