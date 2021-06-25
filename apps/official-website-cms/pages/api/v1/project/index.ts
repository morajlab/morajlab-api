import { getAllPosts, errorResponse, successResponse } from '../../../../lib/.';
import type { IProjectPost } from '../../../../types/.';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, response: NextApiResponse) => {
  try {
    const content = await getAllPosts<Partial<IProjectPost>>([
      'slug',
      'title',
      'coverImage',
      'excerpt',
      'link',
    ]);

    successResponse<Partial<IProjectPost>[]>({
      response,
      content,
      extraFields: {
        projectsCount: content.length,
      },
    });
  } catch (error) {
    errorResponse({ response, error });
  }
};
