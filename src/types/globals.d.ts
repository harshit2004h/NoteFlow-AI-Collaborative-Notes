/* eslint-disable @typescript-eslint/no-empty-object-type */
import { User } from "./types";

declare global {
  interface CustomJwtSessionClaims extends User {}
}
