const Query = {
  directors: (parent, args, { db }) => db.directors,
  director: (parent, args, { db }) =>
    db.directors.find((d) => d.id === args.id),
  movies: (parent, args, { db }) => db.movies,
  movie: (parent, args, { db }) => db.movies.find((m) => m.id === args.id),
};
module.exports = Query;
