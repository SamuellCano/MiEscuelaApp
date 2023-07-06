$(document).ready(function () {
    $.ajax({
      url: "data/grupos.json",
      dataType: "json",
      success: function (data) {
        var table = $("<table>").addClass("table");
        var thead = $("<thead>").appendTo(table);
        var tbody = $("<tbody>").appendTo(table);
        var headers = [
          "ID",
          "Cuatrimestre",
          "Grupo",
          "Generación",
          "ID de carrera",
          "Carrera",
          "Jefe de grupo",
          "Email",
          "Profesor Tutor",
          "Email",
        ];

        var headerRow = $("<tr>").appendTo(thead);
        $.each(headers, function (index, header) {
          $("<th>").text(header).appendTo(headerRow);
        });

        $.each(data, function (index, item) {
          var row = $("<tr>").appendTo(tbody);
          $("<td>").text(item.id).appendTo(row);
          $("<td>").text(item.cuatrimestre).appendTo(row);
          $("<td>").text(item.grupo).appendTo(row);
          $("<td>").text(item.generacion).appendTo(row);
          $("<td>").text(item.carrera.id).appendTo(row);
          $("<td>").text(item.carrera.nombre).appendTo(row);
          $("<td>").text(item.jefe_grupo.nombre).appendTo(row);
          $("<td>").text(item.jefe_grupo.email).appendTo(row);
          $("<td>").text(item.profesor_tutor.nombre).appendTo(row);
          $("<td>").text(item.profesor_tutor.email).appendTo(row);
        });

        $("#listContainer").append(table);
      },
    });
  });