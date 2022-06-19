<template>
  <div class="container my-10">
    <div>
      <h1 class="text-3xl font-bold text-center">
        Join Chatroom
      </h1>
    </div>
    <div class="mt-14 mb-40 mx-5">
      <div class="mb-5">
        <input
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          requiired
        />
      </div>
      <div>
        <input
          v-model="roomname"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="roomname"
        />
      </div>
    </div>

    <div class="mx-5">
      <button
        style="background-color:#5DB075;"
        class="rounded-full w-full text-white text-2xl py-3"
        v-on:click="enterRoom()"
      >
        Join
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Enter",
  data() {
    return {
      username: "",
      roomname: "",
      socket: io()
    };
  },
  methods: {
    async enterRoom() {
      let canlogin = false;
      const data = {
        username: this.username,
        roomname: this.roomname,
        message: `${this.username} has joined the room`
      };
      let create = await this.$socket.client.emit("joinRoom", data);
      if (create) {
        await this.$socket.client.on("status", data => {
          canlogin = data;
          if (canlogin) {
            this.$router.push("/");
          }
        });
      }
    }
  }
};
</script>

<style></style>
