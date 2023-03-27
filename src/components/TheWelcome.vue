<script>
export default {
  data() {
    return {
      response: "Waiting"
    }
  },
  methods: {
    callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      console.log("Handle the response", response)
      this.response = JSON.stringify(response);
      console.log("Response: ", response)
    }
  }
}

</script>

<template>
  <GoogleLogin :callback="callback" />
  <pre>Response: {{ response }}</pre>
</template>
