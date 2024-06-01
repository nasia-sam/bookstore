import { Mutation, Query, Resolver } from "type-graphql";
import { em } from "../utils/entity-manager";
import { User } from "../types/entities/User";
import { Rental } from "../types/entities/Rental";
import { Book } from "../types/entities/Book";

@Resolver(Rental)
export class RentalResolver {
  @Query(() => [Rental])
  async getAllRentals(): Promise<Rental[]> {
    return await em.findAll(Rental, { populate: ["user", "book"] });
  }

  @Mutation(() => [Rental])
  async seedRentals(): Promise<Rental[]> {
    const user = em.create(User, {
      fullname: "John Doe",
      email: "john@email.com",
    });
    em.persist(user);

    const book = await em.find(Book, {});
    console.log("book", book);

    const rentals = [
      // book #1
      {
        user: user,
        book: book[0],
        review: 3,
        from: new Date("2024-03-01T10:49:20.289Z"),
        to: new Date("2024-03-11T10:49:20.289Z"),
      },
      {
        user: user,
        book: book[0],
        review: 2,
        from: new Date("2024-03-21T10:49:20.289Z"),
        to: new Date("2024-03-27T10:49:20.289Z"),
      },
      {
        user: user,
        book: book[0],
        review: 3,
        from: new Date("2024-03-01T10:49:20.289Z"),
        to: new Date("2024-03-11T10:49:20.289Z"),
      },
      {
        user: user,
        book: book[0],
        review: 5,
        from: new Date("2024-04-13T10:49:20.289Z"),
        to: new Date("2024-04-20T10:49:20.289Z"),
      },
      // book #2
      {
        user: user,
        book: book[1],
        from: new Date("2024-06-01T10:49:20.289Z"),
        to: null,
      },
      {
        user: user,
        book: book[1],
        review: 5,
        from: new Date("2024-05-13T10:49:20.289Z"),
        to: new Date("2024-05-20T10:49:20.289Z"),
      },
    ];

    // rentals.forEach((rental) => em.create(Rental, rental));
    em.create(Rental, rentals);

    await em.flush();

    return await em.findAll(Rental);
  }
}
