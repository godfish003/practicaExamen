const API_ENDPOINT_NEWS = "https://hn.algolia.com/api/v1";
const API_ENDPOINT_FAVORITES = "http://localhost:3001/favorites";

const getStories = (searchTerm, page = 0) =>
    fetch(`${API_ENDPOINT_NEWS}/search?query=${searchTerm}&page=${page}`)
        .then((response) => response.json())
        .then((result) => ({
            results: result.hits,
            totalPages: result.nbPages,
            actualPage: result.page,
        }));

const getStory = (objectID) =>
    fetch(`${API_ENDPOINT_NEWS}/search?tags=story_${objectID}`, { mode: "cors" })
        .then((response) => response.json())
        .then((result) => result.hits[0]);

const getFavorites = (userid = 23) =>
    fetch(`${API_ENDPOINT_FAVORITES}?userid=${userid}`).then((response) =>
        response.json()
    );

const removeFavorite = (favoriteId) =>
    fetch(`${API_ENDPOINT_FAVORITES}/${favoriteId}`, {
        method: "DELETE",
    }).then((response) => response.json());

const addFavorite = (objectID, userid = 23) =>
    fetch(`${API_ENDPOINT_FAVORITES}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            objectID,
            userid,
        }),
    }).then((response) => response.json());

export { getStories, getStory, getFavorites, removeFavorite, addFavorite };
