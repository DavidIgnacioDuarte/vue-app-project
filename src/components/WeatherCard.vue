<template>

<button type="submit" v-on:click="get">Mostrar clima de Buenos Aires</button>

    <h1> Carta del clima </h1>

    <div class="d-flex justify-content-center">
    <div class="card weather p-5">

      <h1>{{ info.name }}, {{ info.sys.country }}</h1>
      <h2>
        <span>Temperatura:</span> {{ info.main.temp }} °F
        <span>Humedad:</span> {{ info.main.humidity }}
      </h2>
      <h2><span>Temperatura Mínima:</span> {{ info.main.temp_min }}°F</h2>
      <h2><span>Temperatura Máxima:</span> {{ info.main.temp_max }}°F</h2>
      <h2><span>Velocidad del Viento:</span> {{ info.wind.speed }}mph</h2>
      <h2><span>Presión Atmosférica:</span> {{ info.main.pressure }}</h2>
    </div>
  </div>

</template>


<script lang="ts">

    import axios from 'axios'
    
    export default {
        data() { 
            return {
                setInfo : false,
                info: {
                  name: '',
                  sys: {
                    country: ''
                  },
                  wind: {
                    speed: ''
                  },
                  main: {
                    temp: '',
                    humidity:'',
                    temp_min:'',
                    temp_max:'',
                    pressure: ''
                  }

                }
            }   
        },
        
        methods: {
            get() {
            axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires,ar&appid=375b5b72defecfdfccfa090d50f49db4')
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