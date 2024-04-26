let tabl = document.querySelectorAll(".date");
var employeeInfoWindow = document.getElementById("purchases");
tabl.forEach((item) => item.addEventListener("click", get));


function get() {

    var pr_num = event.currentTarget.getAttribute('grap');
    var grap =parseInt(pr_num);
        var csrftoken = getCookie('csrftoken');
    
    $.ajax({
        type: "GET",
        url: '/purchases/get_pur/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
            "grap": grap,
        },
        dataType: "json",
        success: function (data) {
        let purchases = data.purchases;  
        show(purchases)
        },
        failure: function () {
            alert("failure");
        }
    });

   
}
 function show(purchases) {
    employeeInfoWindow.innerHTML = '';
    purchases.forEach(purchase => {
    employeeInfoWindow.innerHTML += `
        <tr>
            <td>${purchase.name}</td>
            <td>$${purchase.price}</td>
            <td>${purchase.number}</td>
            <td>${purchase.company}</td>
        </tr>
    `;   
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



