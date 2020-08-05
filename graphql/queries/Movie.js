const Movie = {
  director: (parent, args, { db }) =>
    db.directors.find((d) => d.id === parent.directorId),
};
module.exports = Movie;
