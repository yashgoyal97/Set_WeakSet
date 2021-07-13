var combinations = [];
var colors = [];
var colorSet;

function formColorComb() {
    let colorCount = 0;
    while (colorCount < 4) {
        var color = this.getRandomColor();
        colors.push(color);

        //removing duplicate colors
        colorSet = new Set(colors);
        colors = [...colorSet];

        colorCount = colors.length;
    }
    this.colorCombination();
}

function getRandomColor() {
    // var letters = '0123456789ABCDEF';
    // var randomColor = '#';
    // for (var i = 0; i < 6; i++) {
    //     randomColor += letters[Math.floor(Math.random() * 16)];
    // }
    var myArray = ['#a52a2a', '#deb887', '#5f9ea0', '#9A1750', '#EE4C7C', 'tomato', 'cyan'];
    let randomColor = myArray[Math.floor(Math.random() * myArray.length)];
    return randomColor;
}

function colorCombination() {
    document.getElementById('container').innerHTML = '';
    colors.forEach(color => {
        var colorDiv = document.createElement('div');
        colorDiv.style.width = '100%';
        colorDiv.style.height = '50px';
        colorDiv.style.backgroundColor = color;
        colorDiv.innerText = color;
        document.getElementById('container').appendChild(colorDiv);
    });

    //Set is iterable
    // console.log('colorSet: ', colorSet);
    // for (var color of colorSet) {
    //     var colorDiv = document.createElement('div');
    //     colorDiv.style.width = '50%';
    //     colorDiv.style.height = '50px';
    //     colorDiv.style.backgroundColor = color;
    //     document.getElementById('container').appendChild(colorDiv);
    // }

    colors = [];
}

// function addColor() {
//     var newColor = document.getElementById('newColor').value;
//     document.getElementById('newColor').value = '';

//     //Adding new color to the existing set i.e. colorSet
//     console.log("before: ", colorSet);
//     colorSet.add(newColor);
//     console.log("after: ", colorSet);
//     this.colorCombination();
// }