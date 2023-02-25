let wrapper = document.querySelector(".wrapper")
let card = document.createElement('div'),
    leter = document.querySelector('#leter'),
    gross = document.querySelector('#gross'),
    input = document.querySelector('#input')


function render(data) {
    wrapper.innerHTML = null
    data.forEach((e) => {
        let card = document.createElement('div')
        card.setAttribute(
            "class", "cards w-[310px] h-[425px] bg-white relative  shadow-xl border-[2px] border-black rounded-lg mb-6"
        );
        card.innerHTML = `
        <p class="font-[700] ml-[30px] text-[24px]  ">${e.num}</p>
        <img src="${e.img}" alt="img" class=" mx-auto mt-[30px]">
        <span class="w-full h-[2px] bg-gray-500 block"></span>
        
        <p class="font-[700] ml-[30px] text-[24px] mt-5 ">${e.name}</p><i class='bx bx-heart  absolute right-4 text-xl top-[51%]'></i>
        <p class="text-xl  ml-[30px] font-[500] "> ${e.type}</p>
        <p class="font-[700] ml-[30px] text-[24px] mt-7 inline-block">${e.weight}</p>
        <p class="font-[700] ml-[30px] text-[24px] mt-7 inline-block">${e.egg}</p>
        `
        wrapper.append(card)
    })
}
render(pokemons)
leter.addEventListener('change', (e) => {
    if (e.target.value === 'Aa-Zz') {
        let sortName = pokemons.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        render(sortName)
    } else {
        let sortName = pokemons.sort((a, b) => {
            return b.name.localeCompare(a.name)
        });
        render(sortName);
    }
})

function dinamicOption() {
    sortgross = []
    pokemons.forEach(item => {
        if (!sortgross.includes(item.type[0])) {
            sortgross.push(item.type[0])
        }

    })
    sortgross.sort();
    sortgross.forEach(item => {
        const option = document.createElement("option")
        option.innerHTML = item
        option.setAttribute("class" , "font-bold ")
        gross.append(option)
    })
}
dinamicOption()

gross.addEventListener("change", (e) => {
    const sortGross = pokemons.filter((item) => {
        return item.type[0] === e.target.value;
    })
    render(sortGross)
    console.log(sortGross);
});

input.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    let filterArr = pokemons.filter(item =>
        item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
    console.log(filterArr)

    render(filterArr)
})