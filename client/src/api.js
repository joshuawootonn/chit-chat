import io from 'socket.io-client'
export default io.connect("http://localhost:4000")

// RECEIVE
export const CONNECTION_SUCCESS = 'connection_success';


// SEND
export const NEW_MESSAGE = 'new_message'