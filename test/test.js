var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://pruebapacos.azurewebsites.net/api/HttpTrigger1?departamento=tolima'

var completeURL = proxyUrl+targetUrl;

// fetch(proxyUrl + targetUrl)
//     .then(res => res.json())
//     .then((out) => {
//         console.log('Output: ', out);
//     })
//     .catch(err => console.error(err));

var newData;

// fetch(completeURL)
//     .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
//     .then((data) => {
//         plot(data);
//     })
// )

var newData2 = [{"year": 2016, "count": 50}, {"year": 2017, "count": 43}, {"year": 2018, "count": 84}, {"year": 2019, "count": 39}, {"year": 2020, "count": 1}];

fetch(completeURL)
    .then((response) => response.json() // el objeto response puede ser convertido a text también como response.text, pero en este caso será una cadena de texto en lugar de un JSON. También se puede convertir en un BLOB (Binary Large Object)
    .then((data) => {
      data.forEach(element => {
      element.year = String(element.year);
      delete element['DEPARTAMENTO'];
      })
      plot(data);}
      ))


// const $container__dynamic = document.querySelector('.container__dynamic')

// function renderInfo(Cantidad2020) {
//     $container__dynamic.setAttribute('')
// }


function plot(newData) {

  var Morris1 = new Morris.Line({
      // ID of the element in which to draw the chart.
      element: 'container__dynamic',
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
      lineColors: ['#C14D9F', '#2CB4AC'],
    });
}


  
