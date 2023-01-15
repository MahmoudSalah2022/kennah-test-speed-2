<template>
  <v-app id="appa">
  
  <v-row class="grey lighten-4" flat>
      <sidebar/>
      <v-col id="customer-section" class="ma-4 pa-0">
          <v-col id="welcome-customer-section" class="ma-0 pa-0">
              <h3>Welcome In Your Customers</h3>
          </v-col>
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
                              Statue
                          </th>
                          </tr>
                      </thead>
                                  <tbody v-for="(customer, i) in customers" :key="i">
                                      <tr>
                                      <td>{{ customer.FirstName }}</td>
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
  <v-row justify="center" id="sign-up">
      <v-dialog v-model="registerdialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Sign Up
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
                  <v-btn color="blue darken-1" text @click="registerdialog = false">
                      Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="registerdialog = false">
                      Save
                  </v-btn>
              </v-card-actions>
          </v-card>
      </v-dialog>
  </v-row>
  <v-row justify="center" id="sign-in">
      <v-dialog v-model="signindialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Sign in
              </v-btn>
          </template>
          <v-card >
              <v-card-title>
                  <span class="text-h5">Sign In</span>
              </v-card-title>
              <v-card-text>
                  <v-container>
                      <v-row col="12" md="10" max-width="600px" class="d-block">
                                <v-row class="d-flex flex-row ma-0" >
                                    <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                                        <h4>Your Email</h4> 
                                        <v-text-field
                                        v-model="form.fields.Name" :rules="form.rules.Name"
                                        class="mt-3"
                                        label="Insert Your Email"
                                        placeholder="pleas Insert Your Email"
                                        outlined
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="d-flex flex-row ma-0" >
                                    <v-col id="ApartName" class="d-flex flex-column mt-5 mr-3 pa-0">
                                        <h4>Your Password</h4> 
                                        <v-text-field
                                        v-model="form.fields.Name" :rules="form.rules.Name"
                                        class="mt-3"
                                        label="Insert Your Password"
                                        placeholder="pleas Insert Your Password"
                                        outlined
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                      </v-row>
                  </v-container>
                  <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="signindialog = false">
                      Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="signindialog = false">
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
    signindialog:false,
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
