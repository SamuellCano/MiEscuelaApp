// asingaturas.js

$(document).ready(function() {
    $.ajax({
        url: "data/asignaturas.json",
        dataType: "json",
        success: function(data) {
            var table = $("<table class='table table-striped'>");
            var headerRow = $("<tr>");
            headerRow.append("<th>ID</th>");
            headerRow.append("<th>Nombre</th>");
            headerRow.append("<th>Código</th>");
            headerRow.append("<th>Créditos</th>");
            headerRow.append("<th>Seriación</th>");
            headerRow.append("<th>Cuatrimestre</th>");
            headerRow.append("<th>Carrera</th>");
            table.append(headerRow);
            
            $.each(data, function(index, item) {
                var row = $("<tr>");
                row.append("<td>" + item.id + "</td>");
                row.append("<td>" + item.nombre + "</td>");
                row.append("<td>" + item.codigo + "</td>");
                row.append("<td>" + item.creditos + "</td>");
                row.append("<td>" + (item.seriacion || "") + "</td>");
                row.append("<td>" + item.cuatrimestre + "</td>");
                row.append("<td>" + item.carrera.nombre + "</td>");
                table.append(row);
            });
            
            $("#tableContainer").append(table);
        }
    });
});
