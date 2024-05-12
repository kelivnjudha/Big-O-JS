`omega`,`theta` ,and `Omicron (known as big-O)`


``` javascript

const array = [1,2,3,4,5,6,7];

array[0]; // value 1 'omega' the best case

array[3]; // value 4 'theta' average case

array[6]; // value 7 'Omicron' worst case (known as Big-O)

```
`omega` is represent as the best case.

# 1. 0(n) Operation (0(n) is going to be in straight line)

``` javascript
// 0(n)
function logItem(n){
    for(let i = 0; i<n; i++){
        console.log(i);
    };
};

logItem(10);

```


# 2. 0(n^2)
``` javascript

function logItems(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j);
        };
    };
};

logItems(10);

```