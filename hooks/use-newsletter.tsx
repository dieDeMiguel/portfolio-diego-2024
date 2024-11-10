// I got this whole snippet from one of midudev's projects
// copyright recognition 100%, he is amazing:
// https://github.com/midudev/noticias.dev/blob/main/src/hooks/useNewsletter.js
'use client'
import { useState } from "react";

export const RESULTS = {
  IDLE: "IDLE",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
  ALREADY_SUBSCRIBED: "ALREADY_SUBSCRIBED",
};


export const useNewsletter = ({endpoint}: {endpoint: string}) => {
  const [result, setResult] = useState(RESULTS.IDLE);

  const register = async ({ email }: {
    email: string;
  }) => {
    setResult(RESULTS.LOADING);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (response.status === 409) setResult(RESULTS.ALREADY_SUBSCRIBED);
    else if (!response.ok) setResult(RESULTS.ERROR);
    else setResult(RESULTS.SUCCESS);

    setTimeout(() => {
      setResult(RESULTS.IDLE);
    }, 3500);
  };

  return { register, result };
};