import client from "./client";

/**
 * @description
 * @param {string} name User's Name
 * @param {string} email User's Email Address
 * @param {string} password User's Password
 * @returns Promise
 */
async function register(name, email, password) {
  return client("/auth/register", {
    method: "POST",
    data: { name, email, password },
    secure: false,
  });
}

/**
 * @description
 * @param {string} email User's Email Address
 * @param {string} password User's Password
 * @returns Promise
 */
async function login(email, password) {
  const {
    data: { access_token },
  } = await client("/auth/login", {
    method: "POST",
    data: { email, password },
    secure: false,
  });

  return access_token;
}

export { register, login };
