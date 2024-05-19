import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const contactsParse = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(contactsParse);
    contacts.push(createFakeContact());
    const contactsString = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, contactsString);
  } catch (error) {
    console.error('Error', error);
  }
};

await addOneContact();
