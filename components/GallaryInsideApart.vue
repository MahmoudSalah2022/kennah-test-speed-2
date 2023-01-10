<template >
    <v-container class = "px-0">
                <v-row>
                    <v-col cols="8"
                    v-for="(apargall, i) in apartgallimage.mainimage" :key="i"
                    class="d-flex pr-0"
                    >
                        <v-img
                        width= "480"
                        height= "273"
                            :id = "apargall.img"
                            :src="apargall.img"
                            class="grey lighten-2"
                        >

                        </v-img>
                    </v-col>
                    <v-col cols="4">
                        <v-col
                        v-for="(apargall, i) in apartgallimage.smallimage2" :key="i"
                        class="d-flex px-0 pt-0"
                        >
                            <v-img
                            width= "180"
                            height= "128"
                                :id = "apargall.img"
                                :src="apargall.img"
                                class="grey lighten-2"
                            >

                            </v-img>
                        </v-col>
                        <v-col 
                        v-for="(apargall, i) in apartgallimage.smallimage3" :key="i"
                        class="d-flex px-0 pt-0 pb-0"
                        >
                            <v-img
                            width= "180"
                            height= "128"
                                :id = "apargall.img"
                                :src="apargall.img"
                                class="grey lighten-2"
                            >

                            </v-img>
                        </v-col>
                    </v-col>
                </v-row>
                <v-row class="mt-0">
                    <v-col cols="5"
                        v-for="(apargall, i) in apartgallimage.smallimage2" :key="i"
                        class="d-flex"
                        >
                            <v-img
                            width= "280"
                            height= "128"
                                :id = "apargall.img"
                                :src="apargall.img"
                                class="grey lighten-2"
                            >

                            </v-img>
                    </v-col>
                    <v-col cols="3"
                        v-for="(apargall, i) in apartgallimage.smallimage2" :key="i"
                        class="d-flex px-0"
                        >
                            <v-img
                            width= "180"
                            height= "128"
                                :id = "apargall.img"
                                :src="apargall.img"
                                class="grey lighten-2"
                            >

                            </v-img>
                    </v-col>
                    <v-col cols="4"
                        v-for="(apargall, i) in apartgallimage.smallimage3" :key="i"
                        class="d-flex "
                        >
                            <v-img
                            width= "180"
                            height= "128"
                                :id = "apargall.img"
                                :src="apargall.img"
                                class="grey lighten-2"
                            >

                            </v-img>
                    </v-col>
                </v-row>
    </v-container>
</template>
<script>
export default {
      data: () => ({
      apartgallimage:{
        mainimage:[
        {id: 1, img:'/Saoirse Lake View Residence.webp'},
      ],
      smallimage2:[
        {id: 2, img:'/Varenna Lake View Residence.webp'},
      ],
      smallimage3:[
        {id: 3, img:'/Sequoia Akoya.webp'},
      ],
      smallimage4:[
        {id: 4, img:'/Melina Akoya.webp'},
      ],
      smallimage5:[
        {id: 5, img:'/Saoirse Lake View Residence.webp'},
      ],
      }
  }),

}
</script>

<style>

</style>