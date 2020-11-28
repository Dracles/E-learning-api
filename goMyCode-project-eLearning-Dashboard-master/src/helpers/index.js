import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Config";

const isLoggedIn = () => {
  const token = localStorage.getItem("e-learning-token");
  if (!token) return false;
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    localStorage.setItem("userId", verified.userId);
    localStorage.setItem("email", verified.email);
    if (verified) return true;
  } catch (err) {
    return false;
  }
};
const logout = () => {
  localStorage.removeItem("e-learning-token");
};

export { isLoggedIn, logout };
