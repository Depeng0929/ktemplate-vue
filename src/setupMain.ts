import type { App } from 'vue'

function installUserModules(app: App) {
  const modulesFiles = import.meta.glob('./setup/*.ts')
  Object.keys(modulesFiles).forEach((path) => {
    const module = modulesFiles[path]

    module().then((m: any) => {
      const installFn = m.install || m.default
      installFn(app)
    })
  })
}

function setupMain({ app }: { app: App }) {
  installUserModules(app)
}

export default setupMain
