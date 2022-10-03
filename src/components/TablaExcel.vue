<template>
  <hot-table
  :rowHeaders= "true"
  :colWidths="[100,100, 100, 100, 100]"
  :colHeaders ="['Ford', 'Volvo', 'Toyota', 'Honda']"
  licenseKey="non-commercial-and-evaluation">
</hot-table>

  <body>
  </body>

</template>

<script lang="ts">
  import { HotTable } from '@handsontable/vue3';
  import { registerAllModules } from 'handsontable/registry';

  // register Handsontable's modules
  registerAllModules();

  export default({
    data() {
      return {
        // settings: {
        //   rowHeaders: "true",
        //   columns: [
        //     { data: 1, type: "text" },
        //     { data: 2, type: "text" },
        //     { data: 3, type: "text" },
        //     { data: 4, type: "text" },
        //     { data: 5, type: "text" }
        //     ]
        //   }
      };
    },
    components: {
      HotTable,
    }
  });
</script>
  
<style src="handsontable/dist/handsontable.full.css"></style>