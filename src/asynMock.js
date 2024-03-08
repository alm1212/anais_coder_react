const products = [
  {
    id: "1",
    name: "React",
    price: 5000,
    category: "Frontend",
    img: "../src/images/cursos_precargados/react.png",
    description: "React (también llamada React. js o ReactJS) es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.",
    stock: "20"
  },
  {
    id: "2",
    name: "JavaScript",
    price: 4000,
    category: "Frontend",
    img: "../src/images/cursos_precargados/javascript.jpg",
    description: "JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.",
    stock: "25"
  },
  {
    id: "3",
    name: "Css",
    price: 4000,
    category: "Frontend",
    img: "../src/images/cursos_precargados/css.jpg",
    description: "CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de los sitios.",
    stock: "30"
  },
  {
    id: "4",
    name: "Html",
    price: 3000,
    category: "Frontend",
    img: "../src/images/cursos_precargados/html.webp",
    description: "El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.",
    stock: "35"
  },
  {
    id: "5",
    name: "Java",
    price: 3000,
    category: "Backend",
    img: "../src/images/cursos_precargados/java.png",
    description: "Java es un lenguaje de programación ampliamente utilizado para codificar aplicaciones web. Ha sido una opción popular entre los desarrolladores durante más de dos décadas, con millones de aplicaciones Java en uso en la actualidad. Java es un lenguaje multiplataforma, orientado a objetos y centrado en la red que se puede utilizar como una plataforma en sí mismo.",
    stock: "40"
  },
  {
    id: "6",
    name: "NodeJs",
    price: 3000,
    category: "Backend",
    img: "../src/images/cursos_precargados/nodejs.png",
    description: "Node (o más correctamente: Node. js) es un entorno que trabaja en tiempo de ejecución, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de herramientas de lado servidor y aplicaciones en JavaScript.",
    stock: "45"
  },
  {
    id: "7",
    name: "C#",
    price: 3000,
    category: "Backend",
    img: "../src/images/cursos_precargados/csharp.png",
    description: "C# es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma .NET, que después fue aprobado como un estándar por la ECMA e ISO. C# es uno de los lenguajes de programación diseñados para la infraestructura de lenguaje común.",
    stock: "50"
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId))
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.id === productoId))
    }, 1000);
  });
};