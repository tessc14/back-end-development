//describes a middleware that logs any attempt to talk to the API

// request -> [logger (console.log key details)] -> [app] -> response

// must take three arguments 
function logger(request, response, next) {
    //request = client's request
    //response = response that is sent to client
    //next = the next step down in the API
    
    //log key details
    console.log(request.method, request.originalUrl);
    

    //pass down to the next layer
    next();
}

module.exports = logger;