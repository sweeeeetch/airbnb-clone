import { User } from "@prisma/client";
import { SessionData } from "@sidebase/nuxt-auth/dist/runtime/composables/authjs/useAuthState";
import { GetSessionFunc } from "@sidebase/nuxt-auth/dist/runtime/types";

export default async function getCurrentUser(
  sess: GetSessionFunc<SessionData>
): Promise<User | null> {
  try {
    const session = await sess();
    if (!session.user?.email) {
      return null;
    }
    const currentUser: User = await $fetch("/api/getUserByEmail", {
      method: "POST",
      body: { email: session.user.email },
    });
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
}
