async function get_repos(){
    //Set the endpoint
    let endpoint = "https://api.github.com/users/Caiky-Souza/repos";
    
    // Get and return the repo list
    let request = await fetch(endpoint);
    let repo_list = await request.json();

    
    return repo_list;
}
async function main(){
    
    repos_to_locate = ["portfolio","pyorganizer","Spotify-Analyzer"]
    repo_list = await get_repos();

    located_repos = []
    repo_list.forEach(element => {
        if (repos_to_locate.includes(element.name)){
            located_repos.push(element);
        }
    });  
    console.log(located_repos);
    
}
main();