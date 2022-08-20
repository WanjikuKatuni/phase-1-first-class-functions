function receivesAFunction(callback){
    console.log(callback());
}

receivesAFunction(function(){return "hi, there"});

function returnsANamedFunction(){
    function activity(){
        return "hello";
    }
    return activity;
}

function returnsAnAnonymousFunction(){
    return (function(){
        return "hi"
    })
}
