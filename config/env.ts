export type Environment = 'dev' | 'qa' | 'prod';

interface EnvConfig {
  baseUrl: string;
  username: string;
  password: string;
}

const environments: Record<Environment, EnvConfig> = {
  dev: {
    baseUrl: 'https://www.saucedemo.com',
    username: 'standard_user',
    password: 'secret_sauce'
  },
  qa: {
    baseUrl: 'https://www.saucedemo.com',
    username: 'standard_user',
    password: 'secret_sauce'
  },
  prod: {
    baseUrl: 'https://www.saucedemo.com',
    username: 'standard_user',
    password: 'secret_sauce'
  }
};

const selectedEnv = (process.env.TEST_ENV as Environment) ?? 'dev';

if (!Object.keys(environments).includes(selectedEnv)) {
  throw new Error(`Invalid TEST_ENV: ${selectedEnv}. Use dev | qa | prod.`);
}

export const envName = selectedEnv;
export const envConfig = environments[selectedEnv];
