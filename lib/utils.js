import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function fetchingPrice(cryptoId) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoId}&x_cg_api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();

    return data;
  }
}

export function formatNumberWithCommas(number) {
  const formatter = new Intl.NumberFormat("en-US");
  const formattedNumber = formatter.format(number);
  return formattedNumber;
}
