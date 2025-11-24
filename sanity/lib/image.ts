import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
    if (!source?.asset?._ref) {
        return builder.image({ _type: "image", asset: { _type: "reference", _ref: "" } });
    }
    return builder.image(source).auto("format").fit("max");
}
