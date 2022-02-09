const deRender = () => {
    let parent = document.querySelector("#container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export { deRender };