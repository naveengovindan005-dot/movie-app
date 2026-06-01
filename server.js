const express = require("express");
const cors = require("cors");
const movies = require("./data/movies");

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(
    m => m.id === parseInt(req.params.id)
  );

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found"
    });
  }

  res.json(movie);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});