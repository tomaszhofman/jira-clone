export const client = async <T>(
  endpoint: string,
  {
    data,
    token,
    headers: customsHeaders,
    ...cutomConfig
  }: { data?: []; token?: string; headers?: any; cutomConfig?: string } = {}
): Promise<T> => {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}  ` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customsHeaders,
    },
    ...cutomConfig,
  };
  const response = await window.fetch(endpoint, config);
  const body = await response.json();

  if (response.ok) {
    return body;
  }
  return body;
};
