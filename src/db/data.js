const DEFAULT_SERVER_URL = "https://backendmang.vercel.app";

const getServerUrl = () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || DEFAULT_SERVER_URL;

  if (!serverUrl) {
    console.warn("NEXT_PUBLIC_SERVER_URL is not configured.");
    return DEFAULT_SERVER_URL;
  }

  return serverUrl.replace(/\/$/, "");
};

const fetchJson = async (path, fallback) => {
  const serverUrl = getServerUrl();
  const url = `${serverUrl}${path}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const contentType = res.headers.get("content-type") || "";

    if (!res.ok) {
      let message = `API request failed: ${url} returned ${res.status}`;

      if (contentType.includes("application/json")) {
        const body = await res.json();
        message = body?.error || body?.message || message;
      }

      console.warn(message);
      return {
        data: fallback,
        error: message,
        status: res.status,
        url,
      };
    }

    if (!contentType.includes("application/json")) {
      const message = `API request did not return JSON: ${url}`;

      console.warn(message);
      return {
        data: fallback,
        error: message,
        status: res.status,
        url,
      };
    }

    return {
      data: await res.json(),
      error: null,
      status: res.status,
      url,
    };
  } catch (error) {
    console.warn(`API request failed: ${url}`, error);
    return {
      data: fallback,
      error: error.message,
      status: 0,
      url,
    };
  }
};

export const getData = async () => {
  return fetchJson("/cursor", []);
};

export const getDetailsData = async (id) => {
  return fetchJson(`/cursor/${id}`, null);
};
