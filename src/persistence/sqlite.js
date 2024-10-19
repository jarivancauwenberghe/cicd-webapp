import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import generateFakeData from './generateFakeData.js';
import Boom from '@hapi/boom';

let db;

export async function initialize() {
  db = await open({
    filename: ':memory:',
    driver: sqlite3.Database,
  });

  await db.exec('CREATE TABLE IF NOT EXISTS animal(id INTEGER PRIMARY KEY, name TEXT)');

  const count = await db.get('SELECT COUNT(*) AS count FROM animal');

  if (count.count === 0) {
    const data = generateFakeData();
    await db.exec(`INSERT INTO animal(name) VALUES${data.map((animal) => `('${animal.name}')`).join(',')}`);
    console.log('Fake data generated');
  }

  console.log('SQLite database initialized');
}

export async function close() {
  await db.close();
  db = null;
}

export async function getAnimals() {
  return await db.all('SELECT * FROM animal');
}

export async function getAnimal(id) {
  const animal = await db.get('SELECT * FROM animal WHERE id = ?', [id]);
  if (!animal) {
    throw Boom.notFound('Animal not found');
  }
  return animal;
}