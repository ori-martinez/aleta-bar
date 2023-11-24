// CONSTANTES
/* Imágenes */
export const images = {
    food: require('../assets/img-test.jpg'),
    hojas1: require('../assets/hojas-1.png'),
    hojas2: require('../assets/hojas-2.png'),
    hojas3: require('../assets/hojas-3.png'),
    logo: require('../assets/logo.png'),
    wall: require('../assets/wall.png'),
    welcome: require('../assets/welcome.png'),
}

/* Secciones */
export const sections = [
    {
        dishes: [
            { description: 'Frutos del mar / Leche de tigra especial / Maíz crocante', img: images.food, name: 'Ceviche Aleta Bar', price: 10, },
            { description: 'Aceitunas / Frutos secos cajún / Queso maduro', img: images.food, name: 'Trío de Snacks', price: 10, },
            { description: 'Chips variados con sal y especies', img: images.food, name: 'Chips Aleta Bar', price: 10, },
        ],
        time: '5 Minutos',
        title: 'Para Comenzar',
    },
    {
        dishes: [
            { description: 'Bastones de queso envueltos en masa / Salsa de papelón', img: images.food, name: 'Tequeños', price: 10, },
            { description: 'Mero / Leche de tigra / Cebolla morada / Ají dulce / Cilantro', img: images.food, name: 'Ceviche de Mero', price: 10, },
            { description: 'Zanahoria / Repollo / Papas fosforo / Trío de salsas', img: images.food, name: 'Perros Calientes', price: 10, },
        ],
        time: '10 Minutos',
        title: 'Hora del Sabor'
    },
    {
        dishes: [
            { description: 'Tiras de res salteadas / Frutos del mar / Papas fritas', img: images.food, name: 'Parrilla Aleta Bar', price: 10, },
            { description: 'Dos tortillas de trigo / Carne / Tomate / Lechuga / Salsa agria / Queso / Guacamole', img: images.food, name: 'Los Cuates', price: 10, },
            { description: 'Crujientes alas de pollo cubiertas en salsa buffalo y especies de la casa', img: images.food, name: 'Buffalo Wings', price: 10, },
        ],
        time: '10 Minutos',
        title: 'Los Fuertes'
    },
    {
        dishes: [
            { description: 'Descripción 01', img: images.food, name: 'Bebida 01', price: 10, },
            { description: 'Descripción 02', img: images.food, name: 'Bebida 02', price: 10, },
            { description: 'Descripción 03', img: images.food, name: 'Bebida 03', price: 10, },
        ],
        time: '5 Minutos',
        title: 'Bebidas',
    },
]
