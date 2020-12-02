var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrlGlobalNumber = 'https://api-paco.azure-api.net/fa-query-paco/secop',
    targetUrlSECOP = 'https://api-paco.azure-api.net/fa-query-paco/secop/database',
    targetUrlStateSECOPI = "https://api-paco.azure-api.net/fa-query-paco/secop/status_contracts",
    targetUrlStateSECOPII = "https://api-paco.azure-api.net/fa-query-paco/secop/status_contracts",
    targetUrlMonthlyCount = "https://api-paco.azure-api.net/fa-query-paco/secop/contracts/year_month"


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

  var Morris10 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myTenthChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { month: '2020-01', value1: 0},
      { month: '2020-02', value1: 0},
      { month: '2020-03', value1: 0},
      { month: '2020-04', value1: 0},
      { month: '2020-05', value1: 0},
      { month: '2020-06', value1: 0},
      { month: '2020-07', value1: 0},
      { month: '2020-08', value1: 0},
      { month: '2020-09', value1: 0},
      { month: '2020-10', value1: 0},
      { month: '2020-11', value1: 0},
      { month: '2020-12', value1: 0},
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'month',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value1'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Año 2020'],
    resize: true,
    lineColors: ['#C14D9F', '#2CB4AC', '#51adcf', '#14274e'],
    xLabelFormat: function(x) {
      var month = months[new Date(x).getMonth()];
      return month;
    },
    smooth: true,
  });

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

  function moneyFormat(x) {
    return "$ "+String((x/1000000000000).toFixed(1)) + " Billones";
  }

  query = targetUrlGlobalNumber + "?start_year=2020";
  fetch(query)
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        var numberContracts = data[0].count;
        var amountContracts = data[0].total;
        document.getElementById('myFirstChart').innerHTML = numberFormat(numberContracts);
        document.getElementById('mySecondChart').innerHTML = moneyFormat(amountContracts);
    }
  ))

  fetch(targetUrlSECOP + "?start_year=2020&end_year=2020")
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

  fetch(targetUrlStateSECOPI + "?start_year='2020'&end_year='2020'&database=secop%20i&sort=count")
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

  fetch(targetUrlStateSECOPI + "?start_year='2020'&end_year='2020'&database=secop%20ii&sort=count")
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

  fetch(targetUrlMonthlyCount + "?sort=month&order=asc"+"&start_year='2020'&end_year='2020'")
  .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
  .then((data) => {
        var newData = [];
        data.forEach(function(element) {
          newData.push({month: monthDict[element.month], value1: element.year_2020});
        })
        Morris10.setData(newData);
      }
    ))


  
 