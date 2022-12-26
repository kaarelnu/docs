import { Configuration, IdentityApi } from "@ory/client"

const identityApi = new IdentityApi(
  new Configuration({
    basePath: `https://${process.env.ORY_PROJECT_SLUG}.projects.oryapis.com`,
    apiKey: `${process.env.ORY_ACCESS_TOKEN}`,
  }),
)

export async function ListSessions(
  expandOptions?: Array<"Devices" | "Identity">,
  pageToken?: string,
  pageSize?: number,
  active?: boolean,
) {
  // highlight-start
  // All parameters here are optional
  // Expand options can be used to include data for certain attributes in the response which are not returned by default to improve performance
  // Page Token obtained from the response header has to be set to receive subsequent page data
  return await identityApi.listSessions({
    expand: expandOptions,
    active: active,
    pageToken: pageToken,
    pageSize: pageSize,
  })
  // highlight-end
}
