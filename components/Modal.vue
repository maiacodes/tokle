<template>
  <div id="modal" class="modal" v-show="showModal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" v-on:click="$store.commit('setModal', 'none')">&times;</span>
      <p>Some text in the Modal..</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    showModal(){
      return this.$store.state.modal !== "none";
    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  color: white;
  background-color: #3a3a3a;
  margin: auto;
  padding: 20px;
  border: 1px solid #2c2c2c;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
