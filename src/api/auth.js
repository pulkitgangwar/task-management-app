import client from "./client";

async function register(name, email, password) {
  return client("/auth/register", {
    method: "POST",
    data: { name, email, password },
    secure: false,
  });
}

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
