import knex from 'knex';
import generateFakeData from './generateFakeData.js';
import Boom from '@hapi/boom';

const db = knex({
  client: 'mysql2',
  connection: process.env.MYSQL_URL,
});

export async function initialize() {
  await db.schema.createTableIfNotExists('animal', (table) => {
    table.increments('id');
    table.string('name');
  });

  const count = await db('animal').count();
  if (count[0]['count(*)'] === 0) {
    const data = generateFakeData();
    await db('animal').insert(data);
    console.log('Fake data generated');
  }

  console.log('MySQL database initialized');
}

export async function close() {
  await db.destroy();
}

export async function getAnimals() {
  return await db('animal').select();
}

export async function getAnimal(id) {
  const animal = await db('animal').where({ id }).first();
  if (!animal) {
    throw Boom.notFound('Animal not found');
  }
  return animal;
}
