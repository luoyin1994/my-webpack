let appendDom = (newDomHTML, targetDom) => {
    targetDom = document.querySelector(targetDom);
    targetDom.innerHTML += newDomHTML;
};

export default appendDom;
