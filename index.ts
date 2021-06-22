import { parse } from './src/Parse'
import stringify from './src/Stringify'

parse('now+1w')
// parse('now+1M')
// parse('now-1d/y')
// parse('now-1M/y')
// // parse('now-1w/y')
// // parse('now-1h/y')
// // parse('now-1m/y')
// // parse('now-1s/y')
// // parse('now-4d-22m/y')
// // parse('now-4d+22m/y')
// parse('now-1y-2M-3d-4h-5m-6s/y')

stringify(new Date('June 23, 2022 23:15:30 GMT+11:00'))
