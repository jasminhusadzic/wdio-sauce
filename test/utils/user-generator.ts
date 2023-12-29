import { faker } from "@faker-js/faker";

export const generateUser = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zip: faker.location.zipCode()
  };
};
