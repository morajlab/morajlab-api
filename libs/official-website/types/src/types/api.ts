import type { NextApiResponse } from 'next';

export interface IAPIResponseProps<Type> {
  type: 'success' | 'error';
  content: string | Error | Type | Type[];
}

export interface IErrorResponseProps {
  response: NextApiResponse<{ type: 'error'; content: string | Error }>;
  error: Error;
}

export interface ISuccessResponseProps<ContentType> {
  response: NextApiResponse<{ type: 'success'; content: ContentType }>;
  content: ContentType;
  extraFields?: Object;
}
