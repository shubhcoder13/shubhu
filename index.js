async function fetchData(){
console.log("async function executed")
const data = await fetch('https://jsonplaceolder.typicode.com/users')
console.log("async function complete", data)
}