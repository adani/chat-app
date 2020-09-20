<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="8">
          <div class="p-3 shadow rounded border chat-view d-flex flex-column">
            <div id="message-view" class="overflow-auto text-left flex-grow-1">
              <div v-for="(message, index) in chatMessages" :key="index">
                <b>{{ message.sender }}</b> {{ message.content }}
              </div>
            </div>
            <div class="d-flex flex-row">
              <b-form-input id="chat-box" type="text" placeholder="Type a message" v-model="inputMessage" class="mt-3" v-on:keyup.enter="sendMessage"></b-form-input>
              <b-icon-arrow-right-square/>
            </div>
          </div>
        </b-col>
        <b-col>
          <div id="user-view" class="shadow rounded border overflow-auto text-left p-3 chat-view">
            <h4>In the chat</h4>
            <div v-for="user in onlineUsers" :key="user.id">{{ user.username }}</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
function userIndex (arr, user) {
  var index = 0
  arr.forEach(element => {
    if (element.id === user.id) {
      return index
    }
    index++
  })
}

export default {
  data () {
    return {
      chatMessages: [],
      inputMessage: '',
      onlineUsers: [],
      connection: null,
      roomId: 1
    }
  },
  methods: {
    sendMessage: function () {
      this.$cable.perform({
        channel: 'ChatChannel',
        action: 'send_message',
        data: {
          content: this.inputMessage
        }
      })
      this.inputMessage = ''
    },
    appearOnline: function () {
      this.$cable.perform({
        channel: 'StatusChannel',
        action: 'online'
      })
    }
  },
  mounted () {
    this.$cable.subscribe({
      channel: 'ChatChannel',
      room_id: this.roomId
    })
    this.$cable.subscribe({
      channel: 'StatusChannel',
      room_id: this.roomId
    })
  },
  channels: {
    ChatChannel: {
      received (data) {
        if (data.type === 'initialize') {
          this.chatMessages = data.payload
        } else {
          console.log(data.payload)
          this.chatMessages.push(data.payload)
        }
      }
    },
    StatusChannel: {
      received (data) {
        console.log(data)
        if (data.type === 'online') {
          this.onlineUsers.push(data.user)
        } else if (data.type === 'offline') {
          var index = userIndex(this.onlineUsers, data.user)
          this.onlineUsers.splice(index, 1)
        }
      },
      connected () {
        console.log('Connected')
        this.appearOnline()
      },
      rejected () {
        console.log('Rejected')
      },
      disconnected () {
        console.log('Disconnect')
      }
    }
  }
}
</script>

<style>

.chat-view {
  min-height: 480px;
}
</style>
