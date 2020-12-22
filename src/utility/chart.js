const google = window.google;
const drawChart = (chartData, yaxis = 'clickThruRate') => {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawBackgroundColor);

    function drawBackgroundColor() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'X');
        data.addColumn('number', `${yaxis}`);

        data.addRows(chartData);

        var options = {
            width: '80%',
            height: 500
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
};

export default drawChart;