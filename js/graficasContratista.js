var IDContractor = "";
var initialValue = "0"

document.getElementById('numberProcuraduria').innerHTML = String(initialValue);
document.getElementById('collusions').innerHTML = String(initialValue);
document.getElementById('SECOPPenalties').innerHTML = String(initialValue);
document.getElementById('fiscalResponsabilities').innerHTML = String(initialValue);

IDContractor = IDContractor.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrlGlobalNumber = ' https://paco-api-prod.azure-api.net/paco/secop/contractors/',
    targetUrlSECOP = ' https://paco-api-prod.azure-api.net/paco/secop/database/contractors/',
    targetUrlStateSECOPI = " https://paco-api-prod.azure-api.net/paco/secop/status_contracts/contractors/",
    targetUrlStateSECOPII = " https://paco-api-prod.azure-api.net/paco/secop/status_contracts/contractors/",
    targetUrlTypeProcessSECOPI = " https://paco-api-prod.azure-api.net/paco/secop/process_type/contractors/",
    targetUrlTypeProcessSECOPII = " https://paco-api-prod.azure-api.net/paco/secop/process_type/contractors/",
    targeuUrlTypeContractsSECOPI = " https://paco-api-prod.azure-api.net/paco/secop/contract_type/contractors/",
    targeuUrlTypeContractsSECOPII = " https://paco-api-prod.azure-api.net/paco/secop/contract_type/contractors/",
    targetUrlMonthlyCount = " https://paco-api-prod.azure-api.net/paco/secop/contracts/year_month/contractors/"

    targetUrlProcuraduria = ' https://paco-api-prod.azure-api.net/paco/siri/sanctions/contractors/',
    targetUrlCollusions = " https://paco-api-prod.azure-api.net/paco/sic/collusions/contractors/",
    targetUrlSECOPPenalties = " https://paco-api-prod.azure-api.net/paco/secop/penalty/contractors/",
    targetUrlFiscalResponsabilities = ' https://paco-api-prod.azure-api.net/paco/fiscal/contractors/',

    targetUrlContracts = ' https://paco-api-prod.azure-api.net/paco/secop/contract/contractors/',
    targetUrlCountEntities = ' https://paco-api-prod.azure-api.net/paco/secop/entities/contractors/',
    targetUrlCountCities = ' https://paco-api-prod.azure-api.net/paco/secop/municipalities/contractors/',
    
    targetUrlContractorName = ' https://paco-api-prod.azure-api.net/paco/secop/list_contractors/'


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
    formatter: function (x) { return numberFormat(x)}
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
    formatter: function (x) { return numberFormat(x)}
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
    formatter: function (x) { return numberFormat(x)}
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
    formatter: function (x) { return numberFormat(x)}
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
    formatter: function (x) { return numberFormat(x)}
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
    formatter: function (x) { return numberFormat(x)}
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
    formatter: function (x) { return numberFormat(x)}
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
    smooth: false,
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

  function numberFormat(x) {
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
    return partialString;
  }


$("#main_selector_button").click(function(ev) {
  ev.preventDefault();
  IDContractor = document.getElementById("main__selector__input").value;
  IDContractor =  IDContractor.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents

  fetch(targetUrlContractorName + IDContractor +'?sort=count&order=asc&limit=1')
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        if (data.length == 0) {
          var contractor_name = "";
          document.getElementById('contractorName').innerHTML = String(contractor_name);
          window.alert('El ID/NIT no se encuentra registrado en SECOP');
        }
        else {
          var contractor_name = data[0].contractor_name;
          document.getElementById('contractorName').innerHTML = String(contractor_name);
        }
      }
    ))

  
  
  query = targetUrlGlobalNumber + IDContractor + "?start_year=2016";
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

  fetch(targetUrlProcuraduria + IDContractor)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        if (data.length > 0) {
          var complaintNumber = data[0].count;
          document.getElementById('numberProcuraduria').innerHTML = numberFormat(complaintNumber);
        }
        else {
          document.getElementById('numberProcuraduria').innerHTML = initialValue;
        }
      }
    ))
  
  fetch(targetUrlCollusions + IDContractor)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        if (data.length > 0) {
          var complaintNumber = data[0].count;
          document.getElementById('collusions').innerHTML = numberFormat(complaintNumber);
        }
        else {
          document.getElementById('collusions').innerHTML = initialValue;
        }
      }
    ))

  fetch(targetUrlSECOPPenalties + IDContractor)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        if (data.length > 0) {
          var complaintNumber = data[0].count;
          document.getElementById('SECOPPenalties').innerHTML = numberFormat(complaintNumber);
        }
        else {
          document.getElementById('SECOPPenalties').innerHTML = initialValue;
        }
      }
    ))

  fetch(targetUrlFiscalResponsabilities + IDContractor)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        if (data.length > 0) {
          var complaintNumber = data[0].count;
          document.getElementById('fiscalResponsabilities').innerHTML = numberFormat(complaintNumber);
        }
        else {
          document.getElementById('fiscalResponsabilities').innerHTML = initialValue;
        }
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
    fetch(targetUrlSECOP + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)))
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

    fetch(targetUrlStateSECOPI + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop%20i&sort=count")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) {
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.process_status});
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

    fetch(targetUrlStateSECOPI + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop%20ii&sort=count")
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          if (data.length > 0) { 
            data.forEach(function(element) {
              newData.push({value: element.count, label: element.process_status});
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

    fetch(targetUrlTypeProcessSECOPI + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop i")
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

    fetch(targeuUrlTypeContractsSECOPI + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop i")
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

    fetch(targetUrlTypeProcessSECOPI + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop ii")
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

    fetch(targeuUrlTypeContractsSECOPI + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year))+"&database=secop ii")
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

    fetch(targetUrlMonthlyCount + IDContractor + "?sort=month&order=asc"+"&start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)))
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
          var newData = [];
          data.forEach(function(element) {
            newData.push({month: monthDict[element.month], value1: element.year_2017, value2: element.year_2018, value3: element.year_2019, value4: element.year_2020});
          })
          Morris10.setData(newData);
        }
      ))

    fetch(targetUrlContracts + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)) + '&limit=10&sort=value&order=desc')
    .then((response) => response.json() 
    .then((data) => {
      $("#contracts").find("tr:not(:first)").remove();
      data.forEach(function(elementName) { 
        $("<tr><td>" + elementName.contractor_reference + "</td><td>" + elementName.contractor + "</td><td>" + elementName.entity + "</td><td style='text-align: center'>" + moneyFormat(elementName.value) + "</td><td style='text-align: center'><a href="+elementName.url+" target='blank' style='color: black;'>link</a></td></tr>").appendTo("#contracts")
      })
    }))
      
    fetch(targetUrlCountEntities + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)) + '&limit=10&sort=count&order=desc')
    .then((response) => response.json() 
    .then((data) => { 
      $("#contractors1").find("tr:not(:first)").remove(); 
      data.forEach(function(elementName) { 
        $("<tr><td>" + elementName.entity + "</td><td style='text-align: center'>" + elementName.count + "</td></tr>").appendTo("#contractors1")
      })
    }))

    fetch(targetUrlCountCities + IDContractor + "?start_year="+String(parseInt(initial_year))+"&end_year="+String(parseInt(end_year)) + '&limit=10&sort=count&order=desc')
    .then((response) => response.json() 
    .then((data) => {
      $("#contractors2").find("tr:not(:first)").remove();  
      data.forEach(function(elementName) { 
        $("<tr><td style='text-align: center'>" + elementName.department + "</td><td style='text-align: center'>" + elementName.municipality + "</td><td style='text-align: center'>" + elementName.count + "</td></tr>").appendTo("#contractors2")
      })
    }))

  })

  
 