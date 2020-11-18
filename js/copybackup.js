var nameDepartment = sessionStorage.getItem("nameDepartment");
document.getElementById('main__title').innerHTML = "Cifras Generales Contratación "+String(nameDepartment);

nameDepartment = nameDepartment.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrlGlobalNumber = 'https://api-paco.azure-api.net/fa-query-paco/secop/departments/'+String(nameDepartment),
    targetUrlSECOP = 'https://api-paco.azure-api.net/fa-query-paco/secop/database/'+String(nameDepartment),
    targetUrlStateSECOPI = "",
    targetUrlStateSECOPII = "",
    targetUrlContracts = 'https://api-paco.azure-api.net/fa-query-paco/secop/contract/'+String(nameDepartment)+'?limit=5',
    targetUrlCountContractors = 'https://api-paco.azure-api.net/fa-query-paco/secop/contractor/'+String(nameDepartment)+'?limit=5&sort=count&order=desc',
    targetUrlAmountContractors = 'https://api-paco.azure-api.net/fa-query-paco/secop/contractor/'+String(nameDepartment)+'?limit=5&sort=total&order=desc'


var completeUrlGlobalNumber = proxyUrl+targetUrlGlobalNumber;
var completeUrlSECOP = proxyUrl+targetUrlSECOP;
var completeUrlContracts = proxyUrl+targetUrlContracts;
var completeUrlCountContractors = proxyUrl+targetUrlCountContractors;
var completeUrlAmountContractors = proxyUrl+targetUrlAmountContractors;

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
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

function areaCount(newData, elementName) {
  Morris.Area.prototype.fillForSeries = function(i)  {
    var color;
    return "10-#c4e7f2-#ffffff";
    }

  Morris.Area({
    element: elementName,
    data: newData,
    xkey: 'year',
    ykeys: ['count'],
    labels: ['valor'],
    lineWidth: 2,
    resize: true,
  });
}

function areaAmount(newData, elementName) {
  Morris.Area.prototype.fillForSeries = function(i)  {
    var color;
    return "10-#c4e7f2-#ffffff";
    }

  Morris.Area({
    element: elementName,
    data: newData,
    xkey: 'year',
    ykeys: ['total'],
    labels: ['valor'],
    yLabelFormat: function(y)  {
      return formatter.format(y/1000000)+' Mill';
    },
    lineWidth: 2,
    resize: true,
  });
}

function donutPlot(newData, color, elementName) {
  Morris.Donut({
    element: elementName,
    data: newData,
    colors: color,
    formatter: function (x) { return x}
  }).on('click', function(i, row){
    console.log(i, row);
  });
}


var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];


  var Morris3 = Morris.Donut({
    element: 'myThirdChart',
    data: [
      {value: 0, label: 'SECOP I'},
      {value: 0, label: 'SECOP II'},
    ],
    colors: ['#cc0e74', '#ffcbcb'],
    formatter: function (x) { return x}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris4 = Morris.Donut({
    element: 'myForthChart',
    data: [
      {value: 0, label: 'Ejecutado'},
      {value: 0, label: 'Liquidado'},
      {value: 0, label: 'En Borrador'},
      {value: 0, label: 'Suspendido'},
      {value: 0, label: 'Cancelado'},
    ],
    colors: ['#00aed1', '#08bbdc', '#45d9f0', '#79e1f1', '#a1ecfa'],
    formatter: function (x) { return x}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris5 = Morris.Donut({
    element: 'myFifthChart',
    data: [
      {value: 0, label: 'Ejecutado'},
      {value: 0, label: 'Liquidado'},
      {value: 0, label: 'En Borrador'},
      {value: 0, label: 'Suspendido'},
      {value: 0, label: 'Cancelado'},
    ],
    colors: ['#3866d6', '#477be6', '#5e94f8', '#77baff', '#9dcefd'],
    formatter: function (x) { return x}
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

  function moneyFormat(x) {
    var i;
    var partialString = "";
    len = String(x).length;
    for (i=1; i<=len; i++) {
      if ((i-1)%3 == 0) {
        if (i == 1) {
          partialString = String(x)[len-i]
        }
        else {
          partialString = String(x)[len-i]+"."+partialString;
        }
      }
      else {
        partialString = String(x)[len-i]+partialString;
      }
    }
    return "$ "+partialString;
  }

var colorDonut1 = ['#d9def9', '#7a67d7'];
var colorDonut2 = ['#00aed1', '#08bbdc', '#45d9f0', '#79e1f1', '#a1ecfa'];
var colorDonut3 = ['#3866d6', '#477be6', '#5e94f8', '#77baff', '#9dcefd'];

initialDataDonut1 = [{value: 0, label: 'Ejecutado'}, {value: 0, label: 'Liquidado'}, {value: 0, label: 'En Borrador'}, {value: 0, label: 'Suspendido'}, {value: 0, label: 'Cancelado'}]

fetch(targetUrlGlobalNumber)
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
    areaCount(data, 'myFirstChart');

  amountData.forEach(element => {
    element.year = String(element.year);
    delete element['DEPARTAMENTO'];
    delete element['count']
    })
    areaAmount(amountData, 'mySecondChart');
    }
  ))

// fetch(targetUrlSECOP)
// .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
// .then((data) => {
//       var newData = [];
//       data.forEach(function(element) {
//         newData.push({value: element.count, label: element.data_base});
//       })
//       Morris3.setData(newData);
//     }
//   ))

  // fetch(targetUrlContracts)
  // .then((response) => response.json() 
  // .then((data) => { 
  //   data.forEach(function(elementName) { 
  //     $("<tr><td>" + elementName.contractor_reference + "</td><td>" + elementName.contractor + "</td><td>" + elementName.entity + "</td><td style='text-align: center'>" + moneyFormat(elementName.value) + "</td><td style='text-align: center'><a href="+ elementName.url +" target='blank'>link</a></td></tr>").appendTo("#contracts")
  //   })
  // }))

  // fetch(targetUrlCountContractors)
  // .then((response) => response.json() 
  // .then((data) => { 
  //   data.forEach(function(elementName) { 
  //     $("<tr><td>" + elementName.contractor + "</td><td style='text-align: center'>" + elementName.count + "</td></tr>").appendTo("#contractors1")
  //   })
  // }))

  // fetch(targetUrlAmountContractors)
  // .then((response) => response.json() 
  // .then((data) => { 
  //   data.forEach(function(elementName) { 
  //     $("<tr><td>" + elementName.contractor + "</td><td style='text-align: center'>" + moneyFormat(elementName.total) + "</td></tr>").appendTo("#contractors2")
  //   })
  // }))
 
  
 