const host = document.querySelector("#shadowHost");
const shadowRoot = host.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
  <style>
    p { color: red; }
  </style>
  <p>Hello from Shadow DOM!</p>
`;
