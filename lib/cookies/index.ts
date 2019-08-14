export const setCookie = (name: string, value: string) => {
  // Expires in 7 days
  const maxAge = 7 * 24 * 60 * 60;
  const d = new Date();
  d.setTime(d.getTime() + maxAge * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;`;
};

export const deleteCookie = (name: string) => {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
};
