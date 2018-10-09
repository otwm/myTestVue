
let files = require.context('@/middleware', false, /^\.\/(?!-)[^.]+\.(mjs|js|ts|tsx)$/)
let filenames = files.keys()

function getModule (filename) {
  let file = files(filename)
  return file.default
    ? file.default
    : file
}
let middleware = {}

// Generate the middleware
for (let filename of filenames) {
  let name = filename.replace(/^\.\//, '').replace(/\.(mjs|js|ts|tsx)$/, '')
  middleware[name] = getModule(filename)
}

export default middleware

