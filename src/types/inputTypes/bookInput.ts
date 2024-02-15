import { Field, InputType } from "type-graphql";
import { IsDate, IsPositive, IsString, Length } from "class-validator";

@InputType()
export class BookInput {
  @Field()
  @IsString()
  @Length(2,4)
  title: string;

  @Field()
  @IsDate()
  realeasedDate: Date;

  @Field()
  @IsPositive()
  authorId: number;
}
