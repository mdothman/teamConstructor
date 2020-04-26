function managerTemplate(employee) {
  `<div class="card text-white font-weight-bold bg-primary border-primary m-1 p-5">
    <h3 class="text-center">${employee.name}</h3>
         <ul class="list-unstyled">
            <li>${employee.id}</li>
            <li>${employee.getOfficeNumber()}</li>
            <li>${employee.getRole()}</li>
            <li>${employee.email}</li>
        </ul>
  </div>`;
}
module.exports = managerTemplate;
