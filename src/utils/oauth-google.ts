export const getGoogleAuthUrl = () => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth`;
  const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
  const redirect_uri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI as string;

  const query = {
    client_id,
    redirect_uri,
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    prompt: "consent",
    access_type: "offline",
  };
  const queryString = new URLSearchParams(query).toString();
  return `${url}?${queryString}`;
};
