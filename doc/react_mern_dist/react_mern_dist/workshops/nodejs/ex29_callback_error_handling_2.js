// Throw error in callback does not work

var callback = (msg) => {
    console.log(msg);
    if (msg === 'please error') {
        throw new Error("I am error exception")
    }
}

try {
    setTimeout(callback.bind(null, "please error"), 2000);
} catch (ex) {
    console.info(ex);
}

