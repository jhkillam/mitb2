
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {id: 1, email: 'admin@admin.com', password: 'password'},
        {id: 2, email: 'jhkillam@gmail.com', password: 'password'},
      ]);
    });
};
