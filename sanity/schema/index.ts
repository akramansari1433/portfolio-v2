import { type SchemaTypeDefinition } from "sanity";
import social from "./social";
import pageInfo from "./pageInfo";
import experience from "./experience";
import skill from "./skill";
import project from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [social, pageInfo, experience, skill, project],
};
