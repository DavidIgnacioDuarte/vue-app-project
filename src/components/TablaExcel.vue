<template>
    <hot-table ref="hotTableComponent" :settings="settings"></hot-table>
</template>
  
<script lang="ts">
import { HotTable, HotColumn } from "@handsontable/vue3";
import { registerAllModules } from "handsontable/registry";
import * as Papa from "papaparse";
import Handsontable from 'handsontable';

// register Handsontable's modules
registerAllModules();

function semaphoreRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);

    const data = instance.getData()[row][31]; // Magic number :-(
    if (data > 15) {
        td.style.backgroundColor = "red";
    } else if (data > 5) {
        td.style.backgroundColor = "yellow";
    }
}
Handsontable.renderers.registerRenderer('semaphoreRenderer', semaphoreRenderer);

export default {
    data() {
        return {
            settings: {
                colWidths: [80, 90, 130, 250, 220, 200, 200, 200, 200, 200, 150, 150, 150, 200, 150, 150, 150, 150, 150, 150, 150, 350, 250, 150, 150, 250, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
                colHeaders: ["ORDEN", "ESTADO", "PROXIMO_PASO", "N_DE_EXPEDIENTE", "SUJETO_OBLIGADO", "MINISTERIO_ORBITA", "FECHA_DE_PRESENTACION", "RECLAMANTE", "FORMA_DE_INGRESO", "PROVINCIA", "MOTIVO_DEL_RECLAMO", "SINTESIS_DEL_RECLAMO", "N_EXPEDIENTE_SOLICITUD", "N_NOTA_DE_TRASLADO", "1ER_VENCIMIENTO_NOTA_DESCARGO", "PASE_A_DNPDP", "VENCIMIENTO_RECLAMO", "N_DE ACTO ADMINISTRATIVO", "RESOLUCIÓN_DEL_RECLAMO", "FECHA_DE_ACTO_ADMINISTRATIVO", "SINTESIS_RESOLUCION", "OBSERVACIONES", "NOTIFICACION", "RESPONSABLE", "VENCIMIENTO_RESOLUCION", "CUMPLIMIENTO_RESOLUCION_NOTA", "INFORME_DE_CIERRE", "RESULTADO_INTIMACION", "Aux - Días Calculados", "Día","Aux-Fecha-Present", "Id-Provincia", "Aux-DateEng"],
                width: "100%",
                autoRowSize: true,
                licenseKey: "non-commercial-and-evaluation",
                columns: [
                    { data: "ORDEN", type: "numeric", readOnly: true }, //Index
                    {
                        data: "ESTADO", type: 'dropdown', source: ["Cerrado", "Abierto", "En Progreso"] //Estado
                    },
                    { data: "PROXIMO_PASO", type: "text" },
                    { data: "N_DE_EXPEDIENTE", type: "text" },
                    { data: "SUJETO_OBLIGADO", type: "text" },
                    { data: "MINISTERIO_ORBITA", type: "text" },
                    {
                        data: "FECHA_DE_PRESENTACION",
                        type: 'date',
                        dateFormat: 'DD/MM/YY',
                        correctFormat: true,
                        defaultDate: '01/01/1900',
                        // datePicker additional options (see https://github.com/dbushell/Pikaday#configuration)
                        datePickerConfig: {
                            // First day of the week (0: Sunday, 1: Monday, etc)
                            firstDay: 0,
                            // showWeekNumber: true,
                            numberOfMonths: 1,
                            disableDayFn: function(date) {
                                // Disable Sunday and Saturday
                                return date.getDay() === 0 || date.getDay() === 6;
                            }
                        }
                    },
                    { data: "RECLAMANTE", type: "text" },
                    { data: "FORMA_DE_INGRESO", type: "text" },
                    { data: "PROVINCIA", type: "text" },
                    { data: "MOTIVO_DEL_RECLAMO", type: "text" },
                    { data: "SINTESIS_DEL_RECLAMO", type: "text" },
                    { data: "N_EXPEDIENTE_SOLICITUD", type: "text" },
                    { data: "N_NOTA_DE_TRASLADO", type: "text" },
                    { data: "1ER_VENCIMIENTO_NOTA_DESCARGO", type: "text" },
                    { data: "PASE_A_DNPDP", type: "text" },
                    { data: "VENCIMIENTO_RECLAMO", type: "text" },
                    { data: "N_DE ACTO ADMINISTRATIVO", type: "text" },
                    { data: "RESOLUCIÓN_DEL_RECLAMO", type: "text" },
                    { data: "FECHA_DE_ACTO_ADMINISTRATIVO", type: "text" },
                    { data: "SINTESIS_RESOLUCION", type: "text" },
                    { data: "OBSERVACIONES", type: "text" },
                    { data: "NOTIFICACION", type: "text" },
                    { data: "RESPONSABLE", type: "text" },
                    { data: "VENCIMIENTO_RESOLUCION", type: "text" },
                    { data: "CUMPLIMIENTO_RESOLUCION_NOTA", type: "text" },
                    { data: "INFORME_DE_CIERRE", type: "text" },
                    { data: "RESULTADO_INTIMACION", type: "text" },
                    { data: "Aux - Días Calculados", type: "text" },
                    { data: "Día", type: "text" },
                    { data: "Aux-Fecha-Present", type: "text" },
                    { data: "Id-Provincia", type: "text" },
                    { data: "Aux-DateEng", type: "text" },
                    { data: "Prueba", type: "text" },
                ],
                customBorders: true,
                dropdownMenu: true,
                contextMenu: true,
                fixedColumnsLeft: 4,
                cells(row, col) {
                    return { renderer: 'semaphoreRenderer' };
                }                    
            },
        };
    },
    methods: {
        swapHotData: function (data) {
            data.forEach(rowData => {
                Object.defineProperty(rowData, 'Prueba', {
                    get() { return this["Día"] + " Dinámico"}
                })
            })
            this.$refs.hotTableComponent.hotInstance.loadData(data);
        },
    },

    beforeMount() {
        Papa.parse("ejemplo_reclamos.csv", {
            download: true,
            header: true,
            complete: ({ data }) => {
                this.swapHotData(data);
            },
        });
    },
    components: {
        HotTable
    },
};
</script>
<style src="handsontable/dist/handsontable.full.css" />
