import { put, reset, } from './lib/util.mjs'
import { connection, } from '../lib/util.mjs'

reset({ content: document.getElementById('content1'), })
put(`Delivered ${location} on ${Date()} to YOUR_IP_ADDRESS`, '<hr/>')
  
const ws = connection(new WebSocket(location.toString().replace('http', 'ws'))).
  on('error', err => console.error(err)).
  on('message', console.log).
  send("Hi there! I'm Ann.")

setInterval(ws.open, 10000)                // auto-reconnect every 10s
