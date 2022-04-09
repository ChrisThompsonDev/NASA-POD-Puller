//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let userDate = document.querySelector('input').value
  userDate = "date=" + userDate 

  fetch(`https://api.nasa.gov/planetary/apod?${userDate}&api_key=Jy88sXjREXFwubTbhBwJKRXPX1R9AiaNbVZlDFBc`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('#date').innerText = data.date
        document.querySelector('#copy').innerText = data.copyright
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}