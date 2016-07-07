import {AdminGuard} from "./admin.guard";
import {UserGuard} from "./user.guard";
import {UserService} from "./user.service";

export * from './admin.guard'
export * from './user.guard'
export * from './user.service'
export const AUTH_PROVIDERS=[
  AdminGuard,UserGuard,UserService
];
