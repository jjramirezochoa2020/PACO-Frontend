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
      smooth: false,
      xLabelFormat: function(x) {
        var month = months[new Date(x).getMonth()];
        return month;
      },
      ymax: 1200,
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
        { month: '2020-01', Ciudadano: 225, Entidad_Privada: 69, Entidad_Publica: 232 , Sociedad_civil: 59},
        { month: '2020-02', Ciudadano: 301, Entidad_Privada: 119, Entidad_Publica: 369 , Sociedad_civil: 65},
        { month: '2020-03', Ciudadano: 200, Entidad_Privada: 135, Entidad_Publica: 246 , Sociedad_civil: 54},
        { month: '2020-04', Ciudadano: 448, Entidad_Privada: 136, Entidad_Publica: 157 , Sociedad_civil: 32},
        { month: '2020-05', Ciudadano: 1026, Entidad_Privada: 286, Entidad_Publica: 115 , Sociedad_civil: 123},
        { month: '2020-06', Ciudadano: 388, Entidad_Privada: 295, Entidad_Publica: 92 , Sociedad_civil: 77},
        { month: '2020-07', Ciudadano: 395, Entidad_Privada: 282, Entidad_Publica: 389 , Sociedad_civil: 131},
        { month: '2020-08', Ciudadano: 362, Entidad_Privada: 245, Entidad_Publica: 232 , Sociedad_civil: 96},
        { month: '2020-09', Ciudadano: 374, Entidad_Privada: 253, Entidad_Publica: 253 , Sociedad_civil: 74},
        { month: '2020-10', Ciudadano: 234, Entidad_Privada: 166, Entidad_Publica: 169 , Sociedad_civil: 80},
        { month: '2020-11', Ciudadano: 0, Entidad_Privada: 0, Entidad_Publica: 0 , Sociedad_civil: 0},
        { month: '2020-12', Ciudadano: 0, Entidad_Privada: 0, Entidad_Publica: 0 , Sociedad_civil: 0},
        ];


plotDonut(data1, 'myFirstChart', color1)
plotDonut(data2, 'mySecondChart', color2)
plotCount(data3, 'myThirdChart', ['#C14D9F', '#2CB4AC', '#51adcf', '#14274e'])



