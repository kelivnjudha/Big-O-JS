`omega`,`theta` ,and `Omicron (known as big-O)`


``` javascript

const array = [1,2,3,4,5,6,7];

array[0]; // value 1 'omega' the best case

array[3]; // value 4 'theta' average case

array[6]; // value 7 'Omicron' worst case (known as Big-O)

```
- `omega` is represent as the best case.
- `theta` is represent as average case.
- `Omicron` is represent as worst case. 


# 1. 0(n) Operation 

``` javascript
// 0(n)
function logItems(n){
    for(let i = 0; i<n; i++){
        console.log(i);
    };
};

logItems(10);

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

# 3. Drop Non-Dominants
``` javascript

function logItems(n){
    for(let i = 0; i < n; i++){ // Dominants
        for(let j = 0; j < n; j++){
            console.log(i , j); 
        };
    };
    for(let k = 0; k < n; k++){
        console.log(k); // Non-Dominants
    };
};

logItems(10)

```

# 4. O(log n)

``` javascript
//divide and conquer.


```

# Different Terms for Input 
Different terms for inputs is a very popular gotcha technical interview question.And to explain it, I'm going to bring up some code that we've seen before where we have a for loop

followed by another for loop.

``` javascript


function logItems(n){
    for(let i = 0; i < n; i++){
        console.log(i);
    };

    for(let j = 0; j < n; j++){
        console.log(j);
    };
};


```

And it was O of two n `O(2n)`, and we dropped the constant and it became O of n `O(n)`.


- ## The trick interview question is that instead of passing this `n`, we're going to pass it ``two variables``.

    - ### O of A plus B ( O(a + b) )

        ``` javascript

        // O(a + b)

        function logItems(a,b){
            for(let i = 0; i < a; i++){
                console.log(a);
            };
            for(let j = 0; j < b; j++){
                console.log(j);
            };
        };

        ```

        

