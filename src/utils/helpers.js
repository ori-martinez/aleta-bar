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
            { description: 'Frutos del Mar / Leche de Tigre Especial / Cebolla Morada / Ají / Cilantro', img: images.logo, name: 'Ceviche Aleta Bar', price: 10, },
            { description: 'Deliciosas y crujientes chips sazonadas con sal y especias, ideales para satisfacer tus antojos salados', img: images.logo, name: 'Chips Aleta Bar', price: 10, },
            { description: 'Amplia selección de frutos secos salados, perfectos para disfrutar como aperitivo', img: images.logo, name: 'Frutos Secos', price: 10, },
        ],
        time: 'Opciones de 5 Minutos',
        title: 'Para Comenzar',
    },
    {
        dishes: [
            { description: 'Bastones de queso envueltos en masa hojaldrada, acompañados de una exquisita miel de papelón', img: images.logo, name: 'Tequeños', price: 10, },
            { description: 'Mero / Leche de Tigre / Cebolla Morada / Ají Dulce / Cilantro', img: images.logo, name: 'Ceviche de Mero', price: 10, },
            { description: 'Salchicha Polaca / Mermelada de Tocineta / Concasse de Tomate / Salsa de la Casa / Aguacate / Cebolla Frita', img: images.logo, name: 'Perro Caliente Aleta Bar', price: 10, },
            { description: 'Langostinos crujientes envueltos en una capa de panko, servidos con una deliciosa salsa agri-picante o tártara', img: images.logo, name: 'Langontinos Crocantes', price: 10, },
        ],
        time: 'Opciones de 15 Minutos',
        title: 'Hora del Sabor'
    },
    {
        dishes: [
            { description: 'Deliciosas alitas de pollo crujientes, bañadas en una irresistible salsa buffalo casera y sazonadas con nuestras especias exclusivas. Acompañadas de papas fritas para completar la experiencia', img: images.logo, name: 'Buffalo Wings', price: 10, },
            { description: 'Dados de Pescado Fritos / Mojito Cubano con Ají / Leche de Tigre Clásica o Parchita', img: images.logo, name: 'Ceviche Crunch', price: 10, },
            { description: 'Pescado / Salsa de la Casa / Tomate / Lechuga / Cebolla Morada / Papas Fritas', img: images.logo, name: 'Hamburguesas Aleta Bar', price: 10, },
            { description: 'Tiras de Res Salteadas / Frutos del Mar / Papas Fritas', img: images.logo, name: 'Parrilla Aleta Bar', price: 10, },
        ],
        time: 'Opciones de 20 Minutos',
        title: 'Los Fuertes'
    },
    {
        dishes: [
            { description: 'Carne de Res / Queso Amarillo / Lechuga / Tomate / Cebolla / Trío de Salsas / Papas Fritas', img: images.logo, name: 'Hamburguesa Clásica', price: 10, },
            { description: 'Tiras de pollo fritas acompañadas de papas fritas', img: images.logo, name: 'Dedos de Pollo', price: 10, },
            { description: null, img: images.logo, name: 'Perro Caliente Clásico', price: 10, },
        ],
        time: null,
        title: 'Kids'
    },
    {
        dishes: [
            { description: 'Ron Blanco / Tequila / Champagne / Cerveza / Redbull / Jengibre / Tabasco / Hierbabuena / Fresa / Juego de Limón / Jugo de Parchita / Miel', img: images.logo, name: 'Pa’ Lo Hondo', price: 10, },
            { description: 'Ron Blanco / Tequila / Anís / Blue Curacao / Pimienta / Hierbabuena / Sprite', img: images.logo, name: 'Aleta Curda', price: 10, },
            { description: 'Ron Blanco / Vodka / Granadina / Jugo de Frutos Rojos / Jugo de Limón / Jengibre / Soda', img: images.logo, name: 'Marea Roja', price: 10, },
            { description: 'Vinotinto / Ron Dorado / Licor de Frutas Tropicales / Limón / Ginger Ale / Canela / Menta', img: images.logo, name: 'Sangrón al Timón', price: 10, },
            { description: 'Ron Blanco / Vodka / Tequila / Leche de Coco / Jugo de Piña / Licor de Coco / Leche Condensada', img: images.logo, name: 'Coco Nadador', price: 10, },
        ],
        time: 'Exclusivas',
        title: 'Peceras',
    },
    {
        dishes: [
            { description: 'Mojito / Margarita / Piña Colada / Cuba Libre / Pape Ron', img: images.logo, name: 'Cocteles Clásicos', price: 10, },
            { description: 'Nacionales e internacionales', img: images.logo, name: 'Cervezas', price: 10, },
            { description: 'Smirnoff / Tequila (Shot) / Promo del Día', img: images.logo, name: 'Promos', price: 10, },
        ],
        time: null,
        title: 'Bebidas',
    },
]
