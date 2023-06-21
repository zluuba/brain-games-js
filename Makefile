install:
	npm ci

package-install:
	sudo npm link

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
