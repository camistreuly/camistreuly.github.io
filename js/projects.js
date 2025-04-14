const projects = [
    {
        id: 1, 
        title: "OrientEcho",
        thumbnail: "assets/project-images/orientecho.png", 
        descriptionHTML: "",
        link: "project.html?id=1",
        detailed: true,
        portrait: false
    },
    {
        id: 2, 
        title: "Music Experience Lab Website",
        thumbnail: "assets/project-images/MEL.png", 
        descriptionHTML: `<p>
                            The Music Experience Lab website unifies multiple research projects under a
                            cohesive yet playful identity, emphasizing a rhizomatic, non-hierarchical
                            structure that reflects the lab's unconventional approach. Rather than adhering
                            to traditional academic presentation, the site positions the lab's work as
                            creative and exploratory, extending beyond institutional boundaries.
                        </p>
                        <p>
                            Built with HTML, CSS, and Matter.js, the site features an interactive
                            bubble-based selection technique, allowing users to navigate projects in an
                            organic, decentralized, and fluid way. This design reinforces the lab's ethos of
                            experimentation, inviting users to engage with research in a dynamic and
                            non-linear manner.
                        </p>
                        <video controls class="video-demo" autoplay muted loop>
                            <source src="assets/MEL-demo.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        `,
        link: "project.html?id=2",
        detailed: false,
        portrait: false
    },
    {
        id: 3, 
        title: "Bumble Smart Profile Assistant", 
        thumbnail: "assets/project-images/bumble.png",
        descriptionHTML: "DescriptionHTML coming soon.",
        link: "project.html?id=3",
        detailed: true,
        portrait: false
    },
    {
        id: 4, 
        title: "Mindscape",
        thumbnail: "assets/project-images/mindscape.png", 
        descriptionHTML: `<p>
                            This VR experience was designed to offer a highly customizable and immersive
                            meditation environment, leveraging Meta Quest 2 and Unity to provide deeper
                            relaxation than traditional in-person or mobile meditation options. By
                            minimizing environmental distractions—such as visual clutter, auditory noise,
                            and digital notifications—the experience fosters a greater sense of presence and
                            focus.
                        </p>
                        <p>
                            The project integrates hand-tracking technology to create a sense of deviceless
                            interaction, enhancing immersion and making customization feel moreorganic.
                            Users can tailor their meditation environment with ambient soundscapes, guided
                            body scans, breathing exercises, and environmental audio cues to support
                            mindfulness and relaxation.
                        </p>
                        <p>
                            My contributions included UI/UX design, environmental design, ambient sound
                            customization, and scene-loading implementation to ensure a fluid and intuitive
                            experience.
                        </p>
                        <video controls class="video-demo square">
                            <source src="assets/mindscape-demo.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>`,
        link: "project.html?id=4",
        detailed: false,
        portrait: false
    },
    {
        id: 5, 
        title: "Embodied Cognition in XR Design Model",
        thumbnail: "assets/project-images/conceptual.png", 
        descriptionHTML: `<p>
                            A conceptual model illustrating the relationship integrating principles of
                            embodied cognition and spatial computing. Developed to help designers navigate
                            and adapt to emerging spatial computing contexts, this model provides a
                            framework for making informed decisions when designing embodied digital
                            experiences.
                        </p>`,
        link: "project.html?id=5",
        detailed: false,
        portrait: false
    },
    {
        id: 6, 
        title: "Hear Here (and There)",
        thumbnail: "assets/project-images/wonderears.png", 
        descriptionHTML: `<p>
                            Hear Here (and There) is a listening device that allows users to selectively
                            localize and amplify their hearing in ways unafforded by our day-to-day pinnae.
                            In this exploration, my goal was to somehow augment or reframe a perceptual
                            experience. More specifically, I wanted to toy with a channel of communication.
                            I understood hearing as the indispensable counterpart to speech. Speech, which
                            is perhaps the most generous of channels, gives us an infinite means of
                            communicating ideas, thoughts, and emotions. By allowing users to selectively
                            amplify and direct their hearing, this device highlights how our attention
                            shapes how we engage with others, particularly in listening to others speak. 
                        </p>
                        <p>
                            This altered perceptual experience is somewhat disorienting but fosters
                            attention and awareness in the user. Everything is new. The question of how we
                            might use that attention in a museum exhibit experience motivated this
                            exploration. Can this make users more aware of their listening habits (when
                            wearing their typical ears)? Though the device is only worn by one person, the
                            people the user interacts with inevitably become part of this shared experience,
                            tied into the exhibit via communication. In the context of socioemotional
                            learning, the ear extensions create a new and focused space for connection
                            through interpersonal engagement and active listening.
                        </p>
                        <p>
                            More in-depth exploration for this project coming soon...
                        </p>`,
        link: "project.html?id=6",
        detailed: false,
        portrait: false
    },
    {
        id: 7, 
        title: "TOVA: A mass extinction play",
        thumbnail: "assets/project-images/tovasmog.png", 
        descriptionHTML: `<p>
                            Two posters designed for Tova: A Mass Extinction Play, an eco-drama exploring
                            climate despair, technology, and human connection in the face of an impending
                            city-destroying flood.
                        </p>`,
        link: "project.html?id=7",
        detailed: false,
        portrait: false
    },
    {
        id: 8, 
        title: "Soma in Silk Organza",
        thumbnail: "assets/project-images/soma.png", 
        descriptionHTML: `<p>
                            This project explores the concept of the body as “home” and what it means when
                            that sense of home feels uncertain. Through fabric sculpture, I examine themes
                            of identity, transformation, and embodiment.
                            
                        </p>
                        <p>
                            The physical design was inspired by a dream in which my skin separated along a
                            seam encircling my chest—an unpeeling, as though the skin encasing me was
                            beginning to unsheathe the pulp underneath. This imagery became the foundation
                            for my work, shaping a tactile exploration of the relationship between body and
                            self.
                        </p>
                        <p>
                            <span class="bold">Materials </span> <br>
                            Silk organza <br>
                            Madder root <br>
                            Weld <br>
                            Red sewing thread <br>
                            Burgundy embroidery thread <br>
                            Armature wire <br>
                            Beading wire <br>
                            Many marbles <br>
                        </p>`,
        link: "project.html?id=8",
        detailed: false,
        portrait: true
    },
    {
        id: 9, 
        title: "Noisy Mobile",
        thumbnail: "assets/project-images/noisymobile.png", 
        projectPageVideo: `<video controls loop>
                                    <source src="assets/mobile_demo.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>`,
        descriptionHTML: `<p>
                            The Noisy Mobile is an interactive Arduino and Max/MSP-based instrument that
                            responds to touch and movement. Each hanging wire functions as a capacitive
                            touch sensor, triggering electronic tones when lightly touched. An accelerometer
                            at the top of the mobile detects motion across three axes. The x-axis
                            acceleration value dynamically detunes each voice at different rates, meaning
                            that tilting the mobile subtly alters its harmonic structure.
                        </p>`,
        link: "project.html?id=9",
        detailed: false,
        portrait: true
    },
    {
        id: 10, 
        title: "TOVA: A mass extinction play",
        thumbnail: "assets/project-images/tovaboat.png", 
        descriptionHTML: "",
        link: "project.html?id=7",
        detailed: false,
        portrait: false
    }
    // ,{
    //     id: 11, 
    //     title: "Junior Recital Poster",
    //     thumbnail: "assets/project-images/recital.png", 
    //     descriptionHTML: "",
    //     link: "project.html?id=11",
    //     detailed: false,
    //     portrait: true
    // }
];



function populateProjectPage() {
    // Get the project ID from the URL (e.g., project.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get("id"));

    // Find the project data
    const project = projects.find(p => p.id === projectId);

    if (project) {
        // Populate project content
        document.title = project.title; // Update page title

        if (project.detailed) {
            // Redirect to a separate HTML file for detailed projects
            window.location.href = `project-${projectId}.html`;
            return;
        }

        document.getElementById("project-title").textContent = project.title;

        // if project is tova, fill in images with both tova posters (shared project page, separate links)
        if (projectId == 7) {
            document.getElementById("project-images").innerHTML = `<img src="assets/project-images/tovasmog.png"> <img src="assets/project-images/tovaboat.png">`
            document.getElementById("project-image").remove();
        }

        else if (projectId == 9) {
            document.getElementById("project-video").innerHTML = project.projectPageVideo;
            document.getElementById("project-image").remove();
        }

        else {
    
            document.getElementById("project-image").src = project.thumbnail;
            document.getElementById("project-image").classList.add("portrait-project-image");
            document.getElementById("project-image").alt = project.title;
            
        }
        document.getElementById("project-description").innerHTML = project.descriptionHTML;

    } 
    else {
        // Handle invalid project ID (e.g., redirect to home)
        // document.getElementById("project-content").innerHTML = "<p>Project not found.</p>";
    }
}


if (window.location.pathname == "/project.html") {
    populateProjectPage();
}

