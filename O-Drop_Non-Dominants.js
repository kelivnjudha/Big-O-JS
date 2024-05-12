function logItems(n){
    for(let i = 0; i < n; i++){ // First for loop ran O(n^2)
        for(let j = 0; j < n; j++){
            console.log(i, j);
        };
    };
    for(let k = 0; k < n; k++){ // Second for loop ran O(n)
        console.log(k);
    };
};

logItems(10); // This function become O(n^2 + n);