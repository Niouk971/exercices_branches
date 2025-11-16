import { db } from "@/lib/db";
import { users } from "@/lib/schema";

export const GET = async () => {
    const userData = await db.select().from(users);
    return Response.json(userData);
}