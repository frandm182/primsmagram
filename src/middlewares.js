export const isAuthenticated = request => {
  if (!request.user) {
    throw Error ('Youu need to log in');
  }
  return;
}