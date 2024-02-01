export const GlobalEnvConfig = Object.freeze({
  PORT: import.meta.env.VITE_PORT ?? '',
  BASE_API_PREFIX: import.meta.env.VITE_BASE_API_PREFIX ?? '',
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL ?? '',
  MOCK_API_PREFIX: import.meta.env.VITE_MOCK_API_PREFIX ?? '',
  MOCK_API_URL: import.meta.env.VITE_MOCK_API_URL ?? '',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD
})
