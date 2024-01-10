export const fetchUsersData = async (numberOfUsers) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${numberOfUsers}`
  );
  const data = await response.json();
  return data.results;
};
