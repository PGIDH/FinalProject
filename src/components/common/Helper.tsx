export function createDivTag(className: string): HTMLDivElement {
    let divTag = document.createElement("div");
    divTag.classList.add(className);
    return divTag;
}

export function createAnchorTag(href: string, style?: string): HTMLAnchorElement {
    let anchorTag = document.createElement("a");
    anchorTag.href = href;
    anchorTag.target = "_blank";
    // anchorTag.style.cssText = style;
    return anchorTag;
}

export function createImageTag(src: string, className: string, alt: string, id: string): HTMLImageElement {
    let imageTag = document.createElement("img");
    imageTag.setAttribute("id", id);
    imageTag.src = src;
    imageTag.alt = alt;
    imageTag.classList.add(className);
    return imageTag;
}