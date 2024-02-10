export function getFilePath() {
  const file = __filename.split('.next/server/app')[1];
  return file;
}

export function getCurrentGithubLink() {
  return (
    'https://github.com/theodorusclarence/react-patterns/blob/main/src/app' +
    getFilePath()
  );
}
