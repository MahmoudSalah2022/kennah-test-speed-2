<template >
    <v-container color=" black" class="px-md-0 ">
        <v-row id="aboutus" justify="center" align="center" cols="12">
            <v-col sm="12" md="12" xl="12" lg="12" class="px-0">
                <div class="d-flex flex-column  darkbg mx-auto py-12 br-25 white--text rounded-lg">
                    <v-col cols="12" class="mb-0 pb-0">
                        <div class="d-flex flex-column" justify="center" align="flex-start">
                            <div class="font-weight-light text-capitalize text-h3">Kennah</div>
                        </div>
                    </v-col>
                    <v-col cols="12" class="mt-0 pt-0 ">
                        <div class="d-flex flex-column" justify="center" align="flex-start">
                            <div class="font-weight-light text-capitalize text-h5 "> Make Your Smail </div>
                        </div>
                    </v-col>
                    <v-col cols="12" class=" mb-0 pb-0">
                        <div class="d-flex flex-column" justify="center" align="flex-start">
                            <div class="font-weight-light text-capitalize text-body-1">Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s.</div>
                        </div>
                    </v-col>
                    <v-col cols="2" class=" mt-2 ">
                            <v-btn @click = "$router.push('/about-us')"> Know More</v-btn>
                    </v-col>
                </div>
            </v-col>
        </v-row>
        <v-row class="d-flex flex-sm-row flex-column" cols="12">
            <v-col id="rateing" xs="12" sm="4" md="4" xl="4" lg="4" class="pa-0 pb-2 pa-sm-0 pr-sm-2">
                <div class="d-flex  flex-column  scolor mx-auto py-12 br-25 white--text rounded-lg">
                    <v-col cols="12" class=" mb-0 pb-0">                        
                            <div class="font-weight-light text-capitalize text-h5 ">Kennah Experiences </div>   
                    </v-col>
                    <v-col cols="12" class="mt-0 pt-0">                        
                            <div class="font-weight-light text-capitalize text-h3">Review</div>   
                    </v-col>
                    <v-col cols="12" class=" mb-0 pb-0">                        
                            <div class="font-weight-light text-capitalize text-h2">4.5</div>  
                    </v-col>
                    <v-col cols="12 " class="mt-0 pt-0">                        
                            <v-rating background-color="strokstar lighten-3" color="fillstar" half-increments hover
                                length="5" size="26" value= "4.5" readonly></v-rating> 
                    </v-col>
                </div>
            </v-col>
            <v-col id="ondemindserv" xs="12" sm="8" md="8" xl="8" lg="8" class="pa-0 pt-1 pa-sm-0 pl-sm-1">
                <div class="d-flex  flex-column  fcolor mx-auto py-md-12 py-sm-9 br-25 white--text rounded-lg">
                    <v-col cols="12" class="mb-0 pb-0">
                            <div class="font-weight-light text-capitalize text-h3">Kennah</div>
                    </v-col>
                    <v-col cols="12" class="mt-0 pt-0 ">
                            <div class="font-weight-light text-capitalize text-h5 "> ON-DEMAND SERVICES </div>
                    </v-col>
                    <v-col cols="12" class=" mb-0 pb-0">
                            <div class="font-weight-light text-capitalize text-body-1">Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s.</div>
                    </v-col>
                    <v-col cols="3" class=" mt-2 ">
                            <v-btn @click = "$router.push('/on-demand')"> Know More</v-btn>
                    </v-col>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {

}
</script>

<style>

</style>