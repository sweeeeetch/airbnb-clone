import prisma from "../lib/prismadb";

export default defineEventHandler(async event => {
  const { email } = await readBody(event);

  const user = await prisma.user.findUnique({ where: { email } });

  return user;
});
