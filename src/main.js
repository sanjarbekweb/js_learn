const todos = [
  {
    title: "Todo #1",
    body: "go to shop, buy some cheese",
    completed: true
  },
  {
    title: "Todo #2",
    body: "sleep in a bed",
    completed: false
  },
  {
    title: "Todo #3",
    body: "go to work",
    completed: true
  },
  {
    title: "Todo #4",
    body: "hava breakfast",
    completed: false
  }
]

const ulElement = document.querySelector("ul")

for (const todo of todos) {
  const liElement = document.createElement("li")
  const titleElement = document.createElement("span")
  const bodyElement = document.createElement("span")
  const check = document.createElement("span")

  titleElement.className = "title"
  bodyElement.className = "bodyEl"

  liElement.appendChild(titleElement)
  liElement.appendChild(bodyElement)
  liElement.appendChild(check)

  titleElement.textContent = todo.title
  bodyElement.textContent = todo.body

  if (!todo.completed == false) {
    liElement.style.textDecoration = "line-through"
    liElement.style.opacity = "0.5"
    liElement.style.boxShadow = "none"
  }
  ulElement.appendChild(liElement)
}

