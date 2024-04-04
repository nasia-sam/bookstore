import { EntityManager, MikroORM } from "@mikro-orm/core";

export let em: EntityManager;
export const initORMConnection = async () => {
  const connection = await MikroORM.init();
  em = connection.em.fork();
};
