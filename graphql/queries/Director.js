const Director = {
  movies: (parent, args, { db }) =>
    db.movies.filter((m) => m.directorId === parent.id),
};

module.exports = Director;
