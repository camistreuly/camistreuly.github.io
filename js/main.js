const col1 = document.getElementById("col-1");
const col2 = document.getElementById("col-2");
const col3 = document.getElementById("col-3");
const template = document.getElementById("project-template");


function distributeProjects() {
    col1.innerHTML = "";
    col2.innerHTML = "";
    col3.innerHTML = "";

    if (window.innerWidth > 800) {
        // Distribute across three columns
        projects.forEach((project, index) => {
            const clone = template.content.cloneNode(true);
            const projectDiv = clone.querySelector(".project-thumbnail");
            const img = clone.querySelector(".thumbnail-image");
            const title = clone.querySelector(".title p");

            img.src = project.thumbnail;
            title.textContent = project.title;
            projectDiv.addEventListener("click", () => {
                window.location.href = project.link;
            });

            // Cycle through col-1 → col-2 → col-3
            if (index == 9) {
                 col2.appendChild(clone);
            }
            
            else {
                if (index % 3 === 0) col1.appendChild(clone);
                else if (index % 3 === 1) col2.appendChild(clone);
                else col3.appendChild(clone);
            }
            
        });
    } else {
        // Stack all in col-1
        projects.forEach((project) => {
            const clone = template.content.cloneNode(true);
            const projectDiv = clone.querySelector(".project-thumbnail");
            const img = clone.querySelector(".thumbnail-image");
            const title = clone.querySelector(".title p");

            img.src = project.thumbnail;
            title.textContent = project.title;
            projectDiv.addEventListener("click", () => {
                window.location.href = project.link;
            });

            col1.appendChild(clone);
        });
    }
}

if (window.location.pathname == "/index.html") {
    distributeProjects();
    
}
// // Initial population
distributeProjects();

// // Update on resize
window.addEventListener("resize", distributeProjects);

