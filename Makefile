CFLAGS = --config tsconfig.json
TARGETS = public/bundle.js

build: $(shell find src -type f)
	deno bundle src/main.ts $(CFLAGS) > public/bundle.js

clean:
	rm -f $(TARGETS)

serve:
	(cd public; deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts)

dev: clean build serve
