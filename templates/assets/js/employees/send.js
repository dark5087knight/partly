 
var employee_holder = document.getElementById("employee_holder");
var employeesWindow = document.getElementById("employees");
var employeeInfoWindow = document.getElementById("employee_info");
var add = document.getElementById('add');
add.addEventListener('click', fill);
function fill() {
    let content = `<div class="imgBx"><img src="assets/imgs/customer02.jpg" alt=""></div>
                    <div class="information">
                        <div class="name_in">
                            <div id="name_in"><input id="name" type="text"></div>
                        </div>
                        <div class="id">
                            ID :
                        </div>
                        <div class="content">
                            <div class="phone_in">
                                <div id="phone_header">phone :</div>
                                <div id="phone_in"><input id="phone" type="number"></div>
                            </div>
                            <div class="email_in">
                                <div id="email_header">Email :</div>
                                <div id="email_in"><input id ="email" type="text"></div>
                            </div>
                            <div class="address_in">
                                <div id="address_header">Address :</div>
                                <div id="address_in"><input id ="address"  type="text"></div>
                            </div>
                            <div class="job_in">
                                <div id="job_header">Job Title :</div>
                                <div id="job_in"><input id="job" type="text"></div>
                            </div>
                            <div class="hire_in">
                                <div id="hire_header">Hire Date :</div>
                                <div id="hire_in"><input id="hire" type="text"></div>
                            </div>

                        </div>
                    </div>
                    <div class="buttons">
                        <div class="edit">
                            <button id="send">Save</button>
                        </div>
                    </div>`;

    employeeInfoWindow.innerHTML = content;
}

document.addEventListener("DOMContentLoaded", function () {
    var employeeInfoWindow = document.getElementById("employee_info");
    employeeInfoWindow.addEventListener("click", function (event) {
        if (event.target && event.target.id === "send") {
            send();
        }
    });
    
    function send() {
    var name = document.getElementById("name").value;
    var number =document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var job = document.getElementById("job").value;
    var hire = document.getElementById("hire").value;
    console.log(name)
    console.log(number)
    console.log(email)
    console.log(address)

    id = event.currentTarget.getAttribute('employID');
    // Get CSRF token
    var csrftoken = getCookie('csrftoken');
    

    $.ajax({
        type: "GET",
        url: '/your_django_endpoint/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
            "name": name,
            "number": number,
            "email": email ,
            "address": address ,
            "job": job ,
            "hire": hire ,
        },
        dataType: "json",
        success: function (data) {
            let id_b  =  data.id
            let name_b  =  data.name
            let number_b  =  data.number
            let email_b  =  data.email
            let address_b  =  data.address
            let job_b  =  data.job
            let hire_b  =  data.hire
            let employees = data.allEmployees;
            show(id_b,name_b,number_b,email_b,address_b,job_b,hire_b)
            reshow(employees)

        },
        failure: function () {
            alert("failure");
        }
    });

   
}
});
 function show(id,name ,phone,email,address,job,hire) {
        

        let content = `<div class="imgBx"><img src="assets/imgs/customer02.jpg" alt=""></div>
                        <div class="information">
                            <div class="name">
                                <h3 id="name">${name}</h3>
                            </div>
                             <div class="id">
                                 ${id} 
                            </div>
                            <div class="content">
                                <div class="phone">
                                    <div id="phone_header">phone :</div>
                                    <div id="phone">${phone}</div>
                                </div>
                                <div class="email">
                                    <div id="email_header">Email :</div>
                                    <div id="email">${email}</div>
                                </div>
                                <div class="address">
                                    <div id="address_header">Address :</div>
                                    <div id="address">${address}</div>
                                </div>
                                <div class="job">
                                    <div id="job_header">Job Title :</div>
                                    <div id="job">${job}</div>
                                </div>
                                <div class="hire">
                                    <div id="hire_header">Hire Date :</div>
                                    <div id="hire">${hire}</div>
                                </div>

                            </div>
                        </div>
                        <div class="buttons">
                            <div class="edit">
                                <button id="edit">Edit</button>
                            </div>
                            <div class="edit">
                                <button id="button">Delete</button>
                            </div>
                        </div>`;

        employeeInfoWindow.innerHTML = content;
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
function reshow(employees) {
    employeesWindow.innerHTML = '';
    employees.forEach(employee => {
    employeesWindow.innerHTML += `
        <tr onclick="nav( ${employee.id} )" class="emplyee-holder employID = "${employee.id}">
        <td width="60px" id="hii">
        <div class="imgBx"><img src=" 'customer02.jpg' " alt=""></div>
        </td>
        <td class="word-td" style="border-radius: 0px 20px 20px 0px;">
        <h4 id="hi">${employee.name} <br> <span>${employee.id}</span></h4>
        </td>
        </tr>
    `;   
    });
 
}