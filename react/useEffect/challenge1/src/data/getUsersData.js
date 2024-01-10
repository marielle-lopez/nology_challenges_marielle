export const fetchUsersData = async (numberOfUsers) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${numberOfUsers}`
  );
  const data = await response.json();

  const usersData = data.results.map((result) => {
    return {
      name: `${result.name.first} ${result.name.last}`,
      age: result.dob.age,
      location: `${result.location.city}, ${result.location.country}`,
      imageURL: result.picture.thumbnail,
    };
  });
  return usersData;
};
