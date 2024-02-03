import { apiClient } from "./apiClient";

export const GetGoogleLogin = () => {
  return apiClient.post(
    "api/accounts/google/login/",
    {},
    { withCredentials: true },
  );
};
