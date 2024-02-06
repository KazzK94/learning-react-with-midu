
# Before running tests

## Install dependencies
pnpm install vitest happy-dom @testing-library/react -D

vitest: 
 the framework to do the testing
happy-dom: 
 environment to easily access the dom in the tests
@testing-library/react:
 tools for testing react components

## Add happy-dom as environment in Vite Config
Open the file vite.config.js and add this to the defineConfig:
 test: {
	environment: 'happy-dom'
 }

## Add vitest to a script in package.json
In the package.json, under scripts, add a new script:
 test: "vitest"

# Now you can run tests
Run pnpm run test