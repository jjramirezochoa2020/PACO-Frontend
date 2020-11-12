var nameDepartment = sessionStorage.getItem("nameDepartment");
document.getElementById('main__title').innerHTML = "Cifras Generales Contratación "+String(nameDepartment);

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://apim-paco.azure-api.net/paco/secop/departments/'+String(nameDepartment),
    targetUrl2 = 'https://apim-paco.azure-api.net/paco/secop/contract/'+String(nameDepartment)+'?limit=5',
    targetUrl3 = 'https://apim-paco.azure-api.net/paco/secop/contractor/'+String(nameDepartment)+'?limit=5&sort=count&order=desc',
    targetUrl4 = 'https://apim-paco.azure-api.net/paco/secop/contractor/'+String(nameDepartment)+'?limit=5&sort=total&order=desc'


var completeURL = proxyUrl+targetUrl;
var completeURL2 = proxyUrl+targetUrl2;
var completeURL3 = proxyUrl+targetUrl3;
var completeURL4 = proxyUrl+targetUrl4;

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});


function plotCount(newData) {

  var Morris1 = new Morris.Line({
      // ID of the element in which to draw the chart.
      element: 'myFirstChart',
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
      xkey: 'year',
      // A list of names of data record attributes that contain y-values.
      ykeys: ['count'],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ['Valor'],
      resize: true,
      lineColors: ['#C14D9F'],
      smooth: false,
    });
}

function plotAmount(newData) {

  var Morris2 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'mySecondChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: newData,
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['total'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    yLabelFormat: function(y)  {
      return formatter.format(y/1000000)+' Mill';
    },
    labels: ['Valor'],
    resize: true,
    lineColors: ['#2CB4AC'],
  });
}

function areaCount(newData) {
  Morris.Area.prototype.fillForSeries = function(i)  {
    var color;
    return "10-#00416d-#ffffff";
    }

  Morris.Area({
    element: 'myFirstChart',
    data: newData,
    xkey: 'year',
    ykeys: ['count'],
    labels: ['valor'],
    resize: true,
  });
}

function areaAmount(newData) {
  Morris.Area.prototype.fillForSeries = function(i)  {
    var color;
    return "10-#00416d-#ffffff";
    }

  Morris.Area({
    element: 'mySecondChart',
    data: newData,
    xkey: 'year',
    ykeys: ['total'],
    labels: ['valor'],
    yLabelFormat: function(y)  {
      return formatter.format(y/1000000)+' Mill';
    },
    resize: true,
  });
}

var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];


fetch(targetUrl)
.then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
.then((data) => {

  var data2 = jQuery.extend(true, {}, data);
  amountData =[];
  for(var i in data) {
    amountData.push(data2[i]);
  }

  data.forEach(element => {
    element.year = String(element.year);
    delete element['DEPARTAMENTO'];
    delete element['total']
    })
    areaCount(data);

  amountData.forEach(element => {
    element.year = String(element.year);
    delete element['DEPARTAMENTO'];
    delete element['count']
    })
    areaAmount(amountData);
    }
  ))

  function formatDataCount(data) {
    var result = data.forEach(element => {
      element.year = String(element.year);
      delete element['DEPARTAMENTO'];
      delete element['total']
      })
    return result;
  }

  function formatDataAmount(data) {
    var result = data.forEach(element => {
      element.year = String(element.year);
      delete element['DEPARTAMENTO'];
      delete element['count']
      })
    return result;
  }

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

  fetch(targetUrl3)
  .then((response) => response.json() 
  .then((data) => { 
    data.forEach(function(elementName) { 
      $("<tr><td>" + elementName.contractor + "</td><td style='text-align: center'>" + elementName.count + "</td></tr>").appendTo("#contractors1")
    })
  }))

  function moneyFormay(x) {
    len = String(x).length;
    var i;
    var counter = 0;
    partialString = "";
    for (i=1; i<=len; i++) {
      if (counter == 3) {
        partialString = "."+String(x)[len-i];
        counter = 0;
      }
      else {
        partialString = String(x)[len-i]+partialString
      }
      counter = counter + 1;
    }
    return "$ "+partialString;
  }

  fetch(targetUrl4)
  .then((response) => response.json() 
  .then((data) => { 
    data.forEach(function(elementName) { 
      $("<tr><td>" + elementName.contractor + "</td><td style='text-align: center'>" + elementName.total + "</td></tr>").appendTo("#contractors2")
    })
  }))
 

  fetch(targetUrl2)
  .then((response) => response.json() 
  .then((data) => { 
    data.forEach(function(elementName) { 
      $("<tr><td>" + elementName.contractor_reference + "</td><td>" + elementName.contractor + "</td><td>" + elementName.entity + "</td><td style='text-align: center'>" + elementName.value + "</td><td>" + elementName.url + "</td></tr>").appendTo("#contracts")
    })
  }))
 