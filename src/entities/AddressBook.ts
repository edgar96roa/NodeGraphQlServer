import { Field, ObjectType, ID } from 'type-graphql';
import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

@ObjectType()
export class AddressBook {
  @Field(() => ID)
  id: string;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  address: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsPhoneNumber(undefined)
  phoneNumber: string;

  constructor(id: string, name: string, address: string, email: string, phoneNumber: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
