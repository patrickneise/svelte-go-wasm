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
  <main>
    <div class="container w-10/12 mx-auto">
    <h1 class="py-8 text-xl text-center">Svelte-Go-WASM</h1>
    
    <textarea bind:value={jsoninput} placeholder="JSON String" cols="80" rows="10" />
    <button type="button" on:click={handleJson(jsoninput)} class="block px-4 py-2 mx-auto my-5 bg-blue-400 w-30 text-gray-50">Pretty JSON</button>
    <textarea id="jsonoutput" name="jsonoutput" cols="80" rows="20" />
  </div>
  </main>
</body>
