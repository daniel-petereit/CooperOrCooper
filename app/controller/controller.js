const imgDir = 'public/images'
let fs = require('fs')
let pictures = require('../model/pictures.js')

let controller = {};


controller.getTwoPictures = function(req, res, next) {

  pictures.getAll().then(images => {

    let pic1 = Math.floor((Math.random() * (images.length)) + 1);
    let pic2 = Math.floor((Math.random() * (images.length)) + 1);
    while (pic1 == pic2){
      pic2 = Math.floor((Math.random() * (images.length)) + 1);
    }

    let imageArray = []

    pictures.getPictureInfoById(pic1).then(image => {
      imageArray.push(image)
      return pictures.getPictureInfoById(pic2)
    }).then(image2 => {
      imageArray.push(image2)
      res.send({ message: imageArray })
    })
  }).catch(err => {
    console.log(err);
  })
}

controller.castVote = function(req, res, next) {
  let id = req.params.id
  if(id < 0 || id > 20) {
      // This should be handled if the database returns null for the id that is passed in.
      res.status(404).json({error: "Can not cast vote for id: " + id})
  } else {
    pictures.castVote(id).then(() => {
      console.log("AFTER VOTE")
      res.status(200).json({data: "Way to go... You cast your vote!"})
    })
  }
}



module.exports = controller
