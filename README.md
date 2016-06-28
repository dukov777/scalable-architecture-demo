# Introduction

Sample architecture from my blog post "[Scalable Single-Page Application Architecture](http://blog.mgechev.com/2016/04/10/scalable-javascript-single-page-app-angular2-application-architecture/)".

## How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

In order to start the seed use:


```bash
git clone --depth 1 https://github.com/mgechev/scalable-architecture-demo.git
cd scalable-architecture-demo
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
npm run docs

# dev build
npm run build.dev
# prod build
npm run build.prod

# generate manifest.appcache
npm run generate.manifest.prod
npm run generate.manifest.dev
```

# License

MIT

