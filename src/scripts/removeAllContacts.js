import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {};
try {
  await fs.writeFile(PATH_DB, '[]');
} catch (err) {
  console.error('Error', err);
}
await removeAllContacts();
