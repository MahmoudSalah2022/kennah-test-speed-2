<template>
  <v-row justify="center" align="center" >
    <v-col lg="10" md="12" xs="4" id="apartcard" class="d-flex flex-row flex-wrap  align-start">
      <v-card
      v-for="(aprt, i) in apartments" :key="i"
        id="cardapart"
        class="mx-auto my-5"
        max-width="280"  
      >
        <v-img
          height="217"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title class="pb-0" color="fcolor--text">{{aprt.name}}</v-card-title>
        <v-card-text>
          <div class="text-subtitle-1">
            {{aprt.compound}}
          </div>
        </v-card-text>
        <v-col class="d-flex flex-row align-center">
          <div class="d-flex flex-row align-flex-end pr-5">
              <v-icon color="darkbg">mdi-account</v-icon>
              <h5>{{aprt.guest}}</h5>
          </div>
          <div class="d-flex flex-row align-flex-end">
              <v-icon color="darkbg">mdi-bed</v-icon>
              <h5>{{aprt.bedroom}}</h5>
          </div>
        </v-col>
        <v-col  class="d-flex flex-row align-center">
          <div class="d-flex flex-row align-flex-end pr-5">
              <v-icon color="darkbg">mdi-bathtub</v-icon>
              <h5>{{aprt.bathroom}}</h5>
          </div>
          <div class="d-flex flex-row align-flex-end">
              <v-icon color="darkbg">mdi-heart</v-icon>
              <h5>{{aprt.loveser}}</h5>
          </div>
        </v-col>
    
      </v-card>
    </v-col>
  </v-row>

  </template>
<script>
export default {
  data: () => ({
      apartments:[
        {name:'Saoirse', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Varenna', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Sequoia', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Melina', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Saoirse', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Varenna', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Sequoia', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
        {name:'Melina', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool'},
      ]
  }),
}
</script>

<style>
#apartcard{
  padding: 0;
  justify-content: flex-start;
}

#cardapart{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>