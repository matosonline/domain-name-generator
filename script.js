var a = ["the", "our", "his"];
var b = ["great", "big", "amazing"];
var c = ["jogger", "racoon", "dog"];

/*
var allOptionsArray = [a, b, c];
var combination = {codes : [], result : [], counter : 0};

 function getCombinations(allOptionsArray, combination) {
        if(allOptionsArray.length > 0) {
            for(var i=0; i < allOptionsArray[0].length; i++) {
                var tmp = allOptionsArray.slice(0);
                combination.codes[combination.counter] = allOptionsArray[0][i];
                tmp.shift();
                combination.counter++;
                getCombinations(tmp, combination);
            }
        } 
        else {
            var combi = combination.codes.slice(0);
            combination.result.push(combi);
        }
    };

getCombinations(allOptionsArray, combination);

for(var i=0; i < combination.result.length; i++) {
    document.getElementById("myList").innerHTML += "<li>"+combination.result[i]+"</li>";
    console.log(combination.result[i]);
}
*/

//first array
for (var i = 0; i < a.length; i++) {
    
    //second array
    for (var j = 0; j < b.length; j++) {
        
        //third aray
        for (var k = 0; k < c.length; k++) {
        
        console.log(a[i] + b[j] + c[k] +".com");

        document.getElementById("myList").innerHTML += "<li>"+ a[i] + b[j] + c[k] +".com</li>";
        }
    }

}

