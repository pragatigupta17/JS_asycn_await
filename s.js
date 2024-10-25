//<button onclick="upform(item.id)"> update </button>


async function upform(item){
    let data = await fetch(`http://localhost:4000/product/${item}`);
    let res =await data.json();


}