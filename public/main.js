//What can the user see?
 // 5 Items
 //what can the user do?
// choose and item
// what does the user expect?
//   receive the item selected

// appending an event listener to every single thumb up
// each time clicked the item should subtratc 1 from count and add 1 to revenue
window.onload=function(){
  const caramello = document.getElementById("caramello");
  const cheetos = document.getElementById("cheetos");
  const snickers = document.getElementById("snickers");
  const bugles = document.getElementById("bugles");
  const oreos = document.getElementById("oreos");


caramello.addEventListener('click', function(){
  alert("Caramello, the unsung hero of the candy isle!")
        fetch('selection', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': 'Caramello'
          })
        })
        .then(response => {
          if (response.ok) return response.json()

        })
        .then(data => {

          window.location.reload() //page reload (another get request is triggered)
        })

});
cheetos.addEventListener('click', function(){
  alert("Cheetos, Dangerously cheesy!")
        fetch('selection', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': 'Cheetos'

          })
        })
        .then(response => {
          if (response.ok) return response.json()

        })
        .then(data => {

          window.location.reload() //page reload (another get request is triggered)
        })

});
snickers.addEventListener('click', function(){
  alert("Snickers, Satisfies")
        fetch('selection', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': 'Snickers'
          })
        })
        .then(response => {
          if (response.ok) return response.json()

        })
        .then(data => {

          window.location.reload() //page reload (another get request is triggered)
        })

});
bugles.addEventListener('click', function(){
  alert("Bugles, the taste shall rise again!")
        fetch('selection', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': 'Bugles'
          })
        })
        .then(response => {
          if (response.ok) return response.json()

        })
        .then(data => {

          window.location.reload() //page reload (another get request is triggered)
        })

});
oreos.addEventListener('click', function(){
  alert("Oreos, Milk's Favorite Cookie")
        fetch('selection', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': 'Oreos'
          })
        })
        .then(response => {
          if (response.ok) return response.json()

        })
        .then(data => {

          window.location.reload() //page reload (another get request is triggered)
        })

});

}
//appending an event listener toe very single trash can
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const order = this.parentNode.parentNode.childNodes[3].innerText
//         const size = this.parentNode.parentNode.childNodes[5].innerText
//         const cream = this.parentNode.parentNode.childNodes[7].innerText
//         const milk = this.parentNode.parentNode.childNodes[9].innerText
//         const sugar = this.parentNode.parentNode.childNodes[11].innerText
//
//         console.log(name);
//         fetch('orders', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name
//
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
