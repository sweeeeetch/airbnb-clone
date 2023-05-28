import bcrypt from "bcrypt";
import prisma from "../lib/prismadb";

export default defineEventHandler(async event => {
  const { email, name, password } = await readBody(event);
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return user;
});
