var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var chartColors = window.chartColors;
var color = Chart.helpers.color;
var config = {
    data: {
        datasets: [{
            data: [
                2400,
                737,
                594,
                453,
                429,
                399,
                374,
                348,
                341,
                294,
            ],
            backgroundColor: [
                color('#6d67d7').alpha(0.85).rgbString(),
                color('#6d67d7').alpha(0.6).rgbString(),
                color('#6d67d7').alpha(0.35).rgbString(),
                color('#4956ca').alpha(0.5).rgbString(),
                color('#006eae').alpha(0.5).rgbString(),
                color('#00a2c3').alpha(0.5).rgbString(),
                color('#17d9d6').alpha(0.5).rgbString(),
                color('#3bfce0').alpha(0.5).rgbString(),
                color('#c0eefa').alpha(0.5).rgbString(),
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            'Cundinamarca',
            'Orden Nacional',
            'Antioquía',
            'Bolívar',
            'Santander',
            'Valle del Cauca',
            'Tolima',
            'Boyacá',
            'Norte de Santander',
            'Meta',
        ]
    },
    borderWidth: 4,
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: false,
            text: 'Chart.js Polar Area Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart-area');
    window.myPolarArea = Chart.PolarArea(ctx, config);
};


Morris.Area.prototype.fillForSeries = function(i)  
{
var color;
return "10-#3b7078-#ffffff";
}
 
// Morris.Area({
//   element: 'test1',
//   data: [
//     {x: '2010 Q4', y: 3},
//     {x: '2011 Q1', y: 3},
//     {x: '2011 Q2', y: 3},
//     {x: '2011 Q3', y: 2},
//     {x: '2011 Q4', y: 8},
//     {x: '2012 Q1', y: 4}
//   ],
//   xkey: 'x',
//   ykeys: ['y', 'z'],
//   labels: ['Y', 'Z'],
// }).on('click', function(i, row){
//   console.log(i, row);
// });

// Morris.Area({
//     element: 'test2',
//     data: [
//       {x: '2010 Q4', y: 3},
//       {x: '2011 Q1', y: 3},
//       {x: '2011 Q2', y: 3},
//       {x: '2011 Q3', y: 2},
//       {x: '2011 Q4', y: 8},
//       {x: '2012 Q1', y: 4}
//     ],
//     xkey: 'x',
//     ykeys: ['y', 'z'],
//     labels: ['Y', 'Z'],
//   }).on('click', function(i, row){
//     console.log(i, row);
//   });