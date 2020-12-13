importScripts("./wasm_exec.js");

let wasm;
const run = async function (fileUrl) {
  try {
    const file = await fetch(fileUrl);
    const buffer = await file.arrayBuffer();
    const go = new Go();
    const { instance } = await WebAssembly.instantiate(buffer, go.importObject);
    go.run(instance);
    wasm = instance;
    return instance;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const runLoad = run("./kriging.wasm");

function start() {
  if (wasm) {
    return new Promise((resolve, reject) => {
      const gridrResult = OrdinaryKriging();
      return resolve(gridrResult);
    });
  } else {
    return runLoad
      .then(() => {
        const gridrResult = OrdinaryKriging();
        return gridrResult;
      })
      .catch((err) => {
        self.postMessage("err");
      });
  }
}

self.addEventListener(
  "message",
  function (event) {
    const data = event.data;
    switch (data.method) {
      case "start":
        // const gridrResult = RunOrdinaryKriging();
        start().then((gridrResult) => {
          self.postMessage(gridrResult);
        });
        break;
      case "stop":
        self.close(); // Terminates the worker.
        break;
      default:
        self.postMessage("Unknown command: " + data.msg);
    }
  },
  false
);
