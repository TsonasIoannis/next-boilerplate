const isGithubActions = process.env.GITHUB_ACTIONS || false;

let prefix = '';

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  prefix=`/${repo}/`
}

export { prefix };