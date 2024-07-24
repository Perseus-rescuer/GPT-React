import axios from "axios";

export const userLogin = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to Login");
  }

  const data = res.data;
  return data;
};

export const checkAuthStatus = async () => {
  try {
    console.log("Called checkAuth status");

    const res = await axios.get("/user/auth-status");
    console.log(res.status);

    if (res.status !== 200) {
      throw new Error("Unable to authenticate");
    }
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
