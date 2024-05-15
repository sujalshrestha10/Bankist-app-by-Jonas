// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age ,and stored the data into an array (one array for each) For now ,they are just interested in knowing whether a dog is an adult or a puppy . A dog is an adult if it is at least 3 years old , and its a puppy if its less than 3 year old.

//TEST DATA 1: jULIAS DATA [3,2,1,7,17],Kates data [9,2,5,3,1]

const doggy = function (dogy_julia, dogy_kate) {
  const resultd_dog = dogy_julia.slice();

  // resultd_dog.splice(1, 2);
  // resultd_dog.splice(-2);
  const maindog = resultd_dog.concat(dogy_kate);
  maindog.forEach(function (dogvalue, i) {
    if (dogvalue >= 3) {
      console.log(`this is ${dogvalue} years old adult dog`);
    } else {
      console.log(`this is a puppy with age of ${dogvalue}`);
    }
  });
};
doggy([3, 2, 1, 6, 17], [3, 9, 2, 5, 3, 1]);
doggy([1, 2, 1, 6, 7], [2, 6, 3, 2, 9, 1]);

//Coding challange 2
/*Lets go back to Julia and Kates study about dogs. This time , they want to convert dog ages to human ages and calculate the average age of the Dogs in their study.*/

/*Create a function 'calcAverageHumanAge' , which accepts an arrays of dog's ages('ages'),and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old , calculate the dog's age in,humanAge=2*dogAge.If the dog is >2 years old, humanAge =16+dogAge*4.

2. Remove any ages less than 18   human years old (which is the same as keeping dogs that are at least 18 years old).
 
3. Calculate the average human age of  all adult dogs. (you should already know from other challanges how we calculate averages)
4.Run the function for the both test datasets
TEST DATA 1:[5,2,4,1,15,8,3]
TEST DATA 2:[16,6,10,5,6,1,4]

*/

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const adultDogs = humanAge.filter(function (someAge) {
    return someAge >= 18;
  });

  console.log(adultDogs); // here we got the adult dogs whose human age are greater than 18

  const aver_dog =
    adultDogs.reduce((acc, curr) => acc + curr, 0) / adultDogs.length;
  return aver_dog;
};
const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(average1, average2);
