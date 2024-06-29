const navItem= document.querySelectorAll(".navbar li a")
console.log(navItem)
console.log(navItem[3])

for(x of navItem){
    console.log(x);
    x.style.backgroundColor="black";
    x.style.color="white";
}
