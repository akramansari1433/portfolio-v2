import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
`;

type Data = {
    projects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const projects: Project[] = await client.fetch(query);
    res.status(200).json({ projects });
}
