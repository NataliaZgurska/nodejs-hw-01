import fs from 'node:fs/promises';
// import { createFakeContact } from './utils/createFakeContact';
// import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import { createFakeContact } from './utils/createFakeContact';

// export const createFakeContact = () => ({
//   name: faker.person.fullName(),
//   phone: faker.phone.number(),
//   email: faker.internet.email(),
//   job: faker.person.jobTitle(),
// });

const generateContacts = async () => {
  const newContact = createFakeContact();
  const newContactString = JSON.stringify(newContact);
  try {
    await fs.writeFile('src/text.txt', newContactString);
    console.log(newContactString);
  } catch (err) {
    console.error('Error', err);
  }
};

await generateContacts();
