<template>
    <v-app>
    
    <v-row class="grey lighten-4" flat>
        <sidebar/>
        <v-col class="d-flex flex-column">
                <h3>Add New Apartment</h3>
            <v-col id="add-section" class="ma-0 pa-0 d-flex flex-column" cols="12" sm="8">
                <v-row class="d-flex flex-row ma-0" >
                <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                    <h4>Apartment Name</h4> 
                    <v-text-field
                    class="mt-3"
                    label="Apartment Name"
                    placeholder="pleas insert apartment name"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col id="CompoundName" class="d-flex flex-column mt-5 pa-0">
                    <h4>Compound Name</h4> 
                    <v-text-field
                    class="mt-3"
                    label="Compound Name"
                    placeholder="pleas insert compound name"
                    outlined
                    ></v-text-field>
                </v-col>
                </v-row>
                <v-row class="d-flex flex-row ma-0">
                    <v-col id="GuestNumber" class="d-flex flex-column mt-5 mr-3 pa-0">
                        <h4>Number Of Guest</h4> 
                        <v-text-field
                        class="mt-3"
                        label="Number Of Guest"
                        placeholder="pleas insert Number Of Guest"
                        outlined
                        ></v-text-field>
                    </v-col>
                    <v-col id="RoomNumber" class="d-flex flex-column mt-5 pa-0">
                        <h4>Number Of Rooms</h4> 
                        <v-text-field
                        class="mt-3"
                        label="Number Of Rooms"
                        placeholder="pleas insert Number Of Rooms"
                        outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-col>
    </v-row>

    </v-app>
  </template>
  
  <script>
  export default {
    layout:'dashboard',

  }
  </script>
