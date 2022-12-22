import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (username, email, password) => {
  const { data } = await $host.post("kst/user/registration", {
    username,
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("kst/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  console.log(jwt_decode(data.token));
  return jwt_decode(data.token);
};

export const profile = async (token) => {
  const { data } = await $host.post("kst/user/profile", {
    token,
  });
  console.log("OK");
  return data;
};

export const newStudent = async (name, email, answers) => {
  const { data } = await $host.post("kst/KST_autoschool/student_blank", {
    name,
    email,
    answers,
  });
  console.log(data);
  return data.message;
};
