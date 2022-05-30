export default(text = "Gourdeau Loïc") => {
    const element = document.createElement("h1");
    element.innerHTML = text;
    return element;
};