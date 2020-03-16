//bar graph
var ctx = document.getElementById('barchart').getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['chilly chicken', 'egg curry', 'rice', 'dal', 'paneer', 'salad'],
        datasets: [{
            label: 'order of food',
            data: [12, 19, 3, 5, 2, 10],
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true
                         }
            }]
        }
     
    }
});
//draw line chart
var ctxx = document.getElementById('linechart').getContext('2d');
var linechart = new Chart(ctxx, {
    type: 'line',
    data: {labels: ['chilly chicken', 'egg curry', 'rice', 'dal', 'paneer', 'salad'],
    datasets: [{
        label: 'order of foods',
        data: [12, 19, 3, 5, 2, 10],
        backgroundColor: 'grey',
        borderColor: 'blue',
        borderWidth: 2
    }]
},
options: {
                scales: {
                    yAxes: [{
                        ticks: {
                        beginAtZero: true
                     }
        }]
    }
 
}
});