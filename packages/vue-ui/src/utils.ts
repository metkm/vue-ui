
export const getWidestText = (items: string[]) => {
  const element = document.createElement("p");
  element.setAttribute("class", "text-sm absolute w-fit");
  document.body.appendChild(element);

  let currentMax = 0;
  for (const item of items) {
    element.innerText = item;
    currentMax = Math.max(element.clientWidth, currentMax);
  }

  element.remove();
  return currentMax;
}
