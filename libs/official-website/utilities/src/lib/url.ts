export class URL {
  constructor(private env: typeof process.env = process.env) {}

  resolveURL = (url: string) =>
    /^https?:\/\//.test(url) ? url : `${this.getAPIDomain()}/${url}`;

  getAPIDomain = () => {
    const { API_PORT, API_DOMAIN, API_HTTPS_ENABLED } = this.env;

    return this.getDomain({
      port: API_PORT,
      domain: API_DOMAIN,
      https: API_HTTPS_ENABLED === 'true',
    });
  };

  getWebsiteDomain = () => {
    const { WEBSITE_PORT, WEBSITE_DOMAIN, WEBSITE_HTTPS_ENABLED } = this.env;

    return this.getDomain({
      port: WEBSITE_PORT,
      domain: WEBSITE_DOMAIN,
      https: WEBSITE_HTTPS_ENABLED === 'true',
    });
  };

  getDomain = ({
    port,
    domain,
    https,
  }: {
    port: string;
    domain: string;
    https: boolean;
  }) => `http${https ? 's' : ''}://${domain}${port ? `:${port}` : ''}`;

  getApiURL = (endpoint?: string) => {
    const { API_VERSION } = this.env;

    return `${this.getAPIDomain()}/api/v${API_VERSION}/${endpoint ?? ''}`;
  };
}
