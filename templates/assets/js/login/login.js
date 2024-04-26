var login = document.getElementById("login");
login.addEventListener('click', log);

function log() {  
    console.log("work") 
    var username = document.getElementById("in_username").value;
    var password = document.getElementById("in_password").value;

    var csrftoken = getCookie('csrftoken');

    $.ajax({
        type: "GET",
        url: '/login/log_in/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
            "username": username,
            "password": password,
        },
        dataType: "json",
        success: function (data) {
        var cases = data.log
        console.log(cases)
        if (cases == 1)
        {
            var username = data.username
            var id = data.id
            flag = 1
            loged(username,id,flag)
        }
        },
        failure: function () {
            alert("failure");
        }
    });

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
function loged(id , username , flag )
{
    crateLocal(id, username,flag)
    window.location.href = "http://127.0.0.1:8000/home";

}
