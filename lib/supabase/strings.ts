/*
 * This file contains user-facing strings for values in the database.
 */

import { Term } from "../types"

export const termNames = {
  fall: "Fall",
  winter: "Winter",
  spring: "Spring",
  summer: "Summer"
} satisfies Record<Term, string>

export const termCodes = {
  fall: "f",
  winter: "w",
  spring: "sp",
  summer: "su"
} satisfies Record<Term, string>
