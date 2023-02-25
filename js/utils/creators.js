export const createEl = ({
  tag,
  className,
  text,
  checked,
  innerHTML,
  ...attrs
}) => {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (text) element.textContent = text;
  if (checked) element.checked = checked;
  if (tag === "input" && !attrs.type) element.setAttribute("type", "text");
  if (innerHTML) element.innerHTML = innerHTML;

  Object.keys(attrs).forEach((attrName) => {
    element.setAttribute(attrName, attrs[attrName]);
  });

  return element;
};

export const renderContact = (contacts, parent) => {
  console.log(parent)
  const li = createEl({ tag: "li", className: "contact-item" });
  console.log(li)

  const link = createEl({
    tag: "a",
    href: "./detail.html",
    text: contacts.name,
  });

  console.log(li)
 
  li.append(link);
  parent.append(li);
};
