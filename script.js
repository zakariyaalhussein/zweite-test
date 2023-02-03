let data = JSON.parse(Moviefactory);


for (let val of data) {
    document.getElementById("result").innerHTML += `
    <div class="card mb-3 col-12 col-md-6 col-lg-4 " style="max-width: 480px; background-color: rgb(42, 39, 39); ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${val.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h2 class="card-title" style="color: white;">${val.movieName}</h2>
        <p class="card-text " style="color: white;">${val.description}</p>
        <button class="fa fa-thumbs-up btn btn-primary like-button" type="submit" >like</button>
        <i class="count">${val.likes}</i><br><br>
          </div>
        </div>
       </div>
    </div> `;
}



let btns = document.getElementsByClassName("like-button");

for (let i = 0; i < btns.length; i++) {


    btns[i].addEventListener("click", function() {


        document.getElementsByClassName("count")[i].innerHTML = data[i].likes + 1;

        // console.log(data[i].likes);
    });
}