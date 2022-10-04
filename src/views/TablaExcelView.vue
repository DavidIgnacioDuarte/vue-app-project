<template>
  <div>
    <main id="centradoTabla">
      <hot-table :settings="settings"></hot-table>
    </main>
  </div>
</template>

<script lang="ts">
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

export default {
  data() {
    return {
      settings: {
        data: [
          ["1","Cerrado","Finalizado","EX-2017-29999784-APN-AAIP","Administración de Parques Nacionales","Ministerio de Ambiente y Desarrollo Sostenible","43066","Emiliano Donadio","E-MAIL","Neuquén","Silencio","","EX-2017-29999784-APN-AAIP","PV-2017-30415871-APN-AAIP","2017-07-12","",43374,"IF-2017-1809923-APN-AAIP","Archivo",43110,"Archivo por ampliacion de respuesta","Se cerro declarando abstracto el reclamo por haberse contestado al requirente fuera de plazo al momento de solicitar el descargo","GENE00028","","","ASETTE","","",43111,"Thursday",43066,14,43374],
        ],
        colWidths: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150],
        colHeaders: ["ORDEN","ESTADO","PROXIMO_PASO","N_DE_EXPEDIENTE","SUJETO_OBLIGADO","MINISTERIO_ORBITA","FECHA_DE_PRESENTACION","RECLAMANTE","FORMA_DE_INGRESO","PROVINCIA","MOTIVO_DEL_RECLAMO","SINTESIS_DEL_RECLAMO","N_EXPEDIENTE_SOLICITUD","N_NOTA_DE_TRASLADO","1ER_VENCIMIENTO_NOTA_DESCARGO","PASE_A_DNPDP","VENCIMIENTO_RECLAMO","N_DE ACTO ADMINISTRATIVO","RESOLUCIÓN_DEL_RECLAMO","FECHA_DE_ACTO_ADMINISTRATIVO","SINTESIS_RESOLUCION","OBSERVACIONES","NOTIFICACION","RESPONSABLE","VENCIMIENTO_RESOLUCION","CUMPLIMIENTO_RESOLUCION_NOTA","INFORME_DE_CIERRE","RESULTADO_INTIMACION","Aux - Días Calculados","Día,Aux-Fecha-Present","Id-Provincia","Aux-DateEng"],
        rowHeaders: true,
        width: 2000,
        licenseKey: "non-commercial-and-evaluation",
        columns: [
          { data: 0, type: "text" },
          { data: 1, type: "text" },
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
      },
    };
  },
  components: {
    HotTable,
  },
};
</script>

<style src="handsontable/dist/handsontable.full.css">
hot-table{
  text-align: center;
  margin: auto;
}
</style>
2