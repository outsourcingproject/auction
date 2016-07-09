export * from './user.service'
export * from "./auction.service";
export * from "./admin.service";

import {UserService} from './user.service'
import {AuctionService} from "./auction.service";
import {AdminService} from "./admin.service";

export const SERVICE_PROVIDERS=[
	UserService,AdminService,AuctionService
];

