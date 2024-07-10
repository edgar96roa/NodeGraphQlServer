import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { AddressBook } from '../entities/AddressBook';

const FILE_PATH = 'AddressBooks.txt';

export const readAddressBookFromFile = (): AddressBook[] => {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
  return fileContent ? JSON.parse(fileContent) : [];
};

export const writeAddressBookToFile = (AddressBooks: AddressBook[]): void => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(AddressBooks, null, 2));
};

export const addAddressBookToFile = (name: string, address: string, email: string, phoneNumber: string): AddressBook => {
  const addresses = readAddressBookFromFile();
  const newAddress: AddressBook = {
    id: uuidv4(),
    name,
    address,
    email,
    phoneNumber
  };
  addresses.push(newAddress);
  writeAddressBookToFile(addresses);
  return newAddress;
};

export const deleteAddressBookFromFile = (id: string): boolean => {
  const AddressBooks = readAddressBookFromFile();
  const updatedAddressBooks = AddressBooks.filter(AddressBook => AddressBook.id !== id);
  writeAddressBookToFile(updatedAddressBooks);
  return AddressBooks.length !== updatedAddressBooks.length;
};

export const updateAddressBookInFile = (id: string, name?: string, address?: string, email?: string, phoneNumber?: string): AddressBook | undefined => {
  const AddressBooks = readAddressBookFromFile();
  const AddressBookIndex = AddressBooks.findIndex(AddressBook => AddressBook.id === id);
  if (AddressBookIndex === -1) return undefined;

  if (name !== undefined) AddressBooks[AddressBookIndex].name = name;
  if (address !== undefined) AddressBooks[AddressBookIndex].address = address;
  if (email !== undefined) AddressBooks[AddressBookIndex].email = email;
  if (phoneNumber !== undefined) AddressBooks[AddressBookIndex].phoneNumber = phoneNumber;

  writeAddressBookToFile(AddressBooks);
  return AddressBooks[AddressBookIndex];
};
