export * from './user.service'
export * from "./auction.service";
export * from "./admin.service";
export * from './upload.service'

import {UserService, AuctionService, AdminService, UploadService} from '../service'

import {MockUserService} from './user.service'
import {MockAuctionService} from "./auction.service";
import {MockAdminService} from "./admin.service";
import {MockUploadService} from './upload.service'

export const MOCK_SERVICE_PROVIDERS = [
  {provide: UserService, useClass: MockUserService},
  {provide: AdminService, useClass: MockAdminService},
  {provide: AuctionService, useClass: MockAuctionService},
  {provide: UploadService, useClass: MockUploadService}
];


