/*  Error Handling

    ## Keywords
        *try
        *catch
        *finally
        *throw
        *Error


try {
        // try out some code
        // if an error occurs (if an error is thrown)
    if(2)
}
catch(err){
    //handle the err
}

try {

    if(2===2){ // does throw an error
        throw new Error ("Hey I am an error!") // will print like an error, in red..
    }
    console.log("Did I console log?") // if no error then this message will show, if there is an error then it will be ther first message
}
catch(err){
    console.log(err)
}
finally {   // to run once the try and catch have been completed. Runs regardless of an error or not. 

}
*/
// Practice



function sum(x, y){
    if(isNaN(x) || isNaN(y)) {
        throw ('is not a number');
    return x + y;
    }
}

try {
    sum(1 + 2);
} catch(err) {
    console.error(err);
}