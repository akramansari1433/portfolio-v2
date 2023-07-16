import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type == 'pageInfo'][0]
`;

type Data = {
    pageInfo: PageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const pageInfo: PageInfo = await client.fetch(query);
    res.status(200).json({ pageInfo });
}
