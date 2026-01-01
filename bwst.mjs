import { put, reset, } from './lib/util.mjs'
import { connection, } from '../lib/util.mjs'
import { configuration, wsclient_onmessage, } from '../local/lib/util.mjs'

reset({ content: document.getElementById('content1'), })
put(`Delivered ${location} on ${Date()} to YOUR_IP_ADDRESS`, '<hr/>')
  
configuration.me = 'Ann'
const ws = connection(new WebSocket(location.toString().replace('http', 'ws'))).
  on('error', console.error).
  on('message', msg => wsclient_onmessage(ws, msg)).
  on('close', data => console.log(configuration.me, 'close data', data)).
  send("Hi there! I'm Ann.")

setInterval(ws.open, 10000)                // auto-reconnect every 10s
