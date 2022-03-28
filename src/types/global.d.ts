type ENVStr = 'development' | 'production'

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: ENVStr
    VITE_BUILD_ENV: ENVStr
    VITE_APP_BASE_API: string
  }
}
