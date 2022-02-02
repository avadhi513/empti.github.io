var employeeListHolder = document.querySelector(".employee-list");
var interviewListHolder = document.querySelector(".interviews");
var addEmployeeModal = document.querySelector("#employeeModal");
var addInterviewModal = document.querySelector("#interviewModal");

var interview1 = document.querySelector("#int-1");
var interview2 = document.querySelector("#int-2");
var interview3 = document.querySelector("#int-3");

addEmployeeModal.style.display="none";
addInterviewModal.style.display="none";

function addEmployee() {
  var name = document.querySelector("#name").value;
  var surname = document.querySelector("#surname").value;
  var position = document.querySelector("#position").value;
  var department = document.querySelector("#department").value;
  var salary = document.querySelector("#salary").value;
  var email = document.querySelector("#email").value;

  if(name=="" || surname=="" || position=="" || department=="" || email=="" || salary=="") {
    addEmployeeModal.style.display="none";
    alert("Enter details");
    return;
  }

  var newItem = `
  <li>
    <div class="employee-card" id="employee1">
      <img class="user-img" src="img/default.png" alt="">
      <span>
        <div class="employment-details" id="employee1-details">
          <span class="name-format">`+name+`</span>
          <span class="name-format">`+surname+`</span>
          <br>
          <span>`+position+`</span>
          <br>
          <span>`+department+`</span>
          <br>
          <span>`+email+`</span>
          <br>
          <span>$`+salary+`</span>
        </div>
      </span>
    </div>
  </li>
  `;

  employeeListHolder.insertAdjacentHTML('beforeend', newItem);
  addEmployeeModal.style.display="none";
}

function showAddEmpModal() {
  addEmployeeModal.style.display="block";
}

function addInterview() {
  var departmentInterview = document.querySelector("#int-department").value;
  var positionInterview = document.querySelector("#int-position").value;

  if (departmentInterview=="" || positionInterview=="") {
    addInterviewModal.style.display="none";
    alert("Enter details")
    return;
  }

  var newInterview = `
   <li>
    <div class = "list-items">
     <h2>`+departmentInterview+`</h2>
     <p>`+positionInterview+`</p>
     <button class="accept-btn" type="button" name="button">Accept</button>
     <button class="reject-btn" type="button" name="button">Reject</button>
    </div>
   </li>
  `;

  interviewListHolder.insertAdjacentHTML('beforeend', newInterview);
  addInterviewModal.style.display="none";
}

function showAddIntModal() {
  addInterviewModal.style.display="block";
}

function removeInterview1() {
  interview1.style.display="none";
}

function removeInterview2() {
  interview2.style.display="none";
}

function removeInterview3() {
  interview3.style.display="none";
}

function closeInterview() {
  addInterviewModal.style.display="none";
}

function closeEmployee() {
  addEmployeeModal.style.display="none";
}
