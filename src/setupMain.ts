import type { App } from 'vue'

function installUserModules(app: App) {
  const modulesFiles = import.meta.globEager('./setup/*.ts')
  Object.keys(modulesFiles).forEach((path) => {
    const module = modulesFiles[path]
    const installFn = module.install || module.default
    // auto import plugins for setup directory
    installFn(app)
  })
}

function setupMain({ app }: { app: App }) {
  installUserModules(app)
}

export default setupMain
