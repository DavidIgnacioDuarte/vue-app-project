<template>
  <hot-table :settings="settings"></hot-table>
</template>
  
<script lang="ts">
import { HotTable, HotColumn } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

export default {
  data() {
    return {
      settings: {
        data: [
          [1, "Cerrado", "Finalizado", "EX-2017-29999784-APN-AAIP", "Administración de Parques Nacionales", "Ministerio de Ambiente y Desarrollo Sostenible", "43066", "Emiliano Donadio", "E-MAIL", "Neuquén", "Silencio", "", "EX-2017-29999784-APN-AAIP", "PV-2017-30415871-APN-AAIP", "2017-07-12", "", 43374, "IF-2017-1809923-APN-AAIP", "Archivo", 43110, "Archivo por ampliacion de respuesta", "Se cerro declarando abstracto el reclamo por haberse contestado al requirente fuera de plazo al momento de solicitar el descargo", "GENE00028", "", "", "ASETTE", "", "", 43111, "Thursday", 43066, 14, 43374],
          [2, "Cerrado", "Finalizado", "EX-2017-30439758-APN-AAIP", "Registro Nacional de Puertos", "Ministerio de Transporte", "43068", "Arsenio Ruppel", "E-MAIL", "Santa Fe", "Silencio", "", "EX-2018-752574-APN-AAIP", "IF-2017-30633781-APN-AAIP", "2017 - 07 - 12", "", 43435, "IF-2018-01606094-APN-AAIP", "Archivo", 43109, "Archivo por ampliacion de respuesta", "Se cerro declarando abstracto el reclamo por haberse contestado al requirente fuera de plazo al momento de solicitar el descargo", "", "", "", "", "", "", 43115, "Monday", 43068, 20, 43435],
          [3, "Cerrado", "Finalizado", "EX-2017-30671310-APN-AAIP", "Administración de Parques Nacionales", "Ministerio de Ambiente y Desarrollo Sostenible", 43069, "Emiliano Donadio", "E-MAIL", "Neuquén", "Silencio", "", "EX-2017-30671310-APN-AAIP", "IF-2017-30678310-APN-AAIP", "2017 - 07 - 12", "", 43113, "IF-2017-33505235-APN-AAIP", "Archivo", 43087, "Archivo por ampliacion de respuesta", "Se cerro declarando abstracto el reclamo por haberse contestado al requirente fuera de plazo al momento de solicitar el descargo", "18/12 se notificó por mail al requirente", "", "", "", "", "", 43116, "Tuesday", 43069, 14, 43113],
          [4, "Cerrado", "Finalizado", "EX - 2017 - 30837261 - APN - AAIP", "Edesur S.A", "Empresa", 43070, "Miguel Angel Bolaños", "E - MAIL", "Buenos Aires", "Silencio", "", "SIN GDE", "NO 2017 - 31365223 - APN - AAIP", "14 / 12 / 2017", "", "43116", "IF - 2018 - 01605640 - APN - AAIP", "Archivo", 43109, "Archivo por ampliacion de respuesta", "Se cerro declarando abstracto el reclamo por haberse contestado al requirente fuera de plazo al momento de solicitar el descargo", "12 / 1 / 18 se notificó al reclamante y al sujeto obligado", "", "", "", "", "", 43117, "Wednesday", 43070, 1, 43116],
          [5, "Cerrado", "Finalizado", "EX - 2017 - 30827262 - APN - AAIP", "Gendarmería Nacional", "Ministerio de Seguridad", 43070, "Yrenarco Fernandez", "PAPEL", "Formosa", "Silencio", "", "SIN GDE", "NO - 2017 - 30879963 - APN - AAIP", "2017 - 08 - 12", "", 43116, "RESOL 2018 - 2 - APN - AAIP", "Intimacion", 43115, "Intimacion por denegatoria injustificada, Se hizo lugar el reclamo intimando a la entrega de la información.Por NO - 2018 - 03301230 - APN - SSAJ#MSG se informa que el 17 / 1 Gendarmería envió documentación al requirente", "Por NO - 2018 - 02771178 - APN - AAIP el 17 / 1 se notificó resolución a Seguridad", "", "", "Por Nota 2018 - 03301230APN - SSAJ#MSG contestan que gendarmería entrego información", "", "", "", 43117, "Wednesday", 43070, 8, 43116],
          [6, "Cerrado", "Finalizado", "EX - 2017 - 31370134 - APN - AAIP", "Edesur S.A", "Empresa", 43074, "Miguel Angel Bolaños", "E - MAIL", "Buenos Aires", "Silencio", "", "SIN GDE", "NO 2017 - 31373951 - APN - AAIP", "14 / 12 / 2017", "", 43118, "IF - 2018 - 01605943 - APN - AAIP", "Archivo", 43109, "Archivo por ampliacion de respuesta", "Se cerro declarando abstracto el reclamo por haberse contestado al requirente fuera de plazo al momento de solicitar el descargo", "12 / 1 / 18 se notificó al reclamante y al sujeto obligado", "", "", "", "", "", 43119, "Friday", 43074, 1, 43118]
        ],
        colWidths: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        colHeaders: ["ORDEN", "ESTADO", "PROXIMO_PASO", "N_DE_EXPEDIENTE", "SUJETO_OBLIGADO", "MINISTERIO_ORBITA", "FECHA_DE_PRESENTACION", "RECLAMANTE", "FORMA_DE_INGRESO", "PROVINCIA", "MOTIVO_DEL_RECLAMO", "SINTESIS_DEL_RECLAMO", "N_EXPEDIENTE_SOLICITUD", "N_NOTA_DE_TRASLADO", "1ER_VENCIMIENTO_NOTA_DESCARGO", "PASE_A_DNPDP", "VENCIMIENTO_RECLAMO", "N_DE ACTO ADMINISTRATIVO", "RESOLUCIÓN_DEL_RECLAMO", "FECHA_DE_ACTO_ADMINISTRATIVO", "SINTESIS_RESOLUCION", "OBSERVACIONES", "NOTIFICACION", "RESPONSABLE", "VENCIMIENTO_RESOLUCION", "CUMPLIMIENTO_RESOLUCION_NOTA", "INFORME_DE_CIERRE", "RESULTADO_INTIMACION", "Aux - Días Calculados", "Día,Aux-Fecha-Present", "Id-Provincia", "Aux-DateEng"],
        width: 1000,
        autoRowSize: true,
        licenseKey: "non-commercial-and-evaluation",
        columns: [
          { data: 0, type: "numeric" }, //Index
          {
            data: 1, type: 'dropdown', source: ["cerrado", "Abierto", "En Progreso"] //Estado
          },
          { data: 2, type: "text" },
          { data: 3, type: "text" },
          { data: 4, type: "text" },
          { data: 5, type: "text" },
          { data: 6, type: "text" },
          { data: 7, type: "text" },
          { data: 8, type: "text" },
          { data: 9, type: "text" },
          { data: 10, type: "text" },
          { data: 11, type: "text" },
          { data: 12, type: "text" },
          { data: 13, type: "text" },
          { data: 14, type: "text" },
          { data: 15, type: "text" },
          { data: 16, type: "text" },
          { data: 17, type: "text" },
          { data: 18, type: "text" },
          { data: 19, type: "text" },
          { data: 20, type: "text" },
          { data: 21, type: "text" },
          { data: 22, type: "text" },
          { data: 23, type: "text" },
          { data: 24, type: "text" },
          { data: 25, type: "text" },
          { data: 26, type: "text" },
          { data: 27, type: "text" },
          { data: 28, type: "text" },
          { data: 29, type: "text" },
          { data: 30, type: "text" },
          { data: 31, type: "text" },
        ],
        customBorders: true,
        dropdownMenu: true,
      },
    };
  },
  components: {
    HotTable,
    HotColumn
  },
};
</script>
<style src="handsontable/dist/handsontable.full.css">

</style>