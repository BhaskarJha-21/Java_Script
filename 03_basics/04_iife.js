// Immediately Invoked  Function Expressions (IIFE)
// WE USE IT TO REMOVE GLOBAL SCOPE POLUTION


(function chai() {
    // named IIFE hai ye kyuki iska naam h(chai)
    console.log(`DB CONNECTED`);
})();//ye semicolon zruri h aage k code k liye
// chai()

(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})(`bhaskar`)