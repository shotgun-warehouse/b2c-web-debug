import { setCookie, deleteCookie } from 'lib/cookies';
import { FacebookConnect_user } from '__genTypes__/FacebookConnect_user';

export const createSession = async (user: FacebookConnect_user) => {
  setCookie('token', user.jwt!);
};

export const clearSession = async () => {
  await deleteCookie('token');
};

export const createAuthTokenHeaderEntry = (optionalToken?: string) => {
  const token = optionalToken || undefined;
  if (token) {
    return {
      authorization: `Bearer ${token}`,
    };
  } else {
    return {};
  }
};
