var employee_holder = document.getElementById("employee_holder");
var employeesWindow = document.getElementById("employees");
var employeeInfoWindow = document.getElementById("employee_info");
document.addEventListener("DOMContentLoaded", function () {
    var employeeInfoWindow = document.getElementById("employee_info");
    employeeInfoWindow.addEventListener("click", function (event) {
        if (event.target && event.target.id === "delete") {
            delet();
        }
    });

    function delet() {
    const divElement = document.querySelector('.id');
    let divContent = divElement.textContent; // or divElement.innerHTML if you have HTML content
    var id = parseInt(divContent);

    // Get CSRF token
    var csrftoken = getCookie('csrftoken');
    

    $.ajax({
        type: "GET",
        url: '/delete_employ/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
            "id" : id,
        },
        dataType: "json",
        success: function (data) {
        let employees = data.allEmployees;
        reshow(employees)
        },
        failure: function () {
            alert("failure");
        }
    });
    employeeInfoWindow.innerHTML = ``;

   
}
});

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