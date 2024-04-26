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
// Get CSRF token
var csrftoken = getCookie('csrftoken');
    $.ajax({
        type: "GET",
        url: '/home/get_chart/',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Include CSRF token in request headers
        },
        data: {
        },
        dataType: "json",
        success: function (data) {
           var sales = data.sales
           var purchases = data.purchases
           var earning = data.earning
          info(sales,purchases,earning);

        },
        failure: function () {
            alert("failure");
        }
});






function info(sales,purchases,earning)
{

anychart.onDocumentReady(function () {

    // create a line chart
    var chart = anychart.line();

    // set chart animation
    chart.animation(true);

    // add data
    var data = [
        ["January", sales[1], purchases[1],earning[1]],
        ["February", sales[2], purchases[2], earning[2]],
        ["March", sales[3], purchases[3], earning[3]],
        ["April", sales[4], purchases[4], earning[4]],
        ["May", sales[5], purchases[5], earning[5]],
        ["June", sales[6], purchases[6], earning[6]],
        ["July", sales[7], purchases[7], earning[7]],
        ["August", sales[8], purchases[8], earning[8]],
        ["September", sales[9], purchases[9], earning[9]],
        ["October", sales[10], purchases[10], earning[10]],
        ["November", sales[11], purchases[11], earning[11]],
        ["December", sales[12], purchases[12], earning[12]]
    ];
    // set chart container
    chart.container('container');

    // create a data set
    var dataSet = anychart.data.set(data);

    // map the data for all series
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

    // create the series and name them
    var firstSeries = chart.line(firstSeriesData);
    firstSeries.name("Sales");
    var secondSeries = chart.line(secondSeriesData);
    secondSeries.name("Purchases");
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries.name("Earning");

    // add a legend and customize it
    chart.legend().enabled(true).fontSize(14).padding([10, 0, 10, 0]);

    // name the axes
    chart.yAxis().title("Money").labels().format("${%Value}");
    chart.yScale().minimum(0).maximum(10000).ticks({ interval: 2000 });
    chart.xAxis().title("Month");

    // customize the series markers
    firstSeries.hovered().markers().type("circle").size(4);
    secondSeries.hovered().markers().type("circle").size(4);
    thirdSeries.hovered().markers().type("circle").size(4);

    // turn on crosshairs and remove the y hair
    chart.crosshair().enabled(true).yStroke(null).yLabel(false);

    // change the tooltip position
    chart.tooltip().positionMode("point");
    chart.tooltip().position("right").anchor("left-center").offsetX(5).offsetY(5);

    // customize the series stroke in the normal state
    firstSeries.normal().stroke("#141E46", 2.5);
    secondSeries.normal().stroke("#0E46A3", 2.5);
    thirdSeries.normal().stroke("#4793AF", 2.5);

    // draw the resulting chart
    chart.draw();
});
}