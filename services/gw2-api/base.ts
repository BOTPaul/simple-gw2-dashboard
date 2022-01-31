import type { ServiceResponse } from "models/service-response";

const Versions = ["v1", "v2"] as const;
type Version = typeof Versions[number];

/**
 * Carries out a fetch to the GW2 API
 * @param path The API path to call. Must be sent without a / prefix
 * @param requestInit Optional request initialiser
 * @param version Optional version specifier
 * @returns ServiceRepsonse wrapper around expected returned data type
 */
export async function gw2Fetch<U>(
  path: string,
  requestInit?: RequestInit,
  version: Version = "v2"
): Promise<ServiceResponse<U>> {
  let errorMessage = "";
  try {
    console.log("FETCHING", `https://api.guildwars2.com/${version}/${path}`);
    const response = await fetch(
      `https://api.guildwars2.com/${version}/${path}`,
      {
        headers: {
          "X-Schema-Version": "latest",
        },
        ...requestInit,
      }
    );

    if (response.ok) {
      return {
        success: true,
        data: await response.json(),
      };
    }
  } catch (err) {
    if (typeof err === "object" && err) {
      errorMessage = err.toString();
    }
  }

  return {
    success: false,
    errorMessage,
  };
}
