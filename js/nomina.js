// nomina.js

$(document).ready(function() {
    $.ajax({
        url: "data/nomina.json",
        dataType: "json",
        success: function(data) {
            var table = $("<table class='table'>");
            var thead = $("<thead>").appendTo(table);
            var tbody = $("<tbody>").appendTo(table);

            var headerRow = $("<tr>").appendTo(thead);
            headerRow.append("<th>ID</th>");
            headerRow.append("<th>Fecha de Pago</th>");
            headerRow.append("<th>Profesor</th>");
            headerRow.append("<th>Días Trabajados</th>");
            headerRow.append("<th>Salario</th>");
            headerRow.append("<th>Retenciones</th>");
            headerRow.append("<th>Vales de Despensa</th>");

            $.each(data, function(index, item) {
                var row = $("<tr>").appendTo(tbody);
                row.append("<td>" + item.id + "</td>");
                row.append("<td>" + item.fecha_pago + "</td>");
                row.append("<td>" + item.profesor.nombre + "</td>");
                row.append("<td>" + item.dias_trabajados + "</td>");
                row.append("<td>$" + item.salario + "</td>");
                row.append("<td>$" + item.retenciones + "</td>");
                row.append("<td>$" + item.vales_despensa + "</td>");
            });

            $("#tableContainer").append(table);
        }
    });
});
