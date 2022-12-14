<template>
  <v-row justify="center" align="center" >
    <v-col lg="12" sm="12" md="12" xs="4" id="apartcard" class="d-flex flex-row flex-wrap  align-start">
      <v-card
      v-for="(aprt, i) in apartments" :key="i"
        id="cardapart"
        class="mx-auto mt-16"
        max-width="280"  
      >
        <v-img
          height="217"
          :src="aprt.img"
        ></v-img>
        <v-card-title class="pb-0" color="fcolor--text">{{aprt.name}}</v-card-title>
        <v-card-text>
          <div class="text-subtitle-1">
            {{aprt.compound}}
          </div>
        </v-card-text>
        <v-col class="d-flex flex-row align-center pt-7">
          <div class="d-flex flex-row align-flex-end pr-11">
              <v-icon color="darkbg " class="pr-1">mdi-account</v-icon>
              <h5 class="text-subtitle-2">{{aprt.guest}}</h5>
          </div>
          <div class="d-flex flex-row align-flex-end">
              <v-icon color="darkbg " class="pr-1">mdi-bed</v-icon>
              <h5 class="text-subtitle-2">{{aprt.bedroom}}</h5>
          </div>
        </v-col>
        <v-col  class="d-flex flex-row align-center pt-0">
          <div class="d-flex flex-row align-flex-end pr-5">
              <v-icon color="darkbg " class="pr-1">mdi-bathtub</v-icon>
              <h5 class="text-subtitle-2">{{aprt.bathroom}}</h5>
          </div>
          <div class="d-flex flex-row align-flex-end">
              <v-icon color="darkbg " class="pr-1">mdi-heart</v-icon>
              <h5 class="text-subtitle-2">{{aprt.loveser}}</h5>
          </div>
        </v-col>
        <v-col justify="center" align="center"  >
          <v-btn id="btnapart" large class="scolor">
            <v-col  class="d-flex flex-column ">
              <v-card-text id="price" class="pb-0 pt-2 white--text subtitle-1">
               {{aprt.price}} / Night
              </v-card-text>
              <v-card-text class="pb-0 pt-0 white--text font-weight-light">
                Check Availability
              </v-card-text>
            </v-col>
          </v-btn>
        </v-col>
      </v-card>
    </v-col>
  </v-row>

  </template>
<script>
export default {
  data: () => ({
      apartments:[
        {name:'Saoirse', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Saoirse Lake View Residence.webp'},
        {name:'Varenna', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Varenna Lake View Residence.webp'},
        {name:'Sequoia', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Sequoia Akoya.webp'},
        {name:'Melina', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Melina Akoya.webp'},
        {name:'Saoirse', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Saoirse Lake View Residence.webp'},
        {name:'Varenna', compound:'Lake View Residence', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Varenna Lake View Residence.webp'},
        {name:'Sequoia', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Sequoia Akoya.webp'},
        {name:'Melina', compound:'Akoya', guest:'6 Guests', bedroom:'3 bedrooms' , bathroom:'3 bathrooms', loveser:'Privte Pool', price:'135$', img:'/Melina Akoya.webp'},
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

#btnapart{
border-radius: 15px;
position: absolute;
width: 190px;
height: 45px;
left: 17%;
top: 410px;
}

#price{
  line-height: 10px;
}
</style>