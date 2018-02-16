let knex = require('../../db')

function getAll() {
  return knex('pictures')
}

function getPictureInfoById(id) {
  // TODO: Add Vote totals
  let queryResultPromise = knex.select('*')
    .from('pictures')
    .leftJoin('picture_categories', 'pictures.id', 'picture_id')
    .leftJoin('categories', 'categories.id', 'category_id')
    .where('pictures.id', id).then((queryResult) => {
      let pic = {id: id,
        fileName: null,
        categories: [],
        votes: 0};
      pic.fileName = queryResult[0].file_name
      queryResult.forEach(row => { row.category_type ? pic.categories.push(row.category_type) : null })
      return pic
    }).then((pic) => {
       return knex('votes').count('id')
        .where('picture_id', id).first()
        .then((queryResult) => {
          pic.votes = queryResult.count;
          return pic
        })
    })

  return queryResultPromise
}

function castVote(id) {
  let castVotePromise = knex('votes').insert({picture_id: Number(id)})
  return castVotePromise;
}

module.exports = {
  getAll,
  getPictureInfoById,
  castVote
}


//created a getAll pictures function that gets passed into the controller from db
