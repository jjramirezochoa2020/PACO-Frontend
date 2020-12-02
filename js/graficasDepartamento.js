var nameDepartment = "";
var initialValue = "0"
document.getElementById('numberProcuraduria').innerHTML = String(initialValue);
document.getElementById('FNGSanctions').innerHTML = String(initialValue);
document.getElementById('SECOPPenalties').innerHTML = String(initialValue);
document.getElementById('numberProcuraduria4').innerHTML = String(initialValue);

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrlGlobalNumber = 'https://api-paco.azure-api.net/fa-query-paco/secop/departments/',
    targetUrlSECOP = 'https://api-paco.azure-api.net/fa-query-paco/secop/database/departments/',
    targetUrlStateSECOPI = "https://api-paco.azure-api.net/fa-query-paco/secop/status_contracts/departments/",
    targetUrlStateSECOPII = "https://api-paco.azure-api.net/fa-query-paco/secop/status_contracts/departments/",
    targetUrlTypeProcessSECOPI = "https://api-paco.azure-api.net/fa-query-paco/secop/process_type/departments/",
    targetUrlTypeProcessSECOPII = "https://api-paco.azure-api.net/fa-query-paco/secop/process_type/departments/",
    targeuUrlTypeContractsSECOPI = "https://api-paco.azure-api.net/fa-query-paco/secop/contract_type/departments/",
    targeuUrlTypeContractsSECOPII = "https://api-paco.azure-api.net/fa-query-paco/secop/contract_type/departments/",
    targetUrlMonthlyCount = "https://api-paco.azure-api.net/fa-query-paco/secop/contracts/year_month/departments/"

    targetUrlContracts = 'https://api-paco.azure-api.net/fa-query-paco/secop/contract/departments/',
    endUrlContracts = '?limit=5',
    targetUrlCountContractors = 'https://api-paco.azure-api.net/fa-query-paco/secop/contractors/departments/',
    endUrlCountContractors = '?limit=5&sort=count&order=desc',
    targetUrlAmountContractors = 'https://api-paco.azure-api.net/fa-query-paco/secop/contractors/departments/',
    endUrlAmountContractors = '?limit=5&sort=total&order=desc',

    targetUrlProcuraduria = 'https://api-paco.azure-api.net/fa-query-paco/siri/sanctions/departaments/',
    targetUrlFNG = "https://api-paco.azure-api.net/fa-query-paco/fgn/sanctions/departaments/",
    targetUrlSECOPPenalties = "https://api-paco.azure-api.net/fa-query-paco/secop/penalty/departaments/"


function updateUrl(targetUrl, filter, endUrl) {
  return targetUrl + String(filter) + endUrl
}

var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];

var monthDict = {
  1: '2020-01',
  2: '2020-02',
  3: '2020-03',
  4: '2020-04',
  5: '2020-05',
  6: '2020-06',
  7: '2020-07',
  8: '2020-08',
  9: '2020-09',
  10: '2020-10',
  11: '2020-11',
  12: '2020-12'
}

// var completeUrlGlobalNumber = proxyUrl+targetUrlGlobalNumber;
// var completeUrlSECOP = proxyUrl+targetUrlSECOP;
// var completeUrlContracts = proxyUrl+targetUrlContracts;
// var completeUrlCountContractors = proxyUrl+targetUrlCountContractors;
// var completeUrlAmountContractors = proxyUrl+targetUrlAmountContractors;

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

Morris.Area.prototype.fillForSeries = function(i)  {
  var color;
  return "10-#c4e7f2-#ffffff";
  }

var Morris1 = Morris.Area({
  element: 'myFirstChart',
  data: [{year: '2017', count: 0},
         {year: '2018', count: 0},
         {year: '2019', count: 0},
         {year: '2020', count: 0},
        ],
  xkey: 'year',
  ykeys: ['count'],
  labels: ['valor'],
  lineWidth: 2,
  resize: true,
  smooth: false,
});

  var Morris2 = Morris.Area({
  element: 'mySecondChart',
  data: [{year: '2017', count: 0},
    {year: '2018', count: 0},
    {year: '2019', count: 0},
    {year: '2020', count: 0},
   ],
  xkey: 'year',
  ykeys: ['total'],
  labels: ['valor'],
  yLabelFormat: function(y)  {
    return formatter.format(y/1000000)+' Mill';
  },
  lineWidth: 2,
  resize: true,
  smooth: false,
});


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

  var Morris3 = Morris.Donut({
    element: 'myThirdChart',
    data: [
      {value: 100, label: 'SECOP I'},
      {value: 0, label: 'SECOP II'},
    ],
    colors: ['#7a67d7', '#d9def9'],
    formatter: function (x) { return x}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris4 = Morris.Donut({
    element: 'myForthChart',
    data: [
      {value: 100, label: 'Ejecutado'},
      {value: 0, label: 'Liquidado'},
      {value: 0, label: 'En Borrador'},
      {value: 0, label: 'Suspendido'},
      {value: 0, label: 'Cancelado'},
    ],
    colors: ['#00aed1', '#45d9f0', '#79e1f1', '#a1ecfa'],
    formatter: function (x) { return x}
  }).on('click', function(i, row){
    console.log(i, row);
  });

  var Morris5 = Morris.Donut({
    element: 'myFifthChart',
    data: [
      {value: 100, label: 'Ejecutado'},
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

  var Morris6 = Morris.Donut({
    element: 'mySixthChart',
    data: [
      {value: 100, label: 'Ejecutado'},
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

  var Morris7 = Morris.Donut({
    element: 'mySeventhChart',
    data: [
      {value: 100, label: 'Ejecutado'},
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

  var Morris8 = Morris.Donut({
    element: 'myEighthChart',
    data: [
      {value: 100, label: 'Ejecutado'},
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

  var Morris9 = Morris.Donut({
    element: 'myNinthChart',
    data: [
      {value: 100, label: 'Ejecutado'},
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

  var Morris10 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myTenthChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { month: '2020-01', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-02', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-03', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-04', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-05', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-06', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-07', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-08', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-09', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-10', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-11', value1: 0, value2: 0, value3: 0, value4: 0 },
      { month: '2020-12', value1: 0, value2: 0, value3: 0, value4: 0 },
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'month',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value1', 'value2', 'value3', 'value4'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Año 2017', 'Año 2018', 'Año 2019', 'Año 2020'],
    resize: true,
    lineColors: ['#C14D9F', '#2CB4AC', '#51adcf', '#14274e'],
    xLabelFormat: function(x) {
      var month = months[new Date(x).getMonth()];
      return month;
    },
    smooth: true,
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


$("#main_selector_button").click(function(ev) {
  ev.preventDefault();
  nameDepartment = document.getElementById("main__selector__input").value;
  // document.getElementById('main__title').innerHTML = "Cifras Generales Contratación "+String(nameDepartment);
  nameDepartment = nameDepartment.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents
  query = targetUrlGlobalNumber + nameDepartment + "?start_year=2016";
  fetch(query)
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
      Morris1.setData(data);

    amountData.forEach(element => {
      element.year = String(element.year);
      delete element['DEPARTAMENTO'];
      delete element['count']
      })
      Morris2.setData(amountData)
      }
  ))

  fetch(targetUrlProcuraduria + nameDepartment)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        var complaintNumber = data[0].count;
        document.getElementById('numberProcuraduria').innerHTML = String(complaintNumber);
        document.getElementById('numberProcuraduria4').innerHTML = String(complaintNumber);
      }
    ))
  
  fetch(targetUrlFNG + nameDepartment)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        var complaintNumber = data[0].count;
        document.getElementById('FNGSanctions').innerHTML = String(complaintNumber);
      }
    ))

  fetch(targetUrlSECOPPenalties + nameDepartment)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        var complaintNumber = data[0].count;
        document.getElementById('SECOPPenalties').innerHTML = String(complaintNumber);
      }
    ))

})

  $("#main__button").click(function(ev) {
    ev.preventDefault();
    year = document.getElementById("yearButton__input").value;
    if (year=="all") {
      initial_year = "2017";
      end_year = "2020";
    }
    else {
      initial_year = year;
      end_year = year;
    }
    fetch(targetUrlSECOP + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)))
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) {
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.database});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris3.setData(newData);
        }
      ))

    fetch(targetUrlStateSECOPI + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop%20i&sort=count")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) {
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.ESTADO_DEL_PROCESO});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris4.setData(newData);
        }
      ))

    fetch(targetUrlStateSECOPI + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop%20ii&sort=count")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) { 
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.ESTADO_DEL_PROCESO});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris5.setData(newData);
        }
      ))

    fetch(targetUrlTypeProcessSECOPI + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop i")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) { 
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.process_type});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris6.setData(newData);
        }
      ))

    fetch(targeuUrlTypeContractsSECOPI + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop i")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) { 
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.contract_type});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris7.setData(newData);
        }
      ))

    fetch(targetUrlTypeProcessSECOPI + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop ii")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) { 
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.process_type});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris8.setData(newData);
        }
      ))

    fetch(targeuUrlTypeContractsSECOPI + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop ii")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) { 
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.contract_type});
            })
          }
          else {
            newData = [
              {value: 0, label: 'Sin registros'},
            ]
          }
          Morris9.setData(newData);
        }
      ))

    fetch(targetUrlMonthlyCount + nameDepartment + "?sort=month&order=asc"+"&start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)))
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          data.forEach(function(element) {
            newData.push({month: monthDict[element.month], value1: element.year_2017, value2: element.year_2018, value3: element.year_2019, value4: element.year_2020});
          })
          Morris10.setData(newData);
        }
      ))

    fetch(targetUrlContracts + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)) + '&limit=10&sort=value&order=desc')
    .then((response) => response.json() 
    .then((data) => {
      $("#contracts").find("tr:not(:first)").remove();
      data.forEach(function(elementName) { 
        $("<tr><td>" + elementName.contract_reference + "</td><td>" + elementName.contractor + "</td><td>" + elementName.entity + "</td><td style='text-align: center'>" + moneyFormat(elementName.value) + "</td><td style='text-align: center'><a href="+elementName.url+" target='blank' style='color: black;'>link</a></td></tr>").appendTo("#contracts")
      })
    }))
      
    fetch(targetUrlCountContractors + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)) + '&limit=10&sort=count&order=desc')
    .then((response) => response.json() 
    .then((data) => { 
      $("#contractors1").find("tr:not(:first)").remove(); 
      data.forEach(function(elementName) { 
        $("<tr><td>" + elementName.contractor + "</td><td style='text-align: center'>" + elementName.count + "</td></tr>").appendTo("#contractors1")
      })
    }))

    fetch(targetUrlAmountContractors + nameDepartment + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)) + '&limit=10&sort=total&order=desc')
    .then((response) => response.json() 
    .then((data) => {
      $("#contractors2").find("tr:not(:first)").remove();  
      data.forEach(function(elementName) { 
        $("<tr><td>" + elementName.contractor + "</td><td style='text-align: center'>" + moneyFormat(elementName.total) + "</td></tr>").appendTo("#contractors2")
      })
    }))

  })

  
 