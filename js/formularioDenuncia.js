var formData = new FormData();

var nameForm;
var departmentForm;
var municipalityForm;
var titleForm;
var involvedForm;
var descriptionForm;
var fileInputElement;

$("#buttonForm").click(function(ev) {
    ev.preventDefault();
    console.log('test');
    nameForm = document.getElementById("nameForm").value;
    departmentForm = document.getElementById("departmentForm").value;
    municipalityForm = document.getElementById("municipalityForm").value;
    titleForm = document.getElementById("titleForm").value;
    involvedForm = document.getElementById("involvedForm").value;
    descriptionForm = document.getElementById("factsForm").value;
    fileInputElement = document.getElementById('uploaded_fileForm').files[0];
    console.log('test');

    formData.append('name', nameForm);
    formData.append('department', departmentForm);
    formData.append('municipality', municipalityForm);
    formData.append('title', titleForm);
    formData.append('involved', involvedForm);
    formData.append('facts', descriptionForm);
    formData.append('file', fileInputElement);

    var request = new XMLHttpRequest();
    request.open("POST", "https://paco-api-prod.azure-api.net/paco/denuncia");
    request.send(formData);

    document.getElementById('complaintform').reset();
    window.alert("Denuncia enviada");
   
})