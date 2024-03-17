<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <div class="links">
        <p>Are you sure ?</p>
        <div class="center">
          <button class="yes_no" @click="confirmLogout">Yes</button>
          <button class="yes_no" @click="cancelLogout">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean
  },
  methods: {
    confirmLogout() {
      this.$emit('confirmed');
    },
    cancelLogout() {
      this.$emit('canceled');
    }
  }
};
</script>

<style scoped>
.modal {
  position: absolute;
  background-color: #eee;
  padding: 20px;
  border-radius: 15px;
  top: 200px;
  left: 500px;
  z-index: 1111111111;
}
.center {
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-items: center;
}

.yes_no {
  padding: 0 4px;
  font-size: medium;
  font-weight: 200;
  text-decoration: none;
  color: #1c57a5;
  margin-right: 15px;
}
.links {
  padding: 0 8px;
}
</style>
