const event = new KeyboardEvent("keydown", { key: "g" })

setInterval(() => {
  for (i = 0; i < 1; i++) {
    document.dispatchEvent(event)
  }
}, 70)
