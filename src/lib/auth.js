import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const requiredEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required for Better Auth`);
  }
  return value;
};

const baseURL = requiredEnv("BETTER_AUTH_URL");
const client = new MongoClient(requiredEnv("MONGO_URI"));
const db = client.db('aicurose');

export const auth = betterAuth({
  baseURL,
  secret: requiredEnv("BETTER_AUTH_SECRET"),
  trustedOrigins: [baseURL],
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: {
    enabled: true
  },

  socialProviders: {
    google: {
      clientId: requiredEnv("GOOGLE_CLIENT_ID"),
      clientSecret: requiredEnv("GOOGLE_CLIENT_SECRET"),
    },
  },

});
