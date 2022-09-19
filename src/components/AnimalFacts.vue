<template>

<button type="submit" v-on:click="get">Mostrar</button>

<div v-show="setInfo">

    <h1> Carta del clima </h1>

    <div class="d-flex justify-content-center">
    <div class="card weather p-5">

      <h1>{{ info.name }}, {{ info.sys.country }}</h1>
      <h2>
        <span>Lon:</span> {{ info.coord.lon }} 
        <span>Lat:</span> {{ info.coord.lat }}
      </h2>
      <h2><span>Wind speed:</span> {{ info.wind.speed }}mph</h2>
      <h2><span>Wind deg:</span> {{ info.wind.deg }}&deg;</h2>
      <h2><span>Pressure:</span> {{ info.main.pressure }}</h2>
    </div>
  </div>

</div>

</template>


<script lang="ts">

    import axios from 'axios'
    
    export default {
        data() { 
            return {
                setInfo : false,
                info: null
            }   
        },
        
        methods: {
            get() {
            axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=Rye,uk&appid=375b5b72defecfdfccfa090d50f49db4')
            .then(response => (this.info = response.data))
            this.setInfo = true
            },
            setInfoToTrue() {
                this.setInfo = true
            }
        }
    }

</script>


<style scoped>

body {
  padding: 2rem;
}

.weather {
  span {
   color: #999
  }
}

</style>