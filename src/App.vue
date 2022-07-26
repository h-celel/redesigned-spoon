<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { HelloRequest, Message } from '../../proto/examples/helloworld_pb'
import { ServicePromiseClient } from '../../proto/examples/helloworld_grpc_web_pb'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    async increment() {
      this.count++

      let client = new ServicePromiseClient('http://localhost:9000', null, null)
      const req = new HelloRequest()
      const message = new Message()
      message.setValue('hellooo')
      req.setMessage(message)
      try {
        const res = await client.hello(req, {})
        console.log(res.getMessage().getValue())
      } catch (err) {
        console.error(err.message)
        throw err
      }

    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
