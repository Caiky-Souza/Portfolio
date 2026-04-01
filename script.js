function main(){
    let endpoint = "https://api.github.com/users/Caiky-Souza/repos";
    let answer = fetch(endpoint);
    console.log(answer);
}
main();