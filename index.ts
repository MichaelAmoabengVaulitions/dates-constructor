import { parse } from './src/Parse'
import stringify from './src/Stringify'

parse('now+1w')

stringify(new Date('June 23, 2022 23:15:30 GMT+11:00'))
