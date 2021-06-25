import { errorResponse, successResponse, getFullPath } from '../../../../lib/.';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (_req: NextApiRequest, response: NextApiResponse) => {
  const content = {
    IMAGES: {
      FAVICON: getFullPath('favicon', 'WEBSITE'),
      PROJECTS: getFullPath('projects', 'API'),
    },
    POSTS: {
      PROJECTS: getFullPath('projects', 'WEBSITE'),
    },
  };

  try {
    successResponse<Object>({
      response,
      content,
    });
  } catch (error) {
    errorResponse({ response, error });
  }
};
