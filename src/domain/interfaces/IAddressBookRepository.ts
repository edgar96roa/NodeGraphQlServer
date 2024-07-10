import { AddressBook } from '../entities/AddressBook';

export interface IAddressBookRepository {
  getAll(): AddressBook[];
  getById(id: string): AddressBook | undefined;
  add(addressBook: AddressBook): void;
  update(addressBook: AddressBook): AddressBook | undefined;
  delete(id: string): boolean;
}
