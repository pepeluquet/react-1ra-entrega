const productos = [
  {
    "id": "1",
    "nombre": "Esterilla de Yoga Antideslizante (6mm)",
    "categoria": "Esterillas",
    "precio": 35.99,
    "descripcion": "Esterilla de yoga de alta calidad, fabricada con TPE ecológico, que proporciona un excelente agarre y amortiguación de 6mm para una práctica cómoda y segura. Ideal para todo tipo de yoga y pilates.",
    "url_imagen": ""
  },
  {
    "id": "2",
    "nombre": "Bloque de Yoga de Corcho",
    "categoria": "Accesorios",
    "precio": 12.50,
    "descripcion": "Bloque de yoga de corcho 100% natural, ideal para mejorar la alineación, el equilibrio y proporcionar soporte en diversas posturas. Duradero y respetuoso con el medio ambiente.",
    "url_imagen": ""
  },
  {
    "id": "3",
    "nombre": "Cojín de Meditación Zafu Redondo",
    "categoria": "Cojines y Bancos",
    "precio": 45.00,
    "descripcion": "Cojín Zafu tradicional para meditación, relleno de cáscara de trigo sarraceno orgánica que se adapta perfectamente a la forma de tu cuerpo. Funda extraíble y lavable de algodón.",
    "url_imagen": ""
  },
  {
    "id": "4",
    "nombre": "Cinta de Estiramiento de Algodón",
    "categoria": "Accesorios",
    "precio": 8.99,
    "descripcion": "Cinta de yoga de algodón resistente con hebilla metálica, ideal para mejorar la flexibilidad, alcanzar posturas más profundas y asistirte en estiramientos.",
    "url_imagen": ""
  },
  {
    "id": "5",
    "nombre": "Rueda de Yoga Dharma",
    "categoria": "Accesorios",
    "precio": 55.00,
    "descripcion": "Rueda de yoga resistente y duradera, perfecta para abrir el pecho, mejorar la flexibilidad de la columna vertebral y asistir en posturas de equilibrio e inversiones.",
    "url_imagen": ""
  },
  {
    "id": "6",
    "nombre": "Toalla de Yoga Antideslizante (Microfibra)",
    "categoria": "Accesorios",
    "precio": 22.99,
    "descripcion": "Toalla de microfibra súper absorbente y antideslizante, ideal para colocar sobre tu esterilla y absorber el sudor durante sesiones de yoga intensas como Bikram o Hot Yoga. Con puntos de silicona para mejor agarre.",
    "url_imagen": ""
  },
  {
    "id": "7",
    "nombre": "Set de 2 Bloques de Yoga EVA",
    "categoria": "Accesorios",
    "precio": 19.99,
    "descripcion": "Set de dos bloques de yoga ligeros y duraderos, fabricados en espuma EVA de alta densidad. Perfectos para principiantes y para quienes buscan un soporte adicional en diversas posturas.",
    "url_imagen": ""
  },
  {
    "id": "8",
    "nombre": "Manta de Yoga de Algodón Orgánico",
    "categoria": "Mantas",
    "precio": 39.50,
    "descripcion": "Manta suave y acogedora de algodón orgánico, ideal para Shavasana (relajación final), como soporte en posturas restaurativas o para añadir calor durante la meditación.",
    "url_imagen": ""
  },
  {
    "id": "9",
    "nombre": "Botella de Agua Reutilizable de Acero Inoxidable (750ml)",
    "categoria": "Accesorios",
    "precio": 18.00,
    "descripcion": "Botella de agua de acero inoxidable de doble pared, mantiene tus bebidas frías por 24 horas y calientes por 12. Ideal para mantenerte hidratado durante tu práctica de yoga o en el día a día.",
    "url_imagen": ""
  },
  {
    "id": "10",
    "nombre": "Incienso Artesanal (Palo Santo y Salvia Blanca)",
    "categoria": "Bienestar",
    "precio": 9.99,
    "descripcion": "Pack de incienso artesanal con 5 varitas de Palo Santo y 3 atados de Salvia Blanca. Ideal para purificar el ambiente, crear un espacio sagrado y fomentar la relajación antes o después de tu práctica.",
    "url_imagen": ""
  }
];

function ItemListContainer({ titulo }) {
    return (
        <section className="item-list-container">
            <h1>{titulo}</h1>
            {productos.map(producto => (
                <div key={producto.id} className="item">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ))}
        </section>
    )
}

export default ItemListContainer