import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const contactsParse = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(contactsParse);

    const contactsRandomRemoved = contacts.reduce((acc, product) => {
      if (Math.random() >= 0.5) {
        acc.push(product);
      }
      return acc;
    }, []);
    await fs.writeFile(PATH_DB, JSON.stringify(contactsRandomRemoved, null, 2));
  } catch (error) {
    console.error('Error', error);
  }
};

await thanos();
