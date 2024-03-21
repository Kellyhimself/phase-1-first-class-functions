

function receivesAFunction(function1){
    function1();/* receives a function as an argument and calls it */
};

function returnsANamedFunction(){
    const namedFunction = function(){
        return null
    };
    return namedFunction;/* returns a named function */
}

function returnsAnAnonymousFunction(){
    return function(){

    };/* returns an anonymous function */
}