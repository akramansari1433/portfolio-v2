import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
  perspective: "published",
  stega: { enabled: false, studioUrl: "/studio" },
});
