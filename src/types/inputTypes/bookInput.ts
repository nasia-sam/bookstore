import { Field, InputType } from "type-graphql";
import { IsDate, IsString, Length } from "class-validator";

@InputType()
export class BookInput {
  @Field()
  @IsString()
  @Length(2, 60)
  title: string;

  @Field()
  @IsDate()
  releasedAt: Date;

  @Field()
  author: string;
}
