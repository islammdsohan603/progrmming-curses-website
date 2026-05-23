const getServerUrl = () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!serverUrl) {
    console.warn("NEXT_PUBLIC_SERVER_URL is not configured.");
    return null;
  }

  return serverUrl.replace(/\/$/, "");
};

const fetchJson = async (path, fallback) => {
  const serverUrl = getServerUrl();

  if (!serverUrl) {
    return fallback;
  }

  const url = `${serverUrl}${path}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const contentType = res.headers.get("content-type") || "";

    if (!res.ok) {
      console.warn(`API request failed: ${url} returned ${res.status}`);
      return fallback;
    }

    if (!contentType.includes("application/json")) {
      console.warn(`API request did not return JSON: ${url}`);
      return fallback;
    }

    return await res.json();
  } catch (error) {
    console.warn(`API request failed: ${url}`, error);
    return fallback;
  }
};

export const getData = async () => {
  return fetchJson("/cursor", []);
};

export const getDetailsData = async (id) => {
  return fetchJson(`/cursor/${id}`, null);
};
