.PHONY: copy build clean

all: out copy build

out:
	mkdir out

copy:
	cp -R files/* out

build: out/main.js

out/%.js:
	npx tsc --outFile $@ 

clean:
	- rm -rf out
