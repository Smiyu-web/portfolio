export const TextAnimation = () => {
  const animationTergetElements = document.querySelectorAll(".textAnimation");

  for (let i = 0; i < animationTergetElements.length; i++) {
    const targetElement = animationTergetElements[i],
      texts = targetElement.textContent,
      textsArray = [];

    targetElement.textContent = "";

    for (let j = 0; j < texts.split("").length; j++) {
      if (texts.split("")[j] === " ") {
        textsArray.push(" ");
      } else {
        textsArray.push(
          '<span><span style="animation-delay: ' +
            j * 0.01 +
            's;">' +
            texts.split("")[j] +
            "</span></span>"
        );
      }
    }

    for (let k = 0; k < textsArray.length; k++) {
      targetElement.innerHTML += textsArray[k];
    }
  }
};
