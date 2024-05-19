import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const contactsParse = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(contactsParse);
    console.table(contacts);
  } catch (error) {
    console.error('Error', error);
  }
};

console.log(await getAllContacts());
