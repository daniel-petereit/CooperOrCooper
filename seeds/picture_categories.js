
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('picture_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('picture_categories').insert([
        {id: 1, picture_id: '1', category_id: '1'},
        {id: 2, picture_id: '2', category_id: '5'},
        {id: 3, picture_id: '3', category_id: '3'},
        {id: 4, picture_id: '4', category_id: '1'},
        {id: 5, picture_id: '4', category_id: '3'},
        {id: 6, picture_id: '5', category_id: '3'},
        {id: 7, picture_id: '6', category_id: '6'},
        {id: 8, picture_id: '7', category_id: '7'},
        {id: 9, picture_id: '8', category_id: '2'},
        {id: 10, picture_id: '8', category_id: '6'},
        {id: 11, picture_id: '9', category_id: '1'},
        {id: 12, picture_id: '9', category_id: '3'},
        {id: 13, picture_id: '10', category_id: '7'},
        {id: 14, picture_id: '11', category_id: '1'},
        {id: 15, picture_id: '11', category_id: '3'},
        {id: 16, picture_id: '12', category_id: '3'},
        {id: 17, picture_id: '13', category_id: '8'},
        {id: 18, picture_id: '14', category_id: '3'},
        {id: 19, picture_id: '15', category_id: '4'},
        {id: 20, picture_id: '16', category_id: '9'},
        {id: 21, picture_id: '17', category_id: '5'},
        {id: 22, picture_id: '18', category_id: '11'},
        {id: 23, picture_id: '19', category_id: '10'},
        {id: 24, picture_id: '20', category_id: '12'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('picture_categories_id_seq', (SELECT MAX(id) FROM picture_categories));`
      );
    })
};
