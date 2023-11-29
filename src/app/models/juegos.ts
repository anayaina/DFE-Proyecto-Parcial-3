export enum VideogameStatus {
  Available = 'Disponible',
  Sold = 'Vendido',
}

export interface Videogame {
  id: number;
  imagen: string;
  nombre: string;
  genero: string,
  plataformas: string[];
  estatus: VideogameStatus;
  descripcion: string;
  precio: number;
  vendedor: string;
}

export const listaVideogameDummy: Videogame[] = [
  {
    "id": 1,
    "imagen": "sims.jpg",
    "nombre": "Los Sims 4",
    "genero": "Simulacion",
    "plataformas": [
      "PC",
      "Xbox",
      "PlayStation"
    ],
    "estatus": VideogameStatus.Available,
    "descripcion": "Los Sims 4 es un videojuego de simulación de vida desarrollado por Maxis y publicado por Electronic Arts. Es la cuarta entrega principal de la serie The Sims y fue lanzado para Microsoft Windows y Mac OS X el 2 de septiembre de 2014.",
    "precio": 60,
    "vendedor": "Electronic Arts"
  },
  {
    "id": 2,
    "imagen": "cod.jpg",
    "nombre": "Call of Duty: Modern Warfare II",
    "genero": "Accion",
    "plataformas": [
      "PC",
      "Xbox",
      "PlayStation"
    ],
    "estatus": VideogameStatus.Available,
    "descripcion": "Call of Duty: Modern Warfare II es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Es la secuela de Call of Duty: Modern Warfare (2019) y fue lanzado para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S el 28 de octubre de 2022.",
    "precio": 70,
    "vendedor": "Activision"
  },
  {
    "id": 3,
    "imagen": "mario.jpg",
    "nombre": "Mario Kart 8 Deluxe",
    "genero": "Carreras",
    "plataformas": [
      "Nintendo Switch"
    ],
    "estatus": VideogameStatus.Sold,
    "descripcion": "Mario Kart 8 Deluxe es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es una versión mejorada de Mario Kart 8, lanzado originalmente para Wii U en 2014.",
    "precio": 50,
    "vendedor": "Nintendo"
  },
  {
    "id": 4,
    "imagen": "minecraft.jpg",
    "nombre": "Minecraft",
    "genero": "Sandbox",
    "plataformas": [
      "PC",
      "Xbox",
      "PlayStation",
      "Nintendo Switch",
      "Android",
      "iOS"
    ],
    "estatus": VideogameStatus.Available,
    "descripcion": "Minecraft es un videojuego de construcción de mundo abierto desarrollado por Mojang Studios y publicado por Microsoft Studios. El juego fue lanzado por primera vez para Microsoft Windows en 2011, y luego fue portado a varios otros sistemas operativos, incluyendo macOS, Linux, PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Nintendo Switch y dispositivos móviles.",
    "precio": 26.95,
    "vendedor": "Microsoft"
  },
  {
    "id": 5,
    "imagen": "gta.jpg",
    "nombre": "Grand Theft Auto V",
    "genero": "Accion",
    "plataformas": [
      "PC",
      "Xbox",
      "PlayStation"
    ],
    "estatus": VideogameStatus.Sold,
    "descripcion": "Grand Theft Auto V es un videojuego de acción-aventura desarrollado por Rockstar North y publicado por Rockstar Games. Es la quinta entrega principal de la serie Grand Theft Auto y fue lanzado para PlayStation 3 y Xbox",
    "precio": 26.95,
    "vendedor": "Rockstar"
  },
  {
    "id": 6,
    "imagen": "f1.jpg",
    "nombre": "F1 23",
    "genero": "Deportes",
    "plataformas": [
      "PC",
      "Xbox",
      "PlayStation"
    ],
    "estatus": VideogameStatus.Available,
    "descripcion": "F1 23 es un videojuego de carreras desarrollado y publicado por Codemasters y Electronic Arts. Es la decimotercera entrega principal de la serie F1 y fue lanzado el 1 de julio de 2023.",
    "precio": 60,
    "vendedor": "Electronic Arts"
  },
  {
    "id": 7,
    "imagen": "fifa23.jpg",
    "nombre": "FIFA 23",
    "genero": "Deportes",
    "plataformas": [
      "PC",
      "Xbox",
      "PlayStation"
    ],
    "estatus": VideogameStatus.Sold,
    "descripcion": "FIFA 23 es un videojuego de fútbol desarrollado y publicado por EA Sports. Es la trigésima segunda entrega principal de la serie FIFA y fue lanzado el 30 de septiembre de 2023.",
    "precio": 60,
    "vendedor": "Electronic Arts"
  },
];
