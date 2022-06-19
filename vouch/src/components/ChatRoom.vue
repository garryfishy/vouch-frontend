<template>
  <div>
    <div class=" mx-2 flex flex-col">
      <div class="flex flex-row my-5 px-5">
        <a @click="logout()" style="color:#5DB075;" class="text-lg w-1/4"
          >Exit</a
        >
        <div class="text-center text-3xl w-3/4 mr-16">RoomID</div>
      </div>
      <div class="mt-5">
        <div class=" mb-16">
          <div class="clearfix">
            <div class="text-sm ml-6">
              User 1
            </div>
            <div
              style="background-color:#F6F6F6;"
              class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
            >
              this is a basic mobile chat layout, build with tailwind css
            </div>
          </div>
          <div class="clearfix">
            <div
              class="float-right w-3/4 mx-4 my-2 p-2 text-white rounded-lg clearfix"
              style="background-color:#5DB075;"
            >
              check my twitter to see when it will be released.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed w-full flex justify-between " style="bottom: 0px;">
      <textarea
        class="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
        style="outline: none;"
      ></textarea>
      <button class="m-2" style="outline: none;">
        <svg
          class="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "App",
  data() {
    return {
      socket: io(),
      data: ["test aja"]
    };
  },
  methods: {
    async checkMethod(data) {
      await this.$socket.client.emit("testaja", data);
      await this.$socket.client.on("testlagi", data => {
        this.data.push(data);
      });
    },
    async logout() {
      const username = localStorage.username;
      const roomname = localStorage.roomname;
      const data = { username, roomname };
      console.log(data);
      await this.$socket.client.emit("logout", data);
      this.router.push("/enter");
    }
  }
};
</script>

<style></style>
