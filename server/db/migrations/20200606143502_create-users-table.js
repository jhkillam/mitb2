exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE Users(
    id SERIAL PRIMARY KEY NOT NULL,
    email TEXT,
    password TEXT,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE Users`
  return knex.raw(dropQuery)
}