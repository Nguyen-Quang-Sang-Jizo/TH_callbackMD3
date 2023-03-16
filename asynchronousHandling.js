function downLoad(url, callback){
    setTimeout(()=>{
        console.log(`Download ${url} `);
        callback(url);
    },1000)
}
function process(picture){
    console.log(`Process ${picture}`);
}
let url = "https://www.javasctirptutorial.net/pic.jpg";
downLoad(url, process)