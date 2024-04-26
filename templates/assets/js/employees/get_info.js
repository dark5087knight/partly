

function nav(id) {
    console.log("hello")
    // Get CSRF token
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
            let id_b  =  data.id
            let name_b  =  data.name
            let number_b  =  data.number
            let email_b  =  data.email
            let address_b  =  data.address
            let job_b  =  data.job
            let hire_b  =  data.hire
            show(id_b,name_b,number_b,email_b,address_b,job_b,hire_b)

        },
        failure: function () {
            alert("failure");
        }
    });

   
}
 function show(id,name ,phone,email,address,job,hire) {
        
       let content = `<div class="imgBx"><img src="{% static 'assets/imgs/customer01.jpg' %}" alt="">
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
                                <button id="delete">Delete</button>
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



