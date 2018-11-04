import ChartJS from "Chart.js";

class ChartCV {
    constructor() {

        var winwidth = window.innerWidth;
        if (winwidth < 600){
            var ChartType = 'horizontalBar';
            console.log(winwidth, ChartType);
        } else {
            var ChartType = 'bar';
            console.log(winwidth, ChartType);
        }

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {



        type: ChartType,
            data: {
                labels: ["HTML", "CSS", "jQuery", "NodeJS/ES6", "PHP", "Wordpress", "MongoDB", "MySQL/Postgre"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(224, 159, 125)',
                    data: [99, 99, 85, 80, 50, 50, 30]
                }]
            },

            // Configuration options go here
            options: {}
        });
        var options = {
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: true,
                        color: "rgba(255,99,132,0.2)"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        };


    }

}

export default ChartCV;
