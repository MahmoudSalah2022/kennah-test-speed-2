<template>
    <v-app>
    
    <v-row class="grey lighten-4" flat>
        <sidebar/>
        <v-col id="dasharea" class="d-flex flex-column ma-2">
                <h3 class="mb-2">Add New Apartment</h3>
                <v-divider></v-divider>
                <v-form ref="form" v-model="form.valid" v-on:submit.prevent="submitForm">
                    <v-col id="add-section" class="ma-0 pa-0 d-flex flex-column" cols="12" sm="8">
                        <v-row class="d-flex flex-row ma-0" >
                        <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                            <h4>Apartment Name</h4> 
                            <v-text-field
                            v-model="form.fields.Name" :rules="form.rules.Name"
                            class="mt-3"
                            label="Apartment Name"
                            placeholder="pleas insert apartment name"
                            outlined
                            ></v-text-field>
                        </v-col>
                        <v-col id="CompoundName" class="d-flex flex-column mt-5 pa-0">
                            <h4>Compound Name</h4> 
                            <v-text-field
                            v-model="form.fields.Compound" :rules="form.rules.Compound"
                            class="mt-3"
                            label="Compound Name"
                            placeholder="pleas insert compound name"
                            outlined
                            ></v-text-field>
                        </v-col>
                        </v-row>
                        <v-row class="d-flex flex-row ma-0">
                            <v-col id="RoomNumber" class="d-flex flex-column mt-5 pa-0">
                                <h4>Number Of Rooms</h4> 
                                <v-text-field
                                v-model="form.fields.NumberRooms" :rules="form.rules.NumberRooms"
                                class="mt-3"
                                label="Number Of Rooms"
                                placeholder="pleas insert Number Of Rooms"
                                outlined
                                ></v-text-field>
                            </v-col>
                            <v-col id="BathRoomNumber" class="d-flex flex-column mt-5 mx-3 pa-0">
                                <h4>Number Of BathRooms</h4> 
                                <v-text-field
                                v-model="form.fields.NumberBathRooms" :rules="form.rules.NumberBathRooms"
                                class="mt-3"
                                label="Number Of BathRooms"
                                placeholder="pleas insert Number Of BathRooms"
                                outlined
                                ></v-text-field>
                            </v-col>
                            <v-col id="GuestNumber" class="d-flex flex-column mt-5  pa-0">
                                <h4>Number Of Guest</h4> 
                                <v-text-field
                                v-model="form.fields.NumberGuest" :rules="form.rules.NumberGuest"
                                class="mt-3"
                                label="Number Of Guest"
                                placeholder="pleas insert Number Of Guest"
                                outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex flex-row ma-0">
                            <v-col id="Location" class="d-flex flex-column mt-5 pa-0">
                                <h4>Apartment Address</h4> 
                                <v-text-field
                                v-model="form.fields.Location" :rules="form.rules.Location"
                                class="mt-3"
                                label="Apartment Address"
                                placeholder="pleas insert Apartment Address"
                                outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex flex-row ma-0">
                            <v-col id="NightPrice" class="d-flex flex-column mt-5  pa-0">
                                <h4>Night Price</h4> 
                                <v-text-field
                                v-model="form.fields.Price" :rules="form.rules.Price"
                                class="mt-3"
                                label="Night Price"
                                placeholder="pleas insert Night Price"
                                outlined
                                ></v-text-field>
                            </v-col>
                            <v-col id="CleanFees" class="d-flex flex-column mt-5 mx-3 pa-0">
                                <h4>Clean Fees</h4> 
                                <v-text-field
                                v-model="form.fields.Clean" :rules="form.rules.Clean"
                                class="mt-3"
                                label="Clean Fees"
                                placeholder="pleas insert Clean Fees"
                                outlined
                                ></v-text-field>
                            </v-col>
                            <v-col id="CoverFees" class="d-flex flex-column mt-5 pa-0">
                                <h4>Cover Fees</h4> 
                                <v-text-field
                                v-model="form.fields.Cover" :rules="form.rules.Cover"
                                class="mt-3"
                                label="Cover Fees"
                                placeholder="pleas insert Cover Fees"
                                outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <h3 class="my-4">Amenities</h3>
                        <v-row class="d-flex flex-column ma-0 mb-3">
                            <v-col id="Amenities" class="d-flex flex-column mt-5 pa-0">
                                <h4>Choose Amenities</h4>
                                <v-col class="d-flex flex-row ma-0 pa-0" col="12">
                                    <v-col v-for="(amenitie, i) in amenities" :key="i" class="ma-0 pa-0" md="2" width="50" max-width="100">
                                        <v-checkbox
                                        v-model="selected"
                                        :label="`${ amenitie.Name }`"
                                        :prepend-icon="`${ amenitie.Icon }`"
                                        >{{ amenitie.Name }}</v-checkbox>
                                    </v-col>
                                </v-col>
 
                            </v-col>
                            <v-col id="FavAmenity" class="d-flex flex-column mt-5  pa-0">
                                <h4>Choose a Fav Amenity</h4> 
                            </v-col>
                        </v-row>
                        <v-divider calss="mt-2"></v-divider>
                        <h3 class="my-4">Media</h3>
                        <v-row class="d-flex flex-row ma-0">
                            <v-col id="MainImage" class="d-flex flex-column mt-3 pa-0">
                                <h4 class="mb-3">Main Image</h4> 
                                <v-file-input
                                    label="pleas insert Main Image"
                                    filled
                                    prepend-icon="mdi-wallpaper"
                                ></v-file-input>
                            </v-col>
                            <v-col id="ImagesGallary" class="d-flex flex-column mt-3 mx-3  pa-0">
                                <h4 class="mb-3">Apartment Images</h4> 
                                <v-file-input
                                    label="pleas insert Apartment Images"
                                    multiple
                                    filled
                                    prepend-icon="mdi-view-gallery"
                                ></v-file-input>
                            </v-col>
                            <v-col id="ApartVideo" class="d-flex flex-column mt-3  pa-0">
                                <h4 class="mb-3">Apartment Video</h4> 
                                <v-file-input
                                    label="pleas insert Apartment Video"
                                    filled
                                    prepend-icon="mdi-video"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                        <!-- <v-col v-for="(customer, i) in customers" :key="i" cols="6">
                            <v-select
                            :items="`${ customer.Travailing }`"
                            menu-props="auto"
                            label="Select"
                            hide-details
                            prepend-icon="mdi-map"
                            single-line
                            ></v-select>
                        </v-col> -->
                        <v-col col="4" class="ma-0 pa-0">
                            <v-btn depressed color="scolor white--text" type="submit" ><span>Add Apartment</span></v-btn>
                        </v-col>
                    </v-col>
                </v-form>
        </v-col>
    </v-row>

    </v-app>
  </template>
  
  <script>
  export default {
    layout:'dashboard',
    data: () => ({
    apartmentes: [],
    amenities: [],
    customers:[{
        Travailing:[],
    }],
    dialog: false,
    editDialog: false,
    editCategoryId: null,
    form: {
      valid: false,
      fields: { 
            Name: "" , 
            Compound: "" , 
            Location: "" , 
            NumberGuest: "" , 
            NumberRooms: "" , 
            NumberBathRooms: "" , 
            Clean: "" , 
            Cover: "" , 
            Price: "" , 
                },
      error:[],
      rules: {
        Name: [(v) => !!v || ' This field is required'],
        Compound: [(v) => !!v || ' This field is required'],
        Location: [(v) => !!v || ' This field is required'],
        NumberGuest: [(v) => !!v || ' This field is required'],
        NumberRooms: [(v) => !!v || ' This field is required'],
        NumberBathRooms: [(v) => !!v || ' This field is required'],
        Clean: [(v) => !!v || ' This field is required'],
        Cover: [(v) => !!v || ' This field is required'],
        Price: [(v) => !!v || ' This field is required'],
      },
    },
  }),
    methods: {

    async submitForm() {
      const Name = this.form.fields.Name;
      const Compound = this.form.fields.Compound;
      const Location = this.form.fields.Location;
      const NumberGuest = this.form.fields.NumberGuest;
      const NumberRooms = this.form.fields.NumberRooms;
      const NumberBathRooms = this.form.fields.NumberBathRooms;
      const Clean = this.form.fields.Clean;
      const Cover = this.form.fields.Cover;
      const Price = this.form.fields.Price;
      await this.$axios.$post("apartmentes", { Name, Compound, Location, NumberGuest, NumberRooms, NumberBathRooms, Clean, Cover, Price }).then((res) => {
        if (res._id) {
          this.apartmentes.push(res);
          this.dialog = false;
          this.$refs.form.reset();
        } 
          this.$refs.form.validate();
      });
      
    },

    },


    async fetch() {
          await this.$axios.$get("amenities").then((res) => {
          console.log(res);
          if (res?.length > 0) {
              this.amenities = res;
          }
          });

          await this.$axios.$get("customers").then((res) => {
          console.log(res);
          if (res?.length > 0) {
              this.customers = res;
          }
          });
      },

  fetchOnServer: false,

  }
  </script>
