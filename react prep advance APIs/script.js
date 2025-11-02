    // Select the host element
    const host = document.querySelector("#shadowHost");

    // Attach a Shadow DOM to it
    const shadowRoot = host.attachShadow({ mode: "open" });

    // Add content and styles inside the Shadow DOM
    shadowRoot.innerHTML = `
      <style>
        p {
          color: red;
          font-weight: bold;
          margin: 0;
        }
      </style>
      <p>Hello from Shadow DOM!</p>
    `;