export const sortByDate = (posts, sortBy) => {
  if (sortBy === "oldestFirst") {
    return [...posts].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else if (sortBy === "newestFirsr") {
    return [...posts].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } else return posts;
};
