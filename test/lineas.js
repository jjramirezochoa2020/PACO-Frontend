var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});

var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];


var Morris1 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myFirstChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2016', value: 20 },
      { year: '2017', value: 10 },
      { year: '2018', value: 5 },
      { year: '2019', value: 5 },
      { year: '2020', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Valor'],
    resize: true,
    lineColors: ['#C14D9F', '#2CB4AC'],
  });

  var Morris2 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'mySecondChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2016', value: 350000000 },
      { year: '2017', value: 1000000000 },
      { year: '2018', value: 545000000 },
      { year: '2019', value: 290000000 },
      { year: '2020', value: 890000000 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    yLabelFormat: function(y)  {
      return formatter.format(y/1000000)+' Mill';
    },
    labels: ['Valor'],
    resize: true,
    lineColors: ['#2CB4AC'],
  });

  var Morris3 = Morris.Donut({
    element: 'myThirdChart',
    data: [
      {value: 70, label: 'SECOP I'},
      {value: 30, label: 'SECOP II'},
    ],
    colors: ['#cc0e74', '#ffcbcb'],
    formatter: function (x) { return x + "%"}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris4 = Morris.Donut({
    element: 'myForthChart',
    data: [
      {value: 60, label: 'Ejecutado'},
      {value: 20, label: 'Liquidado'},
      {value: 10, label: 'En Borrador'},
      {value: 5, label: 'Suspendido'},
      {value: 5, label: 'Cancelado'},
    ],
    colors: ['#213e3b', '#41aea9', '#a6f6f1', '#e8ffff', '#d9ecf2'],
    formatter: function (x) { return x + "%"}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris5 = Morris.Donut({
    element: 'myFifthChart',
    data: [
      {value: 60, label: 'Ejecutado'},
      {value: 20, label: 'Liquidado'},
      {value: 10, label: 'En Borrador'},
      {value: 5, label: 'Suspendido'},
      {value: 5, label: 'Cancelado'},
    ],
    colors: ['#10316b', '#07689f', '#4d80e4', '#46b3e6', '#dff6f0'],
    formatter: function (x) { return x + "%"}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris6 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'mySixthChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { month: '2020-01', value: 20, value2: 30, value3: 23 },
      { month: '2020-02', value: 10, value2: 10, value3: 20 },
      { month: '2020-03', value: 5, value2: 40, value3: 10 },
      { month: '2020-04', value: 20, value2: 5, value3: 28 },
      { month: '2020-05', value: 20, value2: 10, value3: 25 },
      { month: '2020-06', value: 10, value2: 5, value3: 14 },
      { month: '2020-07', value: 5, value2: 20, value3: 15 },
      { month: '2020-08', value: 20, value2: 20, value3: 9 },
      { month: '2020-09', value: 20, value2: 10, value3: 5 },
      { month: '2020-10', value: 10, value2: 20, value3: 20 },
      { month: '2020-11', value: 5, value2: 8, value3: 10 },
      { month: '2020-12', value: 20, value2: 30, value3: 10 },
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'month',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value', 'value2', 'value3'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Año 2018', 'Año 2019', 'Año 2020'],
    resize: true,
    lineColors: ['#C14D9F', '#2CB4AC', '#14274e'],
    xLabelFormat: function(x) {
      var month = months[new Date(x).getMonth()];
      return month;
    }
  });



  $("#botData1").on("click", function() {
      console.log(Morris1);
      var nuevaData = [
        { year: '2016', value: 20 },
        { year: '2017', value: 30 },
        { year: '2018', value: 5 },
        { year: '2019', value: 20 },
        { year: '2020', value: 5 }
      ];

      Morris1.setData(nuevaData);
  })

  $("#botData2").on("click", function() {
    console.log(Morris2);
    var nuevaData = [
      { year: '2016', value: 20 },
      { year: '2017', value: 30 },
      { year: '2018', value: 5 },
      { year: '2019', value: 20 },
      { year: '2020', value: 5 }
    ];

      Morris2.setData(nuevaData);
})