import { Crypto } from "../types/types";
import { saveCryptosStorage } from "./localStorage";

export const exportCryptos = (cryptos: Crypto[] = []) => {
  const blob = new Blob([JSON.stringify(cryptos, null, 2)], { type: 'application/json' });

  downloadFile(blob);
}

export const importCryptos = async (file: File) => {
  const myCryptos = JSON.parse(await file.text());
  
  saveCryptosStorage(myCryptos);
}

function downloadFile(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-crypto-list.json';
  a.click();
}