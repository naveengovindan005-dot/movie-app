const movieList = document.getElementById("movie-list");
const movieDetails = document.getElementById("movie-details");

async function loadMovies() {
  const response = await fetch("/api/movies");
  const movies = await response.json();

  movies.forEach(movie => {
    const div = document.createElement("div");

    div.className = "movie";
    div.textContent = movie.title;

    div.addEventListener("click", () => {
      loadMovieDetails(movie.id);
    });

    movieList.appendChild(div);
  });
}

async function loadMovieDetails(id) {
  const response = await fetch(`/api/movies/${id}`);
  const movie = await response.json();

  movieDetails.innerHTML = `
    <img src="${movie.image}" width="250" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><strong>Year:</strong> ${movie.year}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
  `;
}
loadMovies();