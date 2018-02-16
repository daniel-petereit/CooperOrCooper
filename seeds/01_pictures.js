
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex('pictures').insert([
        {id: 1, file_name: 'Anderson1.jpg'},
        {id: 2, file_name: 'Anderson2.jpg'},
        {id: 3, file_name: 'Anderson3.jpg'},
        {id: 4, file_name: 'Anderson4.jpg'},
        {id: 5, file_name: 'Anderson5.jpg'},
        {id: 6, file_name: 'Anderson6.jpg'},
        {id: 7, file_name: 'Anderson7.jpg'},
        {id: 8, file_name: 'Anderson8.jpg'},
        {id: 9, file_name: 'Anderson9.jpg'},
        {id: 10, file_name: 'Anderson10.jpg'},
        {id: 11, file_name: 'Anderson11.jpg'},
        {id: 12, file_name: 'Anderson12.jpg'},
        {id: 13, file_name: 'Anderson13.jpg'},
        {id: 14, file_name: 'Anderson14.jpg'},
        {id: 15, file_name: 'Anderson15.jpg'},
        {id: 16, file_name: 'Anderson16.jpg'},
        {id: 17, file_name: 'Anderson17.jpg'},
        {id: 18, file_name: 'Rushmore.jpg'},
        {id: 19, file_name: 'Statue1.jpg'},
        {id: 20, file_name: 'Statue2.jpg'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('pictures_id_seq', (SELECT MAX(id) FROM pictures));`
      );
    })
};
