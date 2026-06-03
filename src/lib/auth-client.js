import { createAuthClient } from "better-auth/react"

const getAuthBaseUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return window.location.origin;
  }

  return configuredUrl;
};

export const authClient = createAuthClient({
  baseURL: getAuthBaseUrl(),
})
