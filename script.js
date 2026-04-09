function create_terminal(repository, i){
    terminal = document.createElement("div")
    terminal.classList.add("card",`card-${i}`);
    let tags = repository.topics
    let tags_html = ""
    tags.forEach((tag)=>{
        tags_html = tags_html.concat(` <span class="project-tag">${tag}</span>`)
    });
    console.log(tags)
    terminal.innerHTML = `<div class="grid terminal-header">
                        <p class="terminal-title">${repository.name.charAt(0).toUpperCase() + repository.name.slice(1)}</p>
                    </div>
                    <div class="terminal-body">
                        <div class="tbody-text">

                            <p><span class="terminal-description">${repository.description}</span></p>
                        
                        </div>
                        <div>  
                            ${tags_html}
                        </div>
                        
                        <a class ="view-source" href="${repository.html_url}" target="_blank">View Source</a>
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

    console.log(repo_list)
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
    let i = 0
    located_repos.forEach(element =>{
        i++
        create_terminal(element, i);
    })
    
}
main();