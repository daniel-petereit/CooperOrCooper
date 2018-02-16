$(document).ready(function() {
  var voting = true;

  function castVote ($targ) {
    console.log('vote called')
    var id = $targ.attr('id');
    if(voting) {
      axios.post('/api/vote/' + id)
        .then(response => {
          $targ.attr('votes', Number($targ.attr('votes')) + 1)
          var vote1 = document.createElement('p');
          var vote2 = document.createElement('p');
          vote1.innerHTML = $('img').first().attr('votes')
          vote2.innerHTML = $('img').last().attr('votes')
          $('#picture1').append(vote1)
          $('#picture2').append(vote2)
          $('#voteAgainBtn').attr('hidden', false)
          voting = false;
        }).catch(err => {
          $('body').append("ERROR Error Errooorrrrr")
        })
    }
  }

  function loadImages() {
    axios.get('/api/getTwoPictures')
      .then(response => {
        let data = response.data
        var dataImg1 = data.message[0]
        var dataImg2 = data.message[1]
        var newImg1 = document.createElement('img');
        var newImg2 = document.createElement('img');
        var imgTag1 = document.createElement('p');
        var imgTag2 = document.createElement('p');
        newImg1.setAttribute('src', '/images/' + dataImg1.fileName)
        newImg2.setAttribute('src', '/images/' + dataImg2.fileName)
        newImg1.setAttribute('votes', dataImg1.votes)
        newImg2.setAttribute('votes', dataImg2.votes)
        newImg1.setAttribute('id', dataImg1.id)
        newImg2.setAttribute('id', dataImg2.id)
        imgTag1.innerText = dataImg1.categories.length ? "Anderson Category: " + dataImg1.categories.join(', ') : "No Anderson Category Found"
        imgTag2.innerText = dataImg2.categories.length ? "Anderson Category: " + dataImg2.categories.join(', ') : "No Anderson Category Found"
        $('#picture1 > *').remove()
        $('#picture2 > *').remove()
        $('#picture1').append(newImg1);
        $('#picture2').append(newImg2);
        $('#picture1').append(imgTag1);
        $('#picture2').append(imgTag2);
        $('img').click(function(e){

          var $targ = $(e.target)
          castVote($targ)
        })
      }).catch(err => {
        console.log(err)
      })
  }

  $('#voteAgainBtn').click((e) => {
    voting = true;
    $(e.target).attr('hidden', true)
    loadImages();
  })
  loadImages()

})
