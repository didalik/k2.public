import { put, reset, } from './lib/util.mjs'

reset({ content: document.getElementById('content1'), })
put(`You requested ${location} on ${Date()} from YOUR_IP_ADDRESS`)
