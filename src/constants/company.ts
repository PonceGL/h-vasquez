import type { Companies, Pillar, WebData } from "../types/company";

export const COMPANY: WebData = {
  name: "Grupo Vaquez",
  fullName: "Grupo Empresarial Vaquez",
  address: "Margarita Olivo No. 15 Col. Rafael Lucio Xalapa, Ver",
  city: "Xalapa",
  state: "Veracruz",
  zip: "",
  phone: "228 812 3456",
  email: "contacto@grupovasquez.com",
  whatsapp: "228 865 4321",
  image:
    "https://res.cloudinary.com/civsa/image/upload/v1701203902/empresarial3/h1fv3ipzgp9rdaqack6x.jpg",
};

export const COMPANIES: Companies = {
  MATERIALES: {
    name: "MATERIALES VÁSQUEZ HNOS",
    fullName: "MATERIALES VÁSQUEZ HNOS S.A. DE C.V.",
    address: "Lázaro Cárdenas 274, Encinal, 91180 Xalapa, Ver.",
    mapsUrl: "https://maps.app.goo.gl/BWNJgs1Q4v9Tvw3w7",
    phone: "228 840 1919",
    // image: "https://res.cloudinary.com/civsa/image/upload/v1701203902/empresarial3/h1fv3ipzgp9rdaqack6x.jpg",
    image: "/sample/building.jpg",
    website: "https://materialesvasquez.com/",
  },
  TRANSPORTES: {
    name: "TRANSPORTES VASQUEZ",
    fullName: "TRANSPORTES VASQUEZ S.A. DE C.V.",
    address: "",
    phone: "228 155 0849",
    image: "/sample/transportes.jpg",
    // image: "https://res.cloudinary.com/civsa/image/upload/v1701203909/empresarial3/acm188uzxyiocjbk7fus.jpg",
  },
  CONSTRUCTORA: {
    name: "CONSTRUCTORA E INMOBILIARIA",
    fullName: "CONSTRUCTORA E INMOBILIARIA VASQUEZ",
    address:
      "Margarita Olivo Lara #15 Col. Rafael Lucio, C.P. 91110, Xalapa, Veracruz, México.",
    phone: "228 290 3272",
    image:
      "https://res.cloudinary.com/civsa/image/upload/v1638203929/brand/g4iizeszdlxuchc2fxrc.jpg",
    website: "https://www.inmobiliariavasquez.mx/",
  },
  TRANSPORTES_MJM: {
    name: "Transportes MJM",
    fullName: "Transportes MJM S.A. DE C.V.",
    address: "Calle Cirilo Celis Pastrana No. 4 COL. Rafael Lucio",
    phone: "228 488 0786",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOrvKVDVRU9rRd-9t71a8QKdjI1EoujytY4Irye=s1360-w1360-h1020",
    website: "https://mjmpaqueteria.com/",
    mapsUrl: "https://maps.app.goo.gl/muC2QL9wW9M75h248",
  },
};

export const PILLARS: Pillar[] = [
  {
    title: "construcción",
    description: "Lorem ipsum dolor sit amet constur adipelit sed.",
    image: "/logotipos/civsa.png",
  },
  {
    title: "materiales para construcción,  muebles y acabados",
    description: "Lorem ipsum dolor sit amet constur adipelit sed.",
    image: "/logotipos/materiales.png",
  },
  {
    title: "transporte de carga",
    description: "Lorem ipsum dolor sit amet constur adipelit sed.",
    image: "/logotipos/transportes-2.png",
  },
];
