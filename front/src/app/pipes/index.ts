export * from './clip-pipe'
export * from './date-pipe'
export * from './item-status-pipe'
export * from './order-status-pipe'
export * from './bid-status-pipe'
export * from './auction-type-pipe'
export * from './bool-pipe'

import {ClipPipe} from './clip-pipe'
import {DatePipe} from './date-pipe'
import {ItemStatusPipe} from './item-status-pipe'
import {OrderStatusPipe} from './order-status-pipe'
import {BidStatusPipe} from './bid-status-pipe'
import {AuctionTypePipe} from './auction-type-pipe'
import {BoolPipe} from './bool-pipe'

export const CUSTOM_PIPES=[
	ClipPipe,DatePipe,ItemStatusPipe,OrderStatusPipe,BidStatusPipe,AuctionTypePipe,BoolPipe
];