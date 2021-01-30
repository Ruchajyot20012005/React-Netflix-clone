const API_KEY = "034e350f562439b202506fd0f9db1e2a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
// 034e350f562439b202506fd0f9db1e2a

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRlMzUwZjU2MjQzOWIyMDI1MDZmZDBmOWRiMWUyYSIsInN1YiI6IjYwMGE3NzJkZGQ4M2ZhMDAzZjhlZjc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJ8YKNPUu7dTYkHZpGEadUPx39fkl9lzHv-M2vl2nWk