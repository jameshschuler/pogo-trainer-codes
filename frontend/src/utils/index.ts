export function generateRandomString(length: number = 20): string {
  let randomString = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return randomString;
}
