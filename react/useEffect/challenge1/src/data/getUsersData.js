export const fetchUsersData = async (numberOfUsers) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=${numberOfUsers}`
  );
  const data = await response.json();

  console.log(data);

  const usersData = data.results.map((result) => {
    return {
      id: result.id.value,
      name: `${result.name.first} ${result.name.last}`,
      age: result.dob.age,
      location: `${result.location.city}, ${result.location.country}`,
    };
  });
  return usersData;
};
