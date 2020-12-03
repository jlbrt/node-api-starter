import Knex from 'knex';

export const up = async (dbConnection: Knex): Promise<void> => {
  await dbConnection.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
};

export const down = async (dbConnection: Knex): Promise<void> => {
  await dbConnection.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
};
