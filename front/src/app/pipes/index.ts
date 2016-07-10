export * from './clip-pipe'
export * from './date-pipe'
export * from './item-status-pipe'
export * from './order-status-pipe'

import {ClipPipe} from './clip-pipe'
import {DatePipe} from './date-pipe'
import {ItemStatusPipe} from './item-status-pipe'
import {OrderStatusPipe} from './order-status-pipe'

export const CUSTOM_PIPES=[
	ClipPipe,DatePipe,ItemStatusPipe,OrderStatusPipe
];