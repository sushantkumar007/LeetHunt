import jwt from "jsonwebtoken";

const generateAccessRefreshToken = (payload) => {
  const accessToken = jwt.sign(
    { ...payload },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
  );

  const refreshToken = jwt.sign(
    { ...payload },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
  );

  return { accessToken, refreshToken };
};

export { generateAccessRefreshToken }