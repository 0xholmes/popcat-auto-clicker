// Normal
const event = new KeyboardEvent("keydown", { key: "g" })

setInterval(() => {
  for (i = 0; i < 1; i++) {
    document.dispatchEvent(event)
  }
}, 70)

// Or
const event = new KeyboardEvent("keydown", { key: "g" })

setInterval(() => {
  document.dispatchEvent(event)
}, 70)


// Super click
const event = new KeyboardEvent("keydown", { key: "g" })

setInterval(() => {
  for (i = 0; i < 1000; i++) {
    document.dispatchEvent(event)
  }
}, 0)
