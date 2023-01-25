
const managerC = function(manager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text"><i class="fa fa-solid fa-mug-hot"></i> Manager</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.officeNum}</li>
  </ul>
</div>`
}

const engineerC = function(engineer) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text"><i class="fa fa-solid fa-glasses"></i> Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
  </ul>
</div>`   
}

const internC = function(intern) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text"><i class="fa fa-solid fa-graduation-cap"></i> Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>`   
}


generateHTML = (data) => {
     cardArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager') {
            const createMgrCard = managerC(employee);
            cardArray.push(createMgrCard);
        }
        if(role === 'Engineer') {
            const creatEngCard = engineerC(employee);
            cardArray.push(creatEngCard);
        }
        if(role === 'Intern') {
            const createIntCard = internC(employee);
            cardArray.push(createIntCard);
        }
    };
    const cards = cardArray.join('');
    const teamCards = generateCard(cards);

    return teamCards;
}

const generateCard = function(cards) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="Enter your description here" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

    <link
      href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;1,200&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="./style.css"/>

    <title>Team Generator</title>
  </head>

  <body>
  <header>
  <h1>My Team</h1>
  </header>

  <main>
<div class="container">
   <div class="row justify-content-center" id="team-cards">
       ${cards}
   </div>
</div>
</main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
</html>`

}
module.exports = generateHTML;