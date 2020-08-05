module.exports = {
  createMovie: (parent, args, { db }) => {
    const isDirectorExists = db.directors.some(
      (d) => d.id === args.data.directorId
    );
    if (!isDirectorExists) throw new Error("director is not exists");
    const movie = {
      id: Math.floor(Math.random() * 10).toString(),
      ...args.data,
    };
    db.movies.push(movie);
    return movie;
  },
};
