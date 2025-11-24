import { defineQuery } from "next-sanity";

export const SOCIALS_QUERY = defineQuery(`*[_type == 'social']`);

export const PAGE_INFO_QUERY = defineQuery(`*[_type == 'pageInfo'][0]`);

export const SKILLS_QUERY = defineQuery(`*[_type == 'skill']`);

export const PROJECTS_QUERY = defineQuery(`
    *[_type == 'project'] {
        ...,
        technologies[]->
    }
`);

export const EXPERIENCES_QUERY = defineQuery(`
    *[_type == 'experience'] {
        ...,
        technologies[]->
    }
`);
