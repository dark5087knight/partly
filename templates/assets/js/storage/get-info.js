let tabl = document.querySelectorAll(".type-holder");
var employeeInfoWindow = document.getElementById("products");
tabl.forEach((item) => item.addEventListener("click", get));


function get() {

    var grap = event.currentTarget.getAttribute('grap');
    
    console.log(grap)
        var csrftoken = getCookie('csrftoken');
    
    $.ajax({
        type: "GET",
        url: '/storage/get_info/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
            "grap": grap,
        },
        dataType: "json",
        success: function (data) {
        let products = data.products;  
        show(products)
        },
        failure: function () {
            alert("failure");
        }
    });

   
}
 function show(products) {
    employeeInfoWindow.innerHTML = '';
    products.forEach(product => {
    employeeInfoWindow.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.number}</td>
            <td>${product.company}</td>
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



