// most CIs add CI environment variable
// use that to stop husky in CI
!process.env.CI && require("husky").install()