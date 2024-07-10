import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { AddressBook } from '../../domain/entities/AddressBook';
import { AddressBookService } from '../../application/services/AddressBookService';
import { FileAddressBookRepository } from '../../infrastructure/repositories/FileAddressBookRepository';

const addressBookService = new AddressBookService(new FileAddressBookRepository());

@Resolver()
export class AddressBookResolver {
  @Query(() => [AddressBook])
  getAddresses(): AddressBook[] {
    return addressBookService.getAddresses();
  }

  @Query(() => AddressBook, { nullable: true })
  getAddress(@Arg('id') id: string): AddressBook | undefined {
    return addressBookService.getAddress(id);
  }

  @Mutation(() => AddressBook)
  createAddress(
    @Arg('name') name: string,
    @Arg('address') address: string,
    @Arg('email') email: string,
    @Arg('phoneNumber') phoneNumber: string
  ): AddressBook {
    return addressBookService.createAddress(name, address, email, phoneNumber);
  }

  @Mutation(() => Boolean)
  deleteAddress(@Arg('id') id: string): boolean {
    return addressBookService.deleteAddress(id);
  }

  @Mutation(() => AddressBook, { nullable: true })
  updateAddress(
    @Arg('id') id: string,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('address', { nullable: true }) address?: string,
    @Arg('email', { nullable: true }) email?: string,
    @Arg('phoneNumber', { nullable: true }) phoneNumber?: string
  ): AddressBook | undefined {
    return addressBookService.updateAddress(id, name, address, email, phoneNumber);
  }
}