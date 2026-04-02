function create_terminal(repository){
    terminal = document.createElement("div")
    terminal.classList.add("terminal");
    terminal.innerHTML = `<div class="grid terminal-header">
                        <div class="flex">
                                <div class="red button"></div>
                                <div class="yellow button"></div>
                                <div class="green button"></div> 
                            </div>
                        <p class="terminal-title">${repository.name.charAt(0).toUpperCase() + repository.name.slice(1)}</p>
                    </div>
                    <div class="terminal-body">
                        <div>
                            <p><span class="localhost">caiky@localhost:</span> <span class ="shell">~$</span> cat README.md</p>
                            <p>DESC: <span class="terminal-description">${repository.description}</span></p>
                        
                        </div>
                        
                        <a class ="view-source">View Source</a>
                    </div>`
    projects_grid = document.querySelector(".projects-grid");
    projects_grid.appendChild(terminal);
}
async function get_repos(){
    //Set the endpoint
    let endpoint = "https://api.github.com/users/Caiky-Souza/repos";
    
    // Get and return the repo list
    let request = await fetch(endpoint);
    let repo_list = await request.json();

    
    return repo_list;
}
async function main(){
    
    repos_to_locate = ["Portfolio","pyorganizer","Spotify-Analyzer"]
    repo_list = await get_repos();

    located_repos = []
    repo_list.forEach(element => {
        if (repos_to_locate.includes(element.name)){
            located_repos.push(element);
        }
    });  
    
    located_repos.forEach(element =>{
        create_terminal(element);
    })
    
}
main();