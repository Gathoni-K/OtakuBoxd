# Backend setup.

1.Initialize node project using:

    npm init -y
    //the above command set commonJS as our default way to 

2.Install core dependencies using:

    npm install express cors dotenv
    npm install -D typescript @types/node @types/express ts-node nodemon

3.Initialize TypeScript.

    npx tsc --init

-Update our tsconfig.json.

    {
    "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist",
        "module": "ESNext",
        //changed from common JS
        "target": "ES2020",
        "lib": ["ES2020"],
        "types": ["node"],
        "sourceMap": true,
        "declaration": true,
        "declarationMap": true,
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,
        "strict": true,
        "verbatimModuleSyntax": true,
        "isolatedModules": true,
        "noUncheckedSideEffectImports": true,
        "moduleDetection": "force",
        "skipLibCheck": true,
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "moduleResolution": "node"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
    }

## Understanding our backend.

-Node.js and Express.

-Node is a runtime environment the engine that lets us run JS outside a browser.

-Express is a framework running on top of Node that makes the building of web servers easier.
-Is the tool used to build the backend API.

**CommonJS vs ES Modules.**
-There are 2 different module systems, ways to import and export code between files.

-ES modules is the modern standard, is asynchronous, future proof and offers better tooling.

-When setting up our project, the default method is usually set to commonJS, to change that, follow the steps below:

1.Update package,json to:

        {
    "name": "server",
    "version": "1.0.0",
    "description": "",
    "type": "module",
    "main": "dist/index.js",
    "scripts": {
        "dev": "tsx watch src/index.ts",
        "build": "tsc",
        "start": "node dist/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^17.2.3",
        "express": "^5.2.1"
    },
    "devDependencies": {
        "@types/cors": "^2.8.17",
        "@types/express": "^5.0.6",
        "@types/node": "^25.0.6",
        "tsx": "^4.7.0",
        "typescript": "^5.9.3"
    }
    }

2. Install and replace dependencies using:

    npm uninstall nodemon ts-node
    npm install -D tsx @types/cors

3.Update tsconfig.json to, refer to line 23.


## Actually building the backend.



