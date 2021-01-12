<script>
  const go = new Go();
  WebAssembly.instantiateStreaming(fetch("json.wasm"), go.importObject).then(
    (result) => {
      go.run(result.instance);
    }
  );

  let jsoninput = "";
  let handleJson = function (input) {
    jsonoutput.value = formatJSON(input);
  };
</script>

<body>
  <main class="flex-grow w-full">
    <p>WASM Test</p>

    <textarea bind:value={jsoninput} cols="80" rows="20" />
    <input
      id="button"
      type="submit"
      name="button"
      value="pretty json"
      on:click={handleJson(jsoninput)} />
    <textarea id="jsonoutput" name="jsonoutput" cols="80" rows="20" />
  </main>
</body>
