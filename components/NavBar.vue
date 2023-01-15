
<template >
    <v-container >
        <v-row align="center" class="justify-center align-center">
            <v-col cols="12" sm="12" md="10" xl="8" lg="12" >
                <nav  class="d-none d-md-flex justify-center align-center mt-3 mb-3">
                    <v-col cols="2" class="pl-0" >
                        <v-col @click = "$router.push('/')" id="website-logo" class="d-flex flex-row justify-start pl-0 pr-0"  align="center">
                            <v-img
                            height="46" width="92" 
                            id="site-logo"
                            src="/Mask group (1).webp"
                            contain
                            position="none"
                            ></v-img>
                        </v-col>
                    </v-col>
                    <v-col cols="6">
                        <div id="searchbar" class="d-lg-flex d-md-none white elevation-4 rounded-xl" justify="center" align="center">
                            <div>Check in <strong>15 Jan</strong> </div>
                            <div>|</div>
                            <div>Check in <strong> 21 Jan</strong></div>
                            <div>|</div>
                            <div>Guest - 1 +</div>
                            <div>
                            <v-icon color="black">mdi-magnify</v-icon>
                            </div>
                        </div>
                        <div id="searchbar" class="d-md-flex d-lg-none flex-row  px-6 white elevation-4 rounded-xl justify-space-between" align="center">
                            <div>Choose Your Check in Day </div>
                            <div>
                                <v-icon color="black">mdi-magnify</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="4" class="pr-0">
                        <div class="d-flex flex-row justfiy-end align-center " justify="center" align="center">
                            <v-col id="flacur" class="pr-0" >
                        <div  class="d-flex flex-row justify-end mr-5 " >
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
                            <v-btn
                            depressed
                            class ="rounded-xl mr-5" color="scolor white--text "
                            large
                            > Make Money</v-btn>
                            <v-menu bottom offset-y class="sub-menu">
                                <template v-slot:activator="{ on, attrs }">   
                                <v-btn
                                id="user-menu"
                                class ="rounded-xl "
                                color="white scolor--text" 
                                large
                                v-bind="attrs"
                                v-on="on"
                                >
                                    <div class="d-flex flex-row justfiy-center align-center pl-4">
                                        <v-icon color="black">mdi-menu</v-icon>
                                        <v-col>
                                            <v-avatar size="36px" >
                                                <img
                                                    alt="Avatar"
                                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                >
                                            </v-avatar>
                                        </v-col>
                                    </div>
                                </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item>
                                    <v-list-item-title @click="registerdialog = true" v-bind="attrs" v-on="on">                                   
                                        <v-dialog v-model="registerdialog" persistent max-width="600px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-col color="green lighten-5 black--text" dark v-bind="attrs" v-on="on">
                                                    <v-icon>mdi-account-plus</v-icon>
                                                    Sign Up
                                                </v-col>
                                            </template>
                                            <v-card >
                                                <v-card-title>
                                                    <span class="text-h5">Register</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container>
                                                        <v-row col="12" md="10" max-width="600px" class="d-block">
                                                            <v-stepper v-model="e6" vertical>
                                                                <v-stepper-step :complete="e6 > 1" step="1">
                                                                    Your Email
                                                                </v-stepper-step>
                                    
                                                                <v-stepper-content step="1">
                                                                    <v-row class="d-flex flex-row ma-0" >
                                                                        <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                                                                            <v-text-field
                                                                            v-model="form.fields.Name" :rules="form.rules.Name"
                                                                            class="mt-3"
                                                                            label="Insert Your Email"
                                                                            placeholder="pleas Insert Your Email"
                                                                            outlined
                                                                            ></v-text-field>
                                                                        </v-col>
                                                                    </v-row>
                                                                    <v-btn color="primary" @click="e6 = 2">
                                                                        Continue
                                                                    </v-btn>
                                                                    <v-btn text>
                                                                        Cancel
                                                                    </v-btn>
                                                                </v-stepper-content>
                                    
                                                                <v-stepper-step :complete="e6 > 2" step="2">
                                                                    Your Password
                                                                </v-stepper-step>
                                    
                                                                <v-stepper-content step="2">
                                                                    <v-row class="d-flex flex-row ma-0" >
                                                                        <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                                                                            <v-text-field
                                                                            v-model="form.fields.Name" :rules="form.rules.Name"
                                                                            class="mt-3"
                                                                            label="Insert Your Password"
                                                                            placeholder="pleas Insert Your Password"
                                                                            outlined
                                                                            ></v-text-field>
                                                                        </v-col>
                                                                    </v-row>
                                                                    <v-btn color="primary" @click="e6 = 3">
                                                                        Register
                                                                    </v-btn>
                                                                    <v-btn text @click="registerdialog = false">
                                                                        Cancel
                                                                    </v-btn>
                                                                </v-stepper-content>
                                                            </v-stepper>
                                                        </v-row>
                                                    </v-container>
                                                    <small>*indicates required field</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" text @click="registerdialog = false">
                                                        Close
                                                    </v-btn>
                                                    <v-btn color="blue darken-1" text @click="registerdialog = false">
                                                        Save
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                </nav>
                <nav  class="d-md-none d-flex flex-row justify-space-between align-center mt-3 mb-3">
                    <v-col cols="4" class="pl-0">
                        <v-col @click = "$router.push('/')" class="d-flex flex-row justify-start pl-0" width="92" align="center">
                            <v-img
                            id="site-logo"
                            height="46"
                            width="92"
                            src="/Mask group (1).webp"
                            contain
                            position="none"
                            ></v-img>
                        </v-col>
                    </v-col>
                    <v-col cols="8" class="d-md-none d-flex flex-row justify-end align-center ">
                        <v-col cols="3">
                            <div id="searchbar" class="d-flex white elevation-4 rounded-xl" justify="center" align="center">
                                <div>
                                <v-icon color="black">mdi-magnify</v-icon>
                                </div>
                            </div>
                        </v-col>
                        <v-menu
                        transition="slide-y-transition"
                        bottom
                        >
                        <template v-slot:activator="{ on, attrs }">                     
                            <v-col cols="5" class="d-flex flex-row justfiy-start pr-0">
                                <v-btn
                                    id="user-menu"
                                    class ="rounded-xl "
                                    color="white scolor--text" 
                                    large
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <div class="d-flex flex-row justfiy-center align-center pl-4">
                                        <v-icon color="black">mdi-menu</v-icon>
                                        <v-col @click = "$router.push('/dashboardadmin')">
                                            <v-avatar size="36px">
                                                <img
                                                    alt="Avatar"
                                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                >
                                            </v-avatar>
                                        </v-col>
                                    </div>
                                </v-btn>
                            </v-col>
                        </template>  
                        <v-list>
                            <v-list-item>
                            <v-list-item-title></v-list-item-title>
                            </v-list-item>
                        </v-list>                
                    </v-menu>
                    </v-col>

                </nav>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
    e6: 1,
    customers: [],
    editCustomerId: null,
    form: {
      valid: false,
      fields: { 

                },
      error:[],
      rules: {

      },
    },
    registerdialog:false,
    }),
}
</script>

<style>
#website-logo{
    cursor: pointer;
    width: 95px;
}
#site-logo .v-image__image{
    
    background-position: none !important;
    cursor: pointer;
}
#searchbar {
    height: 44px;
    justify-content: space-evenly;
    align-items: center;
}
#flacur .v-btn {
  min-width: 42px !important; 
  width: 42px !important;
}

#user-menu{
  min-width: 80px !important; 
  width: 90px !important;
}
/* .sub-menu{
    margin-left: -49px !important;
    margin-top: 20px !important;
} */

.v-menu__content {

    margin-left: -49px !important;
    margin-top: 10px !important;
}
</style>