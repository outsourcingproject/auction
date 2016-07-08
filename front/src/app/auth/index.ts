import {AdminGuard} from "./admin.guard";
import {UserGuard} from "./user.guard";

export * from './admin.guard'
export * from './user.guard'

export const AUTH_PROVIDERS=[
  AdminGuard,UserGuard
];
