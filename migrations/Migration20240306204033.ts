import { Migration } from '@mikro-orm/migrations';

export class Migration20240306204033 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `author` (`id` varchar(255) not null, `name` varchar(255) not null, `publisher` varchar(255) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `book` (`id` varchar(255) not null, `title` varchar(255) not null, `released_at` datetime not null, `author_id` varchar(255) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `book` add index `book_author_id_index`(`author_id`);');

    this.addSql('alter table `book` add constraint `book_author_id_foreign` foreign key (`author_id`) references `author` (`id`) on update cascade;');
  }

}
