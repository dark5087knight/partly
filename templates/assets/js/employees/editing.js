var employeeInfoWindow = document.getElementById("employee_info");

document.addEventListener("DOMContentLoaded", function () {
    var employeeInfoWindow = document.getElementById("employee_info");
    employeeInfoWindow.addEventListener("click", function (event) {
        if (event.target && event.target.id === "edit") {
            show();
        }
    });

    function show() {
        console.log("hello")
     const divElement = document.querySelector('.id');

        let divContent = divElement.textContent; // or divElement.innerHTML if you have HTML content

        // Step 3: Convert the content to a number
        var id = parseInt(divContent);
    
    var csrftoken = getCookie('csrftoken');
    
    console.log(id)
    $.ajax({
        type: "GET",
        url: '/get_employee_info/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
            "id": id,
        },
        dataType: "json",
        success: function (data) {
            var id_b  =  data.id
            var name_b  =  data.name
            var number_b  =  data.number
            var email_b  =  data.email
            var address_b  =  data.address
            var job_b  =  data.job
            var hire_b  =  data.hire
            fill(id_b,name_b,number_b,email_b,address_b,job_b,hire_b)

        },
        failure: function () {
            alert("failure");
        }
    });    
    }


});

function fill(id ,name,phone,email,address,job,hire){

    let content = `<div class="imgBx"><img src="assets/imgs/customer02.jpg" alt=""></div>
                    <div class="information">
                        <div class="name_in">
                            <div id="name_in"><input id = "name" value="${name}" type="text"></div>
                        </div>
                        <div class="id">
                            <div id = "id"> ${id} </div>
                        </div>
                        <div class="content">
                            <div class="phone_in">
                                <div id="phone_header">phone :</div>
                                <div id="phone_in"><input id = "phone" value="${phone}" type="number"></div>
                            </div>
                            <div class="email_in">
                                <div id="email_header">Email :</div>
                                <div id="email_in"><input id = "email" value="${email}" type="text"></div>
                            </div>
                            <div class="address_in">
                                <div id="address_header">Address :</div>
                                <div id="address_in"><input id = "address" value="${address}" type="text"></div>
                            </div>
                            <div class="job_in">
                                <div id="job_header">Job Title :</div>
                                <div id="job_in"><input id = "job" value="${job}" type="text"></div>
                            </div>
                            <div class="hire_in">
                                <div id="hire_header">Hire Date :</div>
                                <div id="hire_in"><input id = "hire" value="${hire}" type="text"></div>
                            </div>

                        </div>
                    </div>
                    <div class="buttons">
                        <div class="edit">
                            <button id="save">Save</button>
                        </div>
                    </div>`;

        employeeInfoWindow.innerHTML = content;


}