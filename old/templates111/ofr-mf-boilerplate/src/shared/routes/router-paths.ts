const pathsMap = {
  initial: () => '/',
  auth: () => '/login',
  main: () => '/main',
  applications: () => `/main/applications`,
  application: (id: string) => `/main/applications/${id}`,
  createApplication: () => '/main/applications/create',
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(route: TRoute, ...params: Parameters<PathsMap[TRoute]>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pathCb: (...args: any[]) => string = pathsMap[route];

  return pathCb(...params);
};

const publicPages = [getPath('auth')];

export const isPrivatePage = (path: string): boolean => {
  return !publicPages.includes(path);
};
