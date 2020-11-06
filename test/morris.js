$(document).ready(function () {
    var color_array = ['#03658C', '#7CA69E', '#F2594A', '#F28C4B', '#7E6F6A', '#36AFB2', '#9c6db2', '#d24a67', '#89a958', '#00739a', '#BDBDBD'];
    var browsersChart = Morris.Donut({
      element: 'browsers_chart',
      data   : [{"label":"Chrome","value":423},{"label":"Safari","value":75},{"label":"Firefox","value":147},{"label":"Android Browser","value":5},{"label":"Opera Next","value":4}],
      colors: color_array
    });
    browsersChart.options.data.forEach(function(label, i){
      var legendItem = $('<span></span>').text(label['label']).prepend('<i>&nbsp;</i>');
      legendItem.find('i').css('backgroundColor', browsersChart.options.colors[i]);
      $('#legend').append(legendItem)
    })
  });