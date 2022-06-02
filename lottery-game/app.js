// Creating Elements
let count = document.getElementById("count");
let button = document.getElementById("lucky_button");
let numDiv = document.getElementById("numbers")

let counter = 0;

button.addEventListener("click", () => {
    
    count.addEventListener('mouseover',() => {
        window.location.reload(false);
    });
    
    for (let  counter = 0; count.value > counter; counter++) {
        let lucky_numbers = [];
        let firstNum = Math.ceil(Math.random() * 90);
        lucky_numbers.push(firstNum);

        let secondNum = Math.ceil(Math.random() * 90);
        lucky_numbers.push(secondNum);

        let thirdNum = Math.ceil(Math.random() * 90);
        lucky_numbers.push(thirdNum);

        let fourthNum = Math.ceil(Math.random() * 90);
        lucky_numbers.push(fourthNum);

        let fifthNum = Math.ceil(Math.random() * 90);
        lucky_numbers.push(fifthNum);

        let sixthNum = Math.ceil(Math.random() * 90);
        lucky_numbers.push(sixthNum);

        lucky_numbers.sort(function (a, b) { return a - b });



        let jokerNum;
        if (lucky_numbers.length == 6) {
            jokerNum = (Math.floor(Math.random() * 90));
            if (lucky_numbers.includes(jokerNum) != true) {
                lucky_numbers.push(jokerNum);
            };
            if (lucky_numbers.length == 7) {
                break;
            };

        };



        let superStarNum = Math.ceil(Math.random() * 90);

        lucky_numbers.push(superStarNum)

        let result = `${lucky_numbers[0]}-${lucky_numbers[1]}-${lucky_numbers[2]}-${lucky_numbers[3]}-${lucky_numbers[4]}-${lucky_numbers[5]} | ${lucky_numbers[6]} | ${lucky_numbers[7]}`


        let p = document.createElement("p");
        let hr = document.createElement("hr");
        p.innerText = result;

        numDiv.appendChild(p);
        numDiv.appendChild(hr);



        if (count.value == counter) {
            break;
        }
    }
});

