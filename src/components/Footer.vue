<script>
export default {
    name: "Footer",
};
</script>

<template>
    <footer class="footer">
        <p>© 100 Kladdkakor. All rights reserved.</p>

        <div class="GitHub-link">
            <p>Team F repo</p>
            <a href="https://github.com/AndryanL/GrupparbeteTeamF" target="_blank">
                <img src="../assets/icons/github-.svg" alt="GitHub logo" />
            </a>
        </div>

        <div class="personal-links">
            <div class="Link">
                <p>Andryan</p>
                <a href="https://www.linkedin.com/in/andryan-lenander/" target="_blank">
                    <img class="icon" src="../assets/icons/Linkedin-icon-primary.svg" alt="LinkedIn logo" />
                </a>
            </div>
            <div class="Link">
                <p>Maria</p>
                <a href="https://www.linkedin.com/in/maria-gileborn-7b5a53149/" target="_blank">
                    <img class="icon" src="../assets/icons/Linkedin-icon-primary.svg" alt="LinkedIn logo" />
                </a>
            </div>
            <div class="Link">
                <p>Veronica</p>
                <a href="https://www.linkedin.com/in/bystroem/" target="_blank">
                    <img class="icon" src="../assets/icons/Linkedin-icon-primary.svg" alt="LinkedIn logo" />
                </a>
            </div>
            <div class="Link">
                <p>Viktoriia</p>
                <a href="https://www.linkedin.com/in/viktoriia-khrypun-a20a30195/" target="_blank">
                    <img class="icon" src="../assets/icons/Linkedin-icon-primary.svg" alt="LinkedIn logo" />
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>

.footer {
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-primary-light);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: var(--shadow-elevation-medium);
    text-align: left;
}

.footer p {
    color: var(--color-primary-light);
    margin: 0.5rem 1rem 0.5rem 0;
    font-size: 0.9rem;
}

.GitHub-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

.GitHub-link p {
    margin: 0 0 0.25rem 0;
    text-align: center;
}


.GitHub-link img {
    width: 2rem;
    height: auto;
    margin-left: 0.5rem;
}

.personal-links {
    display: flex;
    flex-wrap: wrap;
}

.Link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 1rem;
}

.Link p {
    margin: 0 0 0.25rem 0;
    text-align: center;
}

.Link > a > img.icon {
    width: 2rem;
    height: auto;
    margin-left: 0.5rem;
    transition: transform 0.2s;
}

.Link > a > img.icon:hover {
    transform: scale(1.1);
}  

</style>