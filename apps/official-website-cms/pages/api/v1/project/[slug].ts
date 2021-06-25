import {
  getPostBySlug,
  errorResponse,
  successResponse,
} from '../../../../lib/.';
import type { IProjectPost } from '../../../../types/.';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async ({ query }: NextApiRequest, response: NextApiResponse) => {
  const { slug } = query;

  try {
    const content = await getPostBySlug<Partial<IProjectPost>>(slug as string, [
      'title',
      'slug',
      'content',
      'coverImage',
    ]);

    successResponse<Partial<IProjectPost>>({ response, content });
  } catch (error) {
    errorResponse({ response, error });
  }
};
