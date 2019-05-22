/*var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()*/
const url = "https://ghibliapi.herokuapp.com/films";
fetch(url)
.then(response=> response.json())
.then(json=>{
              json.forEach(movie => {
                  console.log(movie.title)
              })  
            }
      )

/*
const url = "https://ghibliapi.herokuapp.com/films";
fetch(url)
.then(response=> response.json())
.then(json=>console.log(json))
.catch(error => console.error(error))
*/
