import io from 'socket.io-client'
export default  io.connect("http://localhost:4000")


export const CONNECTION_SUCCESS = 'connection_success';