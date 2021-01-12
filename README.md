# Svelte-Go-WASM

A small Golang in WASM with Svelte example.

Based on the [series of posts](https://golangbot.com/about/) from [Naveen Ramanathan](https://golangbot.com/about/) at [GOLANGBOT.COM](https://golangbot.com)

## Go App

The Go app is a simple JSON Pretty printer

```bash
/src/cmd/wasm/main.go
```

Build the WASM file and copy into Svlete app.

```bash
cd /src/cmd/wasm
GOOS=js GOARCH=wasm go build -o  ../../../public/json.wasm
```

## Svelte App

Install dependencies

```bash
yarn install
```

Start dev server

```bash
yarn start
```

Site available at [http://localhost:8080](http://localhost:8080)