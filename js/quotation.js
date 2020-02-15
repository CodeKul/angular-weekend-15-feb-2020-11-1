
let items = [
    { name: 'Mouse', qty: 3, price: 500 },
    { name: 'keyboard', qty: 2, price: 600 },
    { name: 'cabinate', qty: 1, price: 800 },
    { name: 'CPU', qty: 2, price: 54000 },
    { name: 'Monitor', qty: 2, price: 8000 },
    { name: 'SMPS', qty: 1, price: 15000 },
    { name: 'MB', qty: 1, price: 5000 },
    { name: 'RAM', qty: 3, price: 6000 },
    { name: 'SSD', qty: 2, price: 30000 },
    { name: 'Graphics', qty: 2, price: 6000 }
]

let qtTab = document.getElementById('qtTab')

items.forEach(function (item, pos) {
    console.log(item)

    let row = qtTab.insertRow(pos + 1)

    let cellName = row.insertCell(0)
    cellName.innerHTML = item.name
    cellName.style.textAlign = 'center'

    let cellQty = row.insertCell(1)
    cellQty.innerHTML = item.qty
    cellQty.style.textAlign = 'center'

    let cellPrice = row.insertCell(2)
    cellPrice.innerHTML = item.price
    cellPrice.style.textAlign = 'center'

    let cellTotal = row.insertCell(3)
    cellTotal.innerHTML = item.price * item.qty
    cellTotal.style.textAlign = 'center'
})

totalRow(calculateTotal())

function calculateTotal() {
    let total = 0
    items.forEach(item => total += (item.price * item.qty))
    return total
}
function totalRow(total) {
    let row = qtTab.insertRow(items.length + 1)
    let cellName = row.insertCell(0)
    cellName.style.textAlign = 'center'

    let cellQty = row.insertCell(1)
    cellQty.style.textAlign = 'center'

    let cellPrice = row.insertCell(2)
    cellPrice.innerHTML = '<strong>Total</strong>'
    cellPrice.style.textAlign = 'center'

    let cellTotal = row.insertCell(3)
    cellTotal.innerHTML = `<strong>${total}</strong>`
    cellTotal.style.textAlign = 'center'
}


function olderTable(item) {
    let row = document.createElement('tr')

    let name = document.createElement('td')
    name.textContent = item.name
    row.appendChild(name)

    let qty = document.createElement('td')
    qty.textContent = item.qty
    row.appendChild(qty)

    let price = document.createElement('td')
    price.textContent = item.price
    row.appendChild(price)

    qtTab.appendChild(row)
}