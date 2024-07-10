import fs from 'fs';
import { AddressBook } from '../../domain/entities/AddressBook';
import { IAddressBookRepository } from '../../domain/interfaces/IAddressBookRepository';

const FILE_PATH = 'AddressBooks.json';

export class FileAddressBookRepository implements IAddressBookRepository {
  private readFromFile(): AddressBook[] {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }
    const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
    return fileContent ? JSON.parse(fileContent) : [];
  }

  private writeToFile(addressBooks: AddressBook[]): void {
    fs.writeFileSync(FILE_PATH, JSON.stringify(addressBooks, null, 2));
  }

  getAll(): AddressBook[] {
    return this.readFromFile();
  }

  getById(id: string): AddressBook | undefined {
    const addressBooks = this.readFromFile();
    return addressBooks.find(addressBook => addressBook.id === id);
  }

  add(addressBook: AddressBook): void {
    const addressBooks = this.readFromFile();
    addressBooks.push(addressBook);
    this.writeToFile(addressBooks);
  }

  update(addressBook: AddressBook): AddressBook | undefined {
    const addressBooks = this.readFromFile();
    const index = addressBooks.findIndex(ab => ab.id === addressBook.id);
    if (index !== -1) {
      addressBooks[index] = addressBook;
      this.writeToFile(addressBooks);
      return addressBooks[index];
    }
    return undefined;
  }

  delete(id: string): boolean {
    const addressBooks = this.readFromFile();
    const newAddressBooks = addressBooks.filter(addressBook => addressBook.id !== id);
    const deleted = addressBooks.length !== newAddressBooks.length;
    if (deleted) {
      this.writeToFile(newAddressBooks);
    }
    return deleted;
  }
}
