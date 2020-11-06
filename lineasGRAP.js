var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});

var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];

color1 = ['#10316b', '#07689f', '#4d80e4', '#46b3e6', '#dff6f0'];
color2 = ['#213e3b', '#41aea9', '#a6f6f1', '#e8ffff', '#d9ecf2'];

function plotDonut(newData, elementName, color) {
  var Morris1 = Morris.Donut({
    element: elementName,
    data: newData,
    colors: color,
    formatter: function (x) { return x}
  }).on('click', function(i, row){
    console.log(i, row);
  });
}

function plotCount(newData, elementName, color) {

  var Morris1 = new Morris.Line({
      // ID of the element in which to draw the chart.
      element: elementName,
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: newData,
    //   data: [
    //     { year: 2016, value: 20 },
    //     { year: 2017, value: 10 },
    //     { year: 2018, value: 5 },
    //     { year: 2019, value: 5 },
    //     { year: 2020, value: 20 }
    //   ],
      // The name of the data record attribute that contains x-values.
      xkey: 'month',
      // A list of names of data record attributes that contain y-values.
      ykeys: ['Ciudadano', 'Entidad_Privada', 'Entidad_Publica', 'Sociedad_civil'],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ['Ciudadano', 'Entidad_Privada', 'Entidad_Publica', 'Sociedad_civil'],
      resize: true,
      lineColors: color,
      smooth: true,
      xLabelFormat: function(x) {
        var month = months[new Date(x).getMonth()];
        return month;
      },
    });

    
}

function plotBar(newData, elementName) {
  var Morris2 = Morris.Bar({
    element: elementName,
    data: newData,
    xkey: 'label',
    ykeys: ['value'],
    labels: ['label'],
    xLabelAngle: 0,
    xLabelMargin: 5,
    barColors: function (row, series, type) {
      if (type === 'bar') {
        var blue = Math.ceil(150 * row.y / this.ymax);
        return 'rgb(10,10,' + blue + ')';
      }
      else {
        return '#000';
      }
    }
  });

  $('#'+elementName).resize(function () {
    Morris2.redraw();
  });
}

data1 = [
         {value: 7900, label: 'Derecho de Petición'},
         {value: 895, label: 'Respuesta'},
         {value: 543, label: 'Otro Tipo'},
         {value: 38, label: 'Monitoreo Medios'},
        ];

data2 = [
        {value: 3953, label: 'Ciudadano'},
        {value: 2252, label: 'Entidad Pública'},
        {value: 1986, label: 'Entidad Privada'},
        {value: 791, label: 'Sociedad Civil Organizada'},
        {value: 352, label: 'Anónimo'},
        {value: 17, label: 'Otro'},
        {value: 16, label: 'Soy Transparente'},
        {value: 2, label: 'Monitoreo de medios'},
       ];

data3 = [
        { month: '2020-01', Ciudadano: 20, Entidad_Privada: 300, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-02', Ciudadano: 10, Entidad_Privada: 350, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-03', Ciudadano: 24, Entidad_Privada: 390, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-04', Ciudadano: 2, Entidad_Privada: 280, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-05', Ciudadano: 0, Entidad_Privada: 300, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-06', Ciudadano: 10, Entidad_Privada: 250, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-07', Ciudadano: 20, Entidad_Privada: 200, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-08', Ciudadano: 10, Entidad_Privada: 300, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-09', Ciudadano: 30, Entidad_Privada: 300, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-10', Ciudadano: 10, Entidad_Privada: 200, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-11', Ciudadano: 0, Entidad_Privada: 250, Entidad_Publica: 23 , Sociedad_civil: 20},
        { month: '2020-12', Ciudadano: 10, Entidad_Privada: 300, Entidad_Publica: 23 , Sociedad_civil: 20},
        ];


plotDonut(data1, 'myFirstChart', color1)
plotDonut(data2, 'mySecondChart', color2)
plotCount(data3, 'myThirdChart', color1)



