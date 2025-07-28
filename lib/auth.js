const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log("Response status:", res.message);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Login gagal");
  }

  const data = await res.json();
  return data;
}
