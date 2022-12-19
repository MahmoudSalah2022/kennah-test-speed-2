<template>
    <v-row justify="center" align="center">
      <v-col xl="8" lg="12" sm="12" md="12" xs="4" class="d-flex flex-row">
        <v-card flat>
          <div id="apartdetail">
            <div class="d-flex flex-row mt-5 align-center ">
                <h3 class="font-weight-black" color="fcolor--text"> Saoirse | </h3>
                <h3 class="font-weight-medium"> Lake View Residence </h3> 
            </div>
            <div class="text-subtitle-2">3 Guests / 3 BedRooms / 3 Baths / Privte Pool</div>
            <div class="text-subtitle-1">New Cairo, Cairo, Egypt</div>
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
                <h4 color="fcolor--text"> Saoirse Amenities </h4>
            </div>
            <div id="allAmenities" md="4">
                <div class="d-flex flex-row mt-2 mb-2">
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
                </div>
                <div class="d-flex flex-row mt-2 mb-2">
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

                </div>
            </div>
            <div id="seeAllAmenities" >
                <div class="text-caption">
                    Show All Saoirse Amenities
                </div>
            </div>
          </div>
          <div id="resrvetionBtn">

          </div>
          <div id="apartGallary">

          </div>
        </v-card>
      </v-col>
    </v-row>
  </template>
  <style>
    #seeAllAmenities div{
        cursor: pointer;
        border-bottom: solid #813316 2px;
        width: 158px;
    }
  </style>
  <script>
  export default {
  
  }
  </script>
  