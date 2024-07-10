import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { AddressBook } from '../entities/AddressBook';
import { addAddressBookToFile, readAddressBookFromFile, deleteAddressBookFromFile, updateAddressBookInFile } from '../utils/fileUtils';

@Resolver()
export class AddressBookResolver {
  @Query(() => [AddressBook])
  getAddresses(): AddressBook[] {
    return readAddressBookFromFile();
  }

  @Query(() => AddressBook, { nullable: true })
  getAddress(
    @Arg('id') id: string,
  ): AddressBook | undefined {
    const addresses = readAddressBookFromFile();
    return addresses.find(address => address.id === id);
  }

  @Mutation(() => AddressBook)
  createAddress(
    @Arg('name') name: string,
    @Arg('address') address: string,
    @Arg('email') email: string,
    @Arg('phoneNumber') phoneNumber: string,
  ): AddressBook {
    return addAddressBookToFile(name, address, email, phoneNumber);
  }

  @Mutation(() => Boolean)
  deleteAddress(
    @Arg('id') id: string,
  ): boolean {
    return deleteAddressBookFromFile(id);
  }

  @Mutation(() => AddressBook, { nullable: true })
  updateAddress(
    @Arg('id') id: string,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('address', { nullable: true }) address?: string,
    @Arg('email', { nullable: true }) email?: string,
    @Arg('phoneNumber', { nullable: true }) phoneNumber?: string,
  ): AddressBook | undefined {
    return updateAddressBookInFile(id, name, address, email, phoneNumber);
  }
}
