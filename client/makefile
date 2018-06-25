CURRENT_DIR = ${CURDIR}
BIN = node_modules/.bin

default: build
install:
	npm install;
clean:
	rm -rf dist/;
build: clean
	$(BIN)/parcel build src/index.js;
watch:
	$(BIN)/parcel watch src/index.js;
