<template>
  <hot-table :settings="settings"></hot-table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { HotTable } from '@handsontable/vue3';
  import { registerAllModules } from 'handsontable/registry';

  // register Handsontable's modules
  registerAllModules();

  export default defineComponent({
    data() {
      return {
          settings: {
          data: [
            // ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
            ['2016', 10, 11, 12, 13],
            ['2017', 20, 11, 14, 13],
            ['2018', 30, 15, 12, 13]
          ],
          colWidths: [150, 150, 150, 150, 150, 150],
            colHeaders: ['Ford', 'Volvo', 'Toyota', 'Honda'],
            rowHeaders: true,
            licenseKey: 'non-commercial-and-evaluation',
            columns: [
              { data: 0, type: "text" },
              { data: 1, type: "text" },
              { data: 2, type: "text" },
              { data: 3, type: "text" },
            ]
          }
      };
    },
    components: {
      HotTable,
    }
  });
</script>
  
<style src="handsontable/dist/handsontable.full.css"></style>