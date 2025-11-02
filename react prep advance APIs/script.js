
    const targetNode = document.querySelector("#dynamicList");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          console.log("Child nodes changed:", mutation.addedNodes);
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
              console.log("New element added:", node.textContent);
            }
          });
        }
      });
    });

    observer.observe(targetNode, { childList: true });

    const addItemBtn = document.querySelector("#addItemBtn");
    let count = 3;
    addItemBtn.addEventListener("click", () => {
      const li = document.createElement("li");
      li.textContent = `Item ${count++}`;
      targetNode.appendChild(li);
    });

