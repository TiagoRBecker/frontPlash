"use server"

import { cookies } from "next/headers";

export const getCookies = async () => {
  const token = cookies().get("jwt")
   
  return token;
};
