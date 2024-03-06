export const SplitStringUsingRegex = (string) => {
  const charaters = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(string)) !== null) {
    charaters.push(match[0]);
  }

  return charaters;
};
