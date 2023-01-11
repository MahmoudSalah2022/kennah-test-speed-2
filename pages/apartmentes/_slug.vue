<template>
    <v-row justify="center" align="center">
      <v-col cols="12" xl="8" lg="12" sm="12" md="12" xs="12" class="d-flex flex-sm-row flex-column-reverse flex-wrap align-start pl-6 pl-md-2">
        <v-col cols="12" md="5" v-for="(aprt, i) in apartmentes" :key="i">
          <div id="apartdetail">
            <div class="d-flex flex-row mt-5 align-center ">
                <h3 class="font-weight-black" color="fcolor--text"> {{aprt.Name}} | </h3>
                <h3 class="font-weight-medium"> {{aprt.Compound}} </h3> 
            </div>
            <div class="text-subtitle-2">
                {{aprt.NumberGuest}} Guests / 
                {{aprt.NumberRooms}} BedRooms / 
                {{aprt.NumberBathRooms}} Baths /
                 Privte Pool</div>
            <div class="text-subtitle-1">{{aprt.Location}}</div>
          </div>
          <div id="reviewNum">
            <div class="d-flex flex-row mt-5  align-center">
                <div id="reviewStar" class="pr-2">
                    <v-icon color="black">mdi-star</v-icon>
                    <v-icon color="black">mdi-star</v-icon>
                    <v-icon color="black">mdi-star</v-icon>
                    <v-icon color="black">mdi-star</v-icon>
                    <v-icon color="black">mdi-star-half-full</v-icon>
                </div>
                <div id="reviewNumber">
                    <h1>4.8</h1>
                </div>
            </div>
            <div class="text-caption mt-0">Read our customer review</div>
          </div>
          <div id="amenities" class="d-flex flex-column mt-5">
            <div id="apartAmenitTitle">
                <h4 color="fcolor--text"> {{aprt.Name}} Amenities </h4>
            </div>
            <v-col  id="allAmenities" col="12" lg="12" md="12" sm="8" xs="1" class="pl-0">
                <v-col  class="d-flex flex-row mt-0 mb-2 flex-wrap pl-0 py-0 flex-gap-2">
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-silverware-fork-knife</v-icon> 
                        <h4 class="font-weight-light"> Kitchen </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-desk</v-icon> 
                        <h4 class="font-weight-light"> Dedicated workspace </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-wifi</v-icon> 
                        <h4 class="font-weight-light"> Wifi </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2  mt-2">
                        <v-icon color="black">mdi-parking</v-icon> 
                        <h4 class="font-weight-light"> Free driveway parking </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-television</v-icon> 
                        <h4 class="font-weight-light"> 55" HDTV </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2  mt-2">
                        <v-icon color="black">mdi-pool</v-icon> 
                        <h4 class="font-weight-light"> Private outdoor pool </h4> 
                    </div>
                </v-col>
                <!-- <div class="d-flex flex-row mt-2 mb-2">
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-parking</v-icon> 
                        <h4 class="font-weight-light"> Free driveway parking </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-television</v-icon> 
                        <h4 class="font-weight-light"> 55" HDTV </h4> 
                    </div>
                    <div class="oneAmenitie d-flex flex-row align-center mr-2">
                        <v-icon color="black">mdi-pool</v-icon> 
                        <h4 class="font-weight-light"> Private outdoor pool </h4> 
                    </div>

                </div> -->
            </v-col >
            <div id="seeAllAmenities" >
                <div class="text-caption">
                    Show All {{aprt.Name}} Amenities
                </div>
            </div>
          </div>
          <div id="resrvetionBtn" class="mt-4">
            <div class="d-flex flex-column flex-sm-row align-md-center">
                <div id="priceNight">
                    <v-btn elevation="0" color= "scolor white--text" class="d-none d-sm-flex rounded-l-xl rounded-r-0 mr-0 pt-5 pb-5 pr-15 pl-15">{{aprt.Price}}$ /Night</v-btn>
                    <v-btn elevation="0" color= "scolor white--text" class="d-flex d-sm-none rounded-xl  mr-0 pt-5 pb-5 pr-15 pl-15">{{aprt.Price}}$ /Night</v-btn>
                </div>
                <div id="soonresrvitiondate" >                    
                    <v-btn elevation="0" outlined color= "scolor white--text" class="d-sm-flex d-none rounded-r-xl rounded-l-0 ml-0 pt-5 pb-5 pr-9 pl-9">
                        <div class="d-flex flex-column align-center ">
                            <span>nearest reservation</span>
                            <span>15 jan - 21 Jan</span>
                        </div>
                    </v-btn>
                    <v-btn elevation="0" outlined color= "scolor white--text" class="d-flex d-sm-none rounded-xl  mt-3 ml-0 pt-5 pb-5 pr-9 pl-9">
                        <div class="d-flex flex-column align-center ">
                            <span>nearest reservation</span>
                            <span>15 jan - 21 Jan</span>
                        </div>
                    </v-btn>
                </div>
            </div>
          </div>
          <div id="apartGallary">

          </div>
        </v-col>
        <v-col cols="12" md="7">
            <!-- <GallaryInsideApart/> -->
        </v-col>
      </v-col>
    </v-row>
  </template>
  <style>
    #seeAllAmenities div{
        cursor: pointer;
        border-bottom: solid #813316 2px;
        width: 200px;
    }
    #priceNight .v-btn{
        border: solid 1px;
    }
  </style>
  <script>
  export default {
    data: () => ({
        apartmentes: [],
    }),

    methods: {              

    },
    mounted() {
        console.log(this.$route.params.slug);
      // return console.log(this.$route.fullPath);
      },
      
    async fetch() {
            await this.$axios.$get(`apartmentes/${this.$route.params.slug}`).then((res) => {
            console.log(res);
            if (res?.length > 0) {
                this.apartmentes = res;
            }
            });
        },


    fetchOnServer: false,
}

  </script>
  