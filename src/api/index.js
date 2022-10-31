import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY || "http://localhost:4000/api",
  headers: {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyODE2NmQyYTkwOGExMGFmMmY0YWQ5IiwiZW1haWxJZCI6ImthZGFtcjYwN0BnbWFpbC5jb20iLCJpYXQiOjE2NjM2NTgwMTAsImV4cCI6MTY2NDI2MjgxMH0.Gde1ZqkxuPpsGOIJHa7h-DR9ctBU-J1cN9k_jq9NK6A",
  },
});

export default api;
