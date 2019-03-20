module.exports = {
  jest: {
    configure: (jestConfig, {env, paths, resolve, rootDir}) => {
      jestConfig.setupFilesAfterEnv = [jestConfig.setupTestFrameworkScriptFile];
      delete jestConfig.setupTestFrameworkScriptFile;
      return jestConfig;
    },
  },
};
