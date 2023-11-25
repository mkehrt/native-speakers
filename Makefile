.PHONY: copy build clean

all: out copy build

out:
	mkdir out

copy:
	cp -R files/* out

build: out/main.js

out/main.js: tsconfig.json
	npx tsc

clean:
	- rm -rf out
