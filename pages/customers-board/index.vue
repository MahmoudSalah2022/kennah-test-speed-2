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
