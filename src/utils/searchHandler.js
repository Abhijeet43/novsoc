export const searchHandler = (users, search) => {
  if (search) {
    return users.filter(
      (user) =>
        user.username.toLowerCase().includes(search) ||
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search)
    );
  }
  return users;
};
