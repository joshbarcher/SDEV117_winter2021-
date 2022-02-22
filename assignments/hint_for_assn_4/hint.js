let array = ["bandersnatch", "cromulent", "chuffed", "worcestershire", "illuminate"];
let selectList = document.getElementById("dropdown");

//selectList.innerHTML = array;

//loop over our array and add elements to the dropdown
for (let i = 0; i < array.length; i++)
{
    let singleWord = array[i];
    selectList.innerHTML += `<option>${singleWord}</option>`;
}

