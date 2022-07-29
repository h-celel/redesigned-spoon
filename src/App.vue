<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Empty , HelloRequest, Message } from '../proto/examples/helloworld_pb'
import { ServiceClient, ServicePromiseClient } from '../proto/examples/helloworld_grpc_web_pb'

const fakeToken = 'I am a fake token'

class AuthInterceptor {
  constructor(token) {
    this.token = token
  }

  intercept(request, invoker) {
    const metadata = request.getMetadata()
    metadata.Authorization = 'Bearer ' + this.token
    return invoker(request)
  }
}

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

      const authInterceptor = new AuthInterceptor(fakeToken)
      let options = {
        unaryInterceptors: [authInterceptor],
        streamInterceptors: [authInterceptor]
      }
      let client = new ServicePromiseClient('http://localhost:9000', null, options)
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

    const authInterceptor = new AuthInterceptor(fakeToken)
    let options = {
      unaryInterceptors: [authInterceptor],
      streamInterceptors: [authInterceptor]
    }
    let client = new ServiceClient('http://localhost:9000', null, options)
    const e = new Empty()
    let stream = client.streamingHello(e, {})
    stream.on('data', function(response) {
      console.log(response.getMessage().getValue());
    });
    stream.on('status', function(status) {
      console.log(status.code);
      console.log(status.details);
      console.log(status.metadata);
    });
    stream.on('end', function(end) {
      console.log(end);
    });
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
