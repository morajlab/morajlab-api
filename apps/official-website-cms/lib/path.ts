import { URL } from '../utilities/.';

export const getFullPath = (
  path: string,
  origin: 'WEBSITE' | 'API'
): string => {
  const url = new URL();

  return `${
    origin === 'WEBSITE' ? url.getWebsiteDomain() : url.getAPIDomain()
  }/${path}`;
};
