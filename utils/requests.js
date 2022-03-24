const API_KEY = process.env.API_KEY;

const fetching =  {
    fetchTrending: {
        title: "Trending",
        url: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchAdventure: {
        title: "Adventure",
        url: `discover/movie?api_key=${API_KEY}&with_genres=12`,
    },
    fetchComedy: {
        title: "Comedy",
        url: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchCrime: {
        title: "Crime",
        url: `discover/movie?api_key=${API_KEY}&with_genres=80`,
    },
    fetchDocumentary: {
        title: "Documentary",
        url: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
    fetchDrama: {
        title: "Drama",
        url: `discover/movie?api_key=${API_KEY}&with_genres=18`,
    },
    fetchFamily: {
        title: "Family",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10751`,
    },
    fetchHistory: {
        title: "History",
        url: `discover/movie?api_key=${API_KEY}&with_genres=36`,
    },
    fetchHorror: {
        title: "Horror",
        url: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchMusic: {
        title: "Music",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10402`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchRomance: {
        title: "Romance",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchTvMovie: {
        title: "Tv Movie",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    fetchThriller: {
        title: "Thriller",
        url: `discover/movie?api_key=${API_KEY}&with_genres=53`,
    },
    fetchWar: {
        title: "War",
        url: `discover/movie?api_key=${API_KEY}&with_genres=10752`,
    },
    fetchWestern: {
        title: "Western",
        url: `discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
   
}

export default fetching