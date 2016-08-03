export * from './user.service'
export * from "./auction.service";
export * from "./admin.service";
export * from './upload.service'

import {UserService} from './user.service'
import {AuctionService} from "./auction.service";
import {AdminService} from "./admin.service";
import {UploadService} from './upload.service'

export const MOCK_SERVICE_PROVIDERS = [
  UserService, AdminService, AuctionService, UploadService
];


