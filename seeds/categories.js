
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category_type: 'Hilarious Anderson'},
        {id: 2, category_type: 'Sad Anderson'},
        {id: 3, category_type: 'Goofy Anderson'},
        {id: 4, category_type: 'Lame Anderson'},
        {id: 5, category_type: 'Happy Anderson'},
        {id: 6, category_type: 'Stoic Anderson'},
        {id: 7, category_type: 'Handsome Anderson'},
        {id: 8, category_type: 'Fascinating Anderson'},
        {id: 9, category_type: 'Buff Anderson'},
        {id: 10, category_type: 'Totally Not Susceptible To Kryptonite Anderson'},
        {id: 11, category_type: 'Stoned Anderson'},
        {id: 12, category_type: 'Happy Birthday Mr. President Anderson'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));`
      );
    });
};
