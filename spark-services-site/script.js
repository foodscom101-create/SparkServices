document.getElementById("orderForm")?.addEventListener("submit",function(e){

e.preventDefault()

const inputs=document.querySelectorAll("input, textarea")

const order={
name:inputs[0].value,
org:inputs[1].value,
items:inputs[2].value,
budget:inputs[3].value
}

let orders=JSON.parse(localStorage.getItem("orders"))||[]

orders.push(order)

localStorage.setItem("orders",JSON.stringify(orders))

alert("Order submitted!")

})

const ordersDiv=document.getElementById("orders")

if(ordersDiv){

let orders=JSON.parse(localStorage.getItem("orders"))||[]

orders.forEach(o=>{

let div=document.createElement("div")

div.innerHTML=`
<div class="card">
<h3>${o.name}</h3>
<p>${o.items}</p>
<p>Budget: ${o.budget}</p>
</div>
`

ordersDiv.appendChild(div)

})

}