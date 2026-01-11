# Backend setup.

1.Initialize node project using:

    npm init -y

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
        "module": "commonjs",
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