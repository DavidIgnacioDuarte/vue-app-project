<template>
  <hot-table ref="hotTableComponent" :settings="settings"></hot-table>
</template>
  
<script lang="ts">
import { HotTable, HotColumn } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import * as Papa from "papaparse";

// register Handsontable's modules
registerAllModules();

export default {
    data() {
        return {
            settings: {
                colWidths: [80, 90, 130, 250, 220, 200, 200, 200, 200, 200, 150, 150, 150, 200, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
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
                contextMenu: true,
            },
        };
    },
    methods: {
        swapHotData: function (data) {
        data.shift();
        this.$refs.hotTableComponent.hotInstance.loadData(data);
        },
    },

    beforeMount() {
        Papa.parse("ejemplo_reclamos.csv", {
        download: true,
        complete: (results) => {
            this.swapHotData(results.data);
        },
        });
    },
    components: {
        HotTable,
        HotColumn
    },
};
</script>
<style src="handsontable/dist/handsontable.full.css">

</style>