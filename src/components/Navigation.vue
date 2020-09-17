<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <div class="first-level mx-auto">
      <b-navbar-brand href="#"><b-icon-chat-left-fill variant="light"/> Chat App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/">Chatrooms</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon-person-circle></b-icon-person-circle> <span class="ml-1">Account</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#" variant="danger">Delete my account</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>
