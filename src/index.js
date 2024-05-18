import fs from 'node:fs/promises';
import { faker } from '@faker-js/faker';

const createFakeContact = () => ({
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

const generateContacts = async (number) => {
  let contactsArray = [];

  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contactsArray.push(newContact);
  }

  try {
    const content = await fs.readFile('src/text.txt');
    // if (!content) {      const contactsArrayNew = [...contactsArray]; }
    const contentParse = JSON.parse(content);
    const contactsArrayNew = [...contentParse, ...contactsArray];

    console.log(contactsArrayNew);
    const contactsArrayNewString = JSON.stringify(contactsArrayNew);
    await fs.writeFile('src/text.txt', contactsArrayNewString);
  } catch (err) {
    console.error('Error', err);
  }
};

await generateContacts(2);
