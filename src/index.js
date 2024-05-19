// import fs from 'node:fs/promises';
// import { faker } from '@faker-js/faker';

// const createFakeContact = () => ({
//   name: faker.person.fullName(),
//   phone: faker.phone.number(),
//   email: faker.internet.email(),
//   job: faker.person.jobTitle(),
// });

// const generateContacts = async (number) => {
//   for (let i = 0; i < number; i++) {
//     const newContact = createFakeContact();
//     const newContactString = JSON.stringify(newContact);
//     try {
//       await fs.appendFile('src/text.json', newContactString);
//     } catch (err) {
//       console.error('Error', err);
//     }
//   }
// };
// await generateContacts(2);
