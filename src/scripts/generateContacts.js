import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  try {
    const contactsParse = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(contactsParse);
    for (let i = 0; i < number; i += 1) {
      contacts.push(createFakeContact());
    }
    const contactsString = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, contactsString);
  } catch (error) {
    console.error('Error', error);
  }
};

await generateContacts(5);
