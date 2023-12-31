/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  return employeeArr.map((employee) => employee.quote);
};

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  return employeeArr.filter((employee) => employee.isManagement);
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  return Object.keys(object).length;
};

/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr) => {
  return shoppingBasketArr.reduce((mostExpensiveItem, item) => {
    if (item.price > mostExpensiveItem.price) {
      mostExpensiveItem = item;
    }

    return mostExpensiveItem;
  });
};

/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  // return shoppingBasketArr.map((item) => {
  //   let updatedItem = { ...item };
  //   updatedItem["totalPrice"] = item.price * item.quantity;
  //   return updatedItem;
  // });

  return shoppingBasketArr.map((item) => {
    return { ...item, totalPrice: item.price * item.quantity };
  });
};

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  return shoppingBasketArr.reduce(
    (total, item) => (total += item.totalPrice),
    0
  );
};

/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  return mealsArr.map((meal) => {
    let updatedMeal = { ...meal };

    delete meal["timeStamp"];
    delete meal["userCreated"];

    return updatedMeal;
  });
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  // return mealsArr.map((meal) => {
  //   let updatedMeal = { ...meal };

  //   updatedMeal.hasOwnProperty("isVegetarian")
  //     ? updatedMeal
  //     : (updatedMeal["isVegetarian"] = false);
  //   updatedMeal.hasOwnProperty("timeToCook")
  //     ? updatedMeal
  //     : (updatedMeal["timeToCook"] = 15);

  //   return updatedMeal;
  // });

  // return mealsArr.map((meal) => {
  //   const { isVegetarian = false, timeToCook = 15 } = meal;
  //   return { ...meal, isVegetarian, timeToCook };
  // });

  return mealsArr.map((meal) => {
    return {
      ...meal,
      isVegetarian: meal.isVegetarian || false,
      timeToCook: meal.timeToCook || 15,
    };
  });
};

/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {
  return cocktailData.map((data) => {
    let cocktail = {
      id: data.idDrink,
      drink: data.strDrink,
      category: data.strCategory,
      alcoholic: data.strAlcoholic,
      instructions: data.strInstructions,
      ingredients: [],
    };

    for (let i = 1; i < 7; i++) {
      if (data[`strIngredient${i}`]) {
        cocktail.ingredients.push(data[`strIngredient${i}`]);
      }
    }

    return cocktail;
  });

  // return cocktailData.map((data) => {
  //   const {
  //     idDrink: id,
  //     strDrink: drink,
  //     strCategory: category,
  //     strAlcoholic: alcoholic,
  //     strInstructions: instructions,
  //     ...rest
  //   } = data;

  //   const ingredients = Object.values(rest).filter((value) => value !== null);

  //   return {
  //     id,
  //     drink,
  //     category,
  //     alcoholic,
  //     instructions,
  //     ingredients,
  //   };
  // });
};
