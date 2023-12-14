// Get all movies that were released after 2000
// Get all movies where director begins with 'T'
// Get the first movie in the list where the name contains 'the'
// Get the total runtime of all movies in seconds
// Get the average IMDB rating of all movies in the list
// Get the newest movie
// Get movies that have a greater runtime than 90 minutes

class Movie {
  constructor(name, director, release, imdbRating, runtime) {
    this.name = name;
    this.director = director;
    this.release = release;
    this.imdbRating = imdbRating;
    this.runtime = runtime;
  }
}

const movies = [
  new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
  new Movie("The Incredibles", "Brad Bird", 2004, 8, "1h30m"),
  new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38m"),
];

function getMinutes(movie) {
  const runtimeStr = movie.runtime;
  let [hour, min] = runtimeStr.split("h"); // example ---> hour = "1", min = "30m"
  hour = Number(hour);
  min = Number(min.slice(0, min.length - 1));

  return hour * 60 + min;
}

// Get all movies that were released after 2000
console.log(movies.filter((movie) => movie.release >= 2000));

// Get all movies where director begins with 'T'
console.log(movies.filter((movie) => movie.director.charAt(0) === "T"));

// Get the first movie in the list where the name contains 'the'
console.log(
  movies.filter((movie) => movie.name.split(" ")[0].toLowerCase() === "the")
);

// Get the total runtime of all movies in seconds
console.log(
  movies.reduce((acc, val) => {
    const totalMin = getMinutes(val);

    acc += totalMin * 60;
    return acc;
  }, 0)
);

// Get the average IMDB rating of all movies in the list
console.log(
  movies.reduce((acc, val) => {
    acc += val.imdbRating;
    return acc;
  }, 0) / movies.length
);

// Get the newest movie
console.log(
  movies.reduce((acc, val) => {
    if (val.release > acc.release) {
      acc = val;
    }

    return acc;
  })
);

// Get movies that have a greater runtime than 90 minutes
console.log(
  movies.filter((movie) => {
    totalMin = getMinutes(movie);

    if (totalMin > 90) {
      return movie;
    }
  })
);
