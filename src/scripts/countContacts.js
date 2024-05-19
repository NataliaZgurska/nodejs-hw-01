import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {};
try {
  const contactsParse = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(contactsParse);
  console.log(`Array length is ${contacts.length}`);
} catch (err) {
  console.error('Error', err);
}
// console.log(await countContacts());
await countContacts();
