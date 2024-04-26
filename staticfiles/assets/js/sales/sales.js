var employeeInfoWindow = document.getElementById("sales");

setInterval(get, 2000);


function get() {

        var csrftoken = getCookie('csrftoken');
    
    $.ajax({
        type: "GET",
        url: '/sales/get_sales/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
        },
        dataType: "json",
        success: function (data) {
        let sales = data.sales;  
        show(sales)
        },
        failure: function () {
            alert("failure");
        }
    });

   
}
 function show(sales) {
    employeeInfoWindow.innerHTML = '';
    sales.forEach(sale => {
    date = editime(sale.date)
    employeeInfoWindow.innerHTML += `
        <tr>
            <td>${sale.name}</td>
            <td style="padding-right: 11%;">$${sale.price}</td>
            <td style="padding-left: 7%;">${sale.number}</td>
            <td style="width: 280px;">${date}</td>
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

function editime(ptime)
{ var time = ptime.toString();
  var year = time.slice(0, 4);
  var month = time.slice(5, 7);
  var day = time.slice(8, 10);
  var hour = time.slice(11, 13);
  var minut = time.slice(14, 16);
  time = `${year}/${month}/${day}  ${hour}:${minut}`
  return time;
}


