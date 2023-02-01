<template>
  <v-row>
    <v-col xl="8" lg="12" sm="12" md="12" xs="12" id="apartcard" class="">
      <v-card
      v-for="(aprt, i) in apartmentes" :key="i"
        id="cardapart"
        class="mx-2 mt-16"
        max-width="280"
        width="280"  
      >
        <v-img
          height="217"
          :src="aprt.img"
        ></v-img>
        <v-card-title class="pb-0" color="fcolor--text">{{aprt.Name}}</v-card-title>
        <v-card-text>
          <div class="text-subtitle-1">
            {{aprt.Compound}}
          </div>
        </v-card-text>
        <v-col class="d-flex flex-row align-center pt-7">
          <div class="d-flex flex-row align-flex-end pr-11">
              <v-icon color="darkbg " class="pr-1">mdi-account</v-icon>
              <h5 class="text-subtitle-2">{{aprt.NumberGuest}} Guest</h5>
          </div>
          <div class="d-flex flex-row align-flex-end">
              <v-icon color="darkbg " class="pr-1">mdi-bed</v-icon>
              <h5 class="text-subtitle-2">{{aprt.NumberRooms}} Rooms</h5>
          </div>
        </v-col>
        <v-col  class="d-flex flex-row align-center pt-0">
          <div class="d-flex flex-row align-flex-end pr-5">
              <v-icon color="darkbg " class="pr-1">mdi-bathtub</v-icon>
              <h5 class="text-subtitle-2">{{aprt.NumberBathRooms}} Baths</h5>
          </div>
          <!-- <div class="d-flex flex-row align-flex-end">
              <v-icon color="darkbg " class="pr-1">mdi-heart</v-icon>
              <h5 class="text-subtitle-2">{{aprt.loveser}}</h5>
          </div> -->
        </v-col>
        <v-col justify="center" align="center"  >
          <NuxtLink :to="`apartmentes/${aprt.slug}`" >
          <v-btn id="btnapart" large class="scolor">
            <v-col  class="d-flex flex-column ">
              <v-card-text id="price" class="pb-0 pt-2 white--text subtitle-1">
               {{aprt.Price}}$ / Night
              </v-card-text>
              <v-card-text class="pb-0 pt-0 white--text font-weight-light">
                Check Availability
              </v-card-text>
            </v-col>
          </v-btn>
        </NuxtLink >
        </v-col>
      </v-card>
    </v-col>
  </v-row>

  </template>
<script>
export default {
  data: () => ({
        apartmentes: [],
    }),

    methods: {              

    },
    async fetch() {
            await this.$axios.$get("apartmentes").then((res) => {
            console.log(res);
            if (res?.length > 0) {
                this.apartmentes = res;
            }
            });
        },
 
    fetchOnServer: false,
}
</script>

<style>
@media screen and (max-width: 599px) {
  #apartcard{
  flex-direction: column !important;
  }
}

@media screen and (max-width: 955px) {
  #apartcard{
    justify-content: center !important;
  }
}

#apartcard{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
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