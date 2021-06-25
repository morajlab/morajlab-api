import type { ISuccessResponseProps, IErrorResponseProps } from '../../types/.';

export const errorResponse = ({ response, error }: IErrorResponseProps) => {
  response.status(500).json({
    type: 'error',
    content: error.message,
  });
};

export const successResponse = <ContentType>({
  response,
  content,
  extraFields = {},
}: ISuccessResponseProps<ContentType>) => {
  response.status(200).json({
    type: 'success',
    content,
    ...extraFields,
  });
};
