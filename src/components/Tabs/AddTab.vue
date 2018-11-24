<template>
  <div class="add-tab">
    <div>
      <button @click="showModal()">+ add tab</button>

      <el-dialog
        title="Tips"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="hideModal()">Cancel</el-button>
          <el-button type="primary" @click="addTab()">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTab',
  data: () => {
    return {
      dialogVisible: false
    }
  },
  methods: {
    showModal () {
      this.dialogVisible = true
    },
    hideModal () {
      this.dialogVisible = false
    },
    addTab () {
      this.dialogVisible = false
      this.$store.dispatch('addNewTab', { name: 'Dupa' })
    },
    handleClose (done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style lang="scss">
  .add-tab {
    &__cancel-button {
      margin-right: 10px;
    }
  }
</style>
