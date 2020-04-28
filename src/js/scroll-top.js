export function scrollTop () {
    const height = window.innerHeight;
    const scrollButton = document.querySelector('.button--scroll')

    document.addEventListener("scroll" , () => {
        if(document.documentElement.scrollTop > height / 2) {
            scrollButton.style.display = 'block';
        }

        else {
            scrollButton.style.display = 'none';
        }
    })

    scrollButton.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
}