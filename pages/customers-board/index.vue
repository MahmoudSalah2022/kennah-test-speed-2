<template>
  <v-app id="appa">
  
  <v-row class="grey lighten-4" flat>
      <sidebar/>
      <v-col id="customer-section" class="ma-4 pa-0">
          <v-col id="welcome-customer-section" class="ma-0 pa-0">
              <h3>Welecom In Your Customers</h3>
          </v-col>
          <!-- <v-col id="add-apartment" class="my-4 pa-0" >
                  <v-btn elevation="2" color="fcolor white--text" to="/add-Customers">
                      Add Apartment
                  </v-btn>
          </v-col> -->
          <v-col id="Customers-list" class="ma-0 pa-0">
                  <v-simple-table >
                      <template v-slot:default>
                      <thead>
                          <tr>
                          <th class="text-left">
                              Client Name
                          </th>
                          <th class="text-left">
                              Email
                          </th>
                          <th class="text-left">
                              Last Reservation
                          </th>
                          <th class="text-left">
                              Statu
                          </th>
                          </tr>
                      </thead>
                                  <tbody v-for="(customer, i) in customers" :key="i">
                                      <tr>
                                      <td>{{ customer.FristName }}</td>
                                      <td>{{ customer.Email }}</td>
                                      <td>{{ customer.LastReservation }}</td>
                                      <td>{{ customer.Status }}</td>
                                      <td>                   
                                          <v-menu offset-y>
                                              <template v-slot:activator="{ on, attrs }">
                                              <v-btn
                                              icon
                                                  v-bind="attrs"
                                                  v-on="on"
                                              >
                                              <v-icon color="grey lighten-1">mdi-dots-vertical</v-icon>
                                              </v-btn>
                                              </template>
                                              <v-list>
                                              <v-list-item>
                                                  <v-list-item-title>                        
                                                      <v-list-item-action class="ml-0 d-flex flex-row justify-start">
                                                      <v-btn id="optionPanel" @click = "deleteItem(apartment._id)" icon plain> 
                                                          <v-icon color="grey lighten-1">mdi-delete
                                                          </v-icon> 
                                                          Delete
                                                      </v-btn>
                                                      </v-list-item-action>
                                                  </v-list-item-title>
                                              </v-list-item>
                                              <v-list-item>
                                                  <v-list-item-title>
                                                      <v-list-item-action class="ml-0 d-flex flex-row justify-start">
                                                      <v-btn id="optionPanel" @click=" editDialog = true , openEditDialog(
                                                           apartment._id,
                                                           apartment) " icon plain> 
                                                          <v-icon color="grey lighten-1">mdi-pencil
                                                          </v-icon> 
                                                          View
                                                      </v-btn>
                                                      </v-list-item-action>
                                                  </v-list-item-title>
                                              </v-list-item>
                                              </v-list>
                                          </v-menu>
                                          </td>
                                      </tr>
                                  </tbody>
                          
                      </template>
                  </v-simple-table>
          </v-col> 
      </v-col>
  </v-row>
  <v-dialog v-model="editDialog" max-width="1360px">
    <v-card>
      <v-toolbar elevation="0">
        <v-toolbar-title>Edit Apartment</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="editDialog = false " class="mr-0">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text v-if="editDialog" class="pa-4">
        <v-form ref="form" v-model="form.valid" v-on:submit.prevent="editForm">
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
          </v-col>
          <v-btn depressed color="primary" type="submit" :disabled="!form.valid"><span>Edit</span></v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-row justify="center">
      <v-dialog v-model="registerdialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Open Dialog
              </v-btn>
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
                                  Select an app
                                  <small>Summarize if needed</small>
                              </v-stepper-step>
  
                              <v-stepper-content step="1">
                                <v-row class="d-flex flex-row ma-0" >
                                    <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                                        <h4>Insert Your Email</h4> 
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
                                  Configure analytics for this app
                              </v-stepper-step>
  
                              <v-stepper-content step="2">
                                <v-row class="d-flex flex-row ma-0" >
                                    <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                                        <h4>Insert Your Password</h4> 
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
                                  <v-btn text>
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
                  <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                      Save
                  </v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>
  </v-row>
  </v-app>
</template>
  
<script>
  export default {
    layout:'dashboard',
    data: () => ({
    e6: 1,
    customers: [],
    editDialog: false,
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

    methods: {              

        // async editForm(id){
        // await this.$axios.$put(`customers/${this.editCustomerId}`, this.form.fields ).then((res) => {
        //     if (res._id) {
        //         this.Customers.forEach((customer)=>{
        //         if (customer._id === res._id){
        //             customer = res
        //         }
        //         });
        //         this.editDialog = false;
        //         this.$refs.form.reset();
        //     } else if (res?.error === "duplicated") {
        //         const Name = this.form.fields.Name;
        //         this.form.rules.Name.push(
        //         (v) => (!!v && v) !== Name || "This customer already exists"
        //         );
        //         this.$refs.form.validate();
        //     }
        //     console.log(res)
        // });
        // },

        // openEditDialog(id, value){
        // this.editCustomerId = id;
        // this.editDialog= value;
        // this.form.fields= value;

        // },

        
        async deleteItem(id) {
        await this.$axios.$delete(`customers/${id}`)
            .then((res) => {
            if(res?.success === true){
                this.customers.forEach((customer , i)=>{
                if(category._id === id){
                    this.customers.splice(i, 1);
                }
                });
            }
            })
            .catch(errors => {
            console.log(errors);
            });
        },

    },

    async fetch() {
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
