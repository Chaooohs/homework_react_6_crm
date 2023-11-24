export const createLocalStorage = (product, category) => {
  let otherProducts = JSON.parse(localStorage.getItem(category))

  if (otherProducts) localStorage.setItem(category, JSON.stringify([product, ...otherProducts]))
  else if (!otherProducts) localStorage.setItem(category, JSON.stringify([product]))
}


export const editLocalStorage = (product, params) => {
  let products = JSON.parse(localStorage.getItem(params.category))
  let otherProducts = products.filter(el => {
    if (el.id !== params.id) {
      return el
    }
  })
  localStorage.setItem(params.category, JSON.stringify([product, ...otherProducts]))
}


export const destroyLocalStorage = (params) => {
  let products = JSON.parse(localStorage.getItem(params.category))
  let otherProducts = products.filter(el => {
    if (el.id !== params.id) {
      return el
    }
  })
  localStorage.setItem(params.category, JSON.stringify(otherProducts))
}