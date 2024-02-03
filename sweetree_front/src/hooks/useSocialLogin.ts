import { GetGoogleLogin } from "../apis/auth";

export const useSocialLogin = () => {
  const handleGoogleLogin = () => {
    GetGoogleLogin()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
      });
  };
  return { handleGoogleLogin };
};
