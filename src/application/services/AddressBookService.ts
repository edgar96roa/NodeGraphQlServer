import { AddressBook } from '../../domain/entities/AddressBook';
import { IAddressBookRepository } from '../../domain/interfaces/IAddressBookRepository';

export class AddressBookService {
  constructor(private repository: IAddressBookRepository) {}

  getAddresses(): AddressBook[] {
    return this.repository.getAll();
  }

  getAddress(id: string): AddressBook | undefined {
    return this.repository.getById(id);
  }

  createAddress(name: string, address: string, email: string, phoneNumber: string): AddressBook {
    const newAddressBook = new AddressBook(
      Math.random().toString(36).substring(2, 15), // Replace with a better ID generation method
      name,
      address,
      email,
      phoneNumber
    );
    this.repository.add(newAddressBook);
    return newAddressBook;
  }

  updateAddress(id: string, name?: string, address?: string, email?: string, phoneNumber?: string): AddressBook | undefined {
    const existingAddressBook = this.repository.getById(id);
    if (!existingAddressBook) return undefined;

    if (name !== undefined) existingAddressBook.name = name;
    if (address !== undefined) existingAddressBook.address = address;
    if (email !== undefined) existingAddressBook.email = email;
    if (phoneNumber !== undefined) existingAddressBook.phoneNumber = phoneNumber;

    return this.repository.update(existingAddressBook);
  }

  deleteAddress(id: string): boolean {
    return this.repository.delete(id);
  }
}
