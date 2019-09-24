const docx = require("img/word-doc.svg");
const pdf = require("img/pdf-doc.svg");
const txt = require("img/txt-doc.svg");
const jpg = require("img/jpg-doc.svg");
const png = require("img/png-doc.svg");
const exe = require("img/exe-doc.svg");
const rar = require("img/rar-doc.svg");
const zip = require("img/zip-doc.svg");

const getFileIcon = (name: string) => {
  if (!name) return "";

  const iconType =
    name.indexOf(".") > -1 ? name.substring(name.lastIndexOf(".") + 1) : name;

  switch (iconType) {
    case "docx":
      return docx;
    case "pdf":
      return pdf;

    case "txt":
      return txt;

    case "jpg":
      return jpg;

    case "png":
      return png;

    case "exe":
      return exe;

    case "rar":
      return rar;

    case "zip":
      return zip;
  }
};

export { getFileIcon };
