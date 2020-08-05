module.exports = {
  createDirector: (parent, args, { db }) => {
    const director = {
      id: Math.floor(Math.random() * 10).toString(),
      ...args.data,
    };
    db.directors.push(director);
    return director;
  },
};
