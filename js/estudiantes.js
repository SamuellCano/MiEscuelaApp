$(document).ready(function() {
    $.ajax({
        url: "data/estudiantes.json",
        dataType: "json",
        success: function(data) {
            var table = $("<table>").addClass("table");
            var thead = $("<thead>").appendTo(table);
            var tbody = $("<tbody>").appendTo(table);
            var headers = ["ID", "Nombre", "Apellido paterno", "Apellido materno", "Fecha nacimiento","Correo electronico","Telefono","Direccion", "Carrera"];

            var headerRow = $("<tr>").appendTo(thead);
            $.each(headers, function(index, header) {
                $("<th>").text(header).appendTo(headerRow);
            });

            $.each(data, function(index, item) {
                var row = $("<tr>").appendTo(tbody);
                $("<td>").text(item.id).appendTo(row);
                $("<td>").text(item.nombre).appendTo(row);
                $("<td>").text(item.apellido_paterno).appendTo(row);
                $("<td>").text(item.apellido_materno).appendTo(row);
                $("<td>").text(item.fecha_nacimiento).appendTo(row);
                $("<td>").text(item.correo_electronico).appendTo(row);
                $("<td>").text(item.telefono).appendTo(row);
                $("<td>").text(item.direccion).appendTo(row);
                $("<td>").text(item.carrera.nombre).appendTo(row);
            });

            $("#listContainer").append(table);
        }
    });
});