renderHTML = (team) => {
    // html base template
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/dist/css/style.css">
    <title>Team Profile Page</title>
</head>
<body>
    <div id="header-team" class="bg-danger mb-5">
        <h1 class="display-2 text-center">My Team</h1>    
    </div>

    <div class="container-xl">
        ${getCards(team)}
    </div>
</body>
</html>`
}

const getCards = (teamMembers) => {
    var htmlString = ""
    // loops through members array to append cards to base html
    teamMembers.forEach((employee) => {
        if (employee.getRole() == "Manager") {
            // manager html template
            htmlString += `<div class="card d-inline-flex m-3" style="width: 18rem;">
            <div class="card-header">
                <h3 class="card-title">${employee.name}</h3>
                <h4 class="card-subtitle">${employee.getRole()}</h4>
                <div class="card-body">
                    <p class="card-text">${employee.id}</p>
                    <a href="mailto:" class="card-text">${employee.email}</p>
                    <p class="card-text">${employee.officeNum}</a>
                </div>
            </div>
        </div>
        `;
        } else if (employee.getRole() == "Engineer") {
            // engineer html template
            htmlString += `<div class="card d-inline-flex m-3" style="width: 18rem;">
            <div class="card-header">
                <h3 class="card-title">${employee.name}</h3>
                <h4 class="card-subtitle">${employee.getRole()}</h4>
                <div class="card-body">
                    <p class="card-text">${employee.id}</p>
                    <a href="mailto:" class="card-text">${employee.email}</p>
                    <a href="${employee.gitHub}" class="card-link">Github</a>
                </div>
            </div>
        </div>
        `;
        } else {
            // intern html template
            htmlString += `<div class="card d-inline-flex m-3" style="width: 18rem;">
                <div class="card-header">
                    <h3 class="card-title">${employee.name}</h3>
                    <h4 class="card-subtitle">${employee.getRole()}</h4>
                    <div class="card-body">
                        <p class="card-text">${employee.id}</p>
                        <a href="mailto:" class="card-text">${employee.email}</p>
                        <p class="card-text">${employee.school}</a>
                    </div>
                </div>
            </div>
            `;
        }
    })

    return htmlString
}

module.exports = renderHTML
