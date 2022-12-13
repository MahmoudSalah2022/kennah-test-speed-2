<template >
    <v-container >
        <v-row align="center">
            <v-col cols="12" sm="12" md="12" lg="10" >
                <nav  class="d-none d-md-flex justify-center align-center mt-3 mb-3">
                    <v-col cols="2">
                    <div justify="center" align="center">
                        <v-img
                        height="46"
                        width="92"
                        src="/Mask group (1).webp"
                        contain
                        ></v-img>
                    </div>
                    </v-col>
                    <v-col cols="6" >
                        <div id="searchbar" class="d-flex white elevation-4 rounded-xl" justify="center" align="center">
                            <div>Check in <strong>15 Jan</strong> </div>
                            <div>|</div>
                            <div>Check in <strong> 21 Jan</strong></div>
                            <div>|</div>
                            <div>Guest - 1 +</div>
                            <div>
                            <v-icon color="black">mdi-account</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col id="flacur" cols="1" >
                        <div class="d-flex flex-row" >
                            <v-btn
                            elevation="0"
                            class =" rounded-l-xl rounded-r-0" color="scolor white--text"
                            large
                            >
                                <v-img
                                class =" rounded-l-xl rounded-r-0"
                                src="/Egypt (EG).webp"
                                contain
                                ></v-img>
                            </v-btn>
                            <v-btn
                            width="42px"
                            class ="rounded-r-xl rounded-l-0"
                            color="scolor scolor--text" outlined 
                            large
                            >EGP</v-btn>
                        </div>
                    </v-col>
                    <v-col cols="3" md="2" >
                        <div class="d-flex flex-row ml-5" justify="center" align="center">
                            <v-btn
                            depressed
                            class ="rounded-l-xl rounded-r-0" color="scolor white--text "
                            large
                            > Make Money</v-btn>
                            <v-btn
                            class ="rounded-r-xl rounded-l-0"
                            color="scolor scolor--text" outlined 
                            large
                            >Make Reserviton</v-btn>
                        </div>
                    </v-col>
                </nav>
                <nav  class="d-md-none d-flex justify-center align-center mt-3 mb-3">
                    <v-col cols="2" >
                    <div justify="center" align="center">
                        <v-img
                        height="46"
                        width="92"
                        src="/Mask group (1).webp"
                        contain
                        ></v-img>
                    </div>
                    </v-col>
                    <v-col cols="10" >
                        <div id="searchbar" class="d-flex white elevation-4 rounded-xl" justify="center" align="center">
                            <div>Check in <strong>15 Jan</strong> </div>
                            <div>|</div>
                            <div>Check in <strong> 21 Jan</strong></div>
                            <div>|</div>
                            <div>Guest - 1 +</div>
                            <div>
                            <v-icon color="black">mdi-account</v-icon>
                            </div>
                        </div>
                    </v-col>

                </nav>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {

}
</script>

<style>
#searchbar {
    height: 44px;
    display: flex !important;
    justify-content: space-evenly;
    align-items: center;
}
#flacur .v-btn {
  min-width: 42px !important; 
  width: 42px !important;
}
</style>