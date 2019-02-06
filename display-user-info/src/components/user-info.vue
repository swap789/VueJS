<template>
  <div>
    <h1>This is User Info</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Country</th>
        <th>Website</th>
        <th>Company</th>
        <th>Address</th>
      </tr>
      <tr v-for="user of users" :key="user.id">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
         <td>{{user.country}}</td>
        <td>{{user.website}}</td>
        <td>{{user.company}}</td>
        <td>{{user.address}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      initalUsers:[]
    };
  },

  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      console.log(response.data);
      this.initalUsers = response.data;
      this.setData();
    });
  },
  computed: {
    setData() {
      const filteredUser = this.initalUsers.map(user => {
        const newUser = new Object();
        newUser.id = user.id;
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.phone = user.phone;
        newUser.website = user.website;
        newUser.company = user.company.name;
        newUser.address =
          user.address.street +
          ", " +
          user.address.suite +
          ", " +
          user.address.city +
          ", " +
          user.address.zipcode;
        return newUser;
      });
      this.users = Object.assign([],filteredUser);
    }
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

