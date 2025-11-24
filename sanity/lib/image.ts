import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "./client";

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource | undefined) => {
    if (!source) {
        // Return a placeholder or empty image builder
        return imageBuilder.image({ _type: "image", asset: { _type: "reference", _ref: "" } });
    }
    return imageBuilder.image(source);
};
