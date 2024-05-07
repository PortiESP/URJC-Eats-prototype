const requirements = {
    "welcome": [
        {
            title: "Esto es un prototipo, no una aplicación real",
            description: "Este prototipo ha sido creado con el fin de mostrar una posible aplicación de gestión de pedidos de comida para la URJC. No se trata de una aplicación real, por lo que la mayoría de las funcionalidades no están implementadas, y la información mostrada es ficticia. El objetivo de este prototipo es mostrar cómo podría ser la aplicación final, y recoger feedback del cliente y validar los requisitos para poder realizar los cambios necesarios antes de comenzar con el desarrollo de la aplicación real."
        }
    ],
    "login": [
        {
            code: "RF-05",
            title: "Iniciar sesión",
            description: "Los usuarios pertenecientes a la URJC podrán identificarse mediante sus credenciales URJC. Los usuarios externos a la URJC deberán poder registrarse mediante un correo y DNI. Al acceder por primera vez a su cuenta, deberán cambiar la contraseña obligatoriamente."
        },
        {
            code: "RF-13",
            title: "Informar sobre el cumplimiento de las leyes",
            description: "Los usuarios deben de ser informados acerca del cumplimiento de las siguientes leyes involucradas: Ley Orgánica 15/1999 y Ley Orgánica 3/2018"
        },
        {
            code: "RF-24",
            title: "Seleccionar idioma",
            description: "Los usuarios de la aplicación tendrán la opción de elegir el idioma dentro de las opciones disponibles."
        },
    ],
    "mainMenu": [
        {
            code: "RF-06" ,
            title: "Mostrar los platos disponibles",
            description: "En la aplicación se mostrarán los platos disponibles para elegir durante las próximas dos semanas junto a su información (tanto a los usuarios con sesión iniciada como sin ella)."
        },
        {
            code: "RF-09" ,
            title: "Filtrar platos",
            description: "El usuario podrá filtrar los platos disponibles según diferentes criterios (ingredientes, alérgenos, tipo de comida...)."
        },
        {
            code: "RF-10" ,
            title: "Buscar platos",
            description: "La aplicación contará con un buscador de platos por nombre."
        },
        {
            code: "RF-18" ,
            title: "Mostrar disponibilidad de la comida",
            description: "Los usuarios tendrán la posibilidad de consultar la disponibilidad de los diferentes platos ofrecidos. Evitando así que un usuario elija un plato del que no se espera disponibilidad basado en los pedidos ya realizados. (en este caso, solo se mostrarán los platos disponibles)."
        },
    ],
    "adminMenu": [
        {
            code: "RF-21",
            title: "Añadir plato",
            description: "El personal de catering podrá añadir platos nuevos a las opciones disponibles en la aplicación."
        },
        {
            code: "RF-22",
            title: "Eliminar plato",
            description: "El personal de catering podrá eliminar los platos que vayan a dejar de servirse en la aplicación."
        },
        {
            code: "RF-23",
            title: "Editar plato",
            description: "El personal de catering podrá editar los distintos datos de un plato, para poder reflejar cualquier cambio o actualización en un plato ya disponible en la aplicación."
        },
    ],
    "productDetail": [
        {
            code: "RF-01",
            title: "Seleccionar un menú",
            description: "El usuario podrá seleccionar hasta dos platos de entre los disponibles, además de postre, pan y agua."
        },
        {
            code: "RF-07",
            title: "Valorar plato",
            description: "Un usuario podrá valorar un plato con una calificación de 1 a 5 estrellas. Para poder valorar un plato, la aplicación debe marcarlo como recogido. (Esta opción solo estará disponible para los usuarios que hayan recogido el plato)."
        },
        {
            code: "RF-18",
            title: "Mostrar la disponibilidad de la comida",
            description: "Los usuarios tendrán la posibilidad de consultar la disponibilidad de los diferentes platos ofrecidos. Evitando así que un usuario elija un plato del que no se espera disponibilidad basado en los pedidos ya realizados."
        },
    ],
    "user": [
        {
            code: "RF-12",
            title: "Mostrar detalles y estadísticas de la cuenta",
            description: "En la aplicación se mostrarán diferentes detalles de la cuenta como los pedidos realizados y los datos de pago guardados, así como estadísticas de la cuenta (número de pedidos, dinero gastado, tipo de alimentación...)"
        },
        {
            code: "RF-26",
            title: "Cambiar contraseña",
            description: "Los usuarios externos a la URJC podrán cambiar su contraseña directamente desde la aplicación."
        },
    ],
    "cart": [
        {
            code: "RF-08",
            title: "Mostrar pedidos realizados",
            description: "La aplicación mostrará los pedidos realizados en un plazo de dos semanas a cada usuario. Además, deberá mostrar un estado por cada pedido que haya solicitado el cliente."
        },
        {
            code: "RF-11",
            title: "Permitir pagar los pedidos pendientes",
            description: "La aplicación permitirá seleccionar los pedidos sin pagar y permitirá pagarlos. Los pedidos sin pagar quedan guardados como un \"borrador\" que el usuario podrá seguir editando y solo se formalizará en el momento del pago."
        },
        {
            code: "RF-15",
            title: "Donar un plato",
            description: "Los usuarios tendrán la opción de donar un plato en caso de que hayan reservado un plato y no puedan ir a recogerlo. El receptor del plato donado debe ser un usuario con cuenta en la aplicación, y será elegido por su correo electrónico."
        },
        {
            code: "RF-16",
            title: "Notificar el estado del pedido",
            description: "La aplicación permitirá al usuario ver el estado actual de su pedido en todo momento. Así sabiendo si todavía no ha llegado, si se encuentra ya en el punto de recogida o si ya ha sido recogido."
        },
        {
            code: "RF-19",
            title: "Anular pedido",
            description: "Los usuarios tendrán la posibilidad de anular parte o la totalidad de sus pedidos durante la semana de antes. Entendiéndose que el cambio de semana está fijado a las 23:59:59 del domingo."
        },
        {
            code: "RF-25",
            title: "Soliciar reembolso",
            description: "Cuando se produce una cancelación de un pedido dentro de los plazos límite establecidos, se procede al reembolso del dinero al usuario."
        }
    ],
    "delivery": [
        {
            code: "RF-02",
            title: "Seleccionar lugar y fecha de recogida",
            description: "El usuario podrá seleccionar cuándo y dónde desea recoger su pedido."
        },
        {
            code: "RF-03",
            title: "Comunicarse con la pasarela de pago",
            description: "La aplicación implementará un pago seguro usando una pasarela de pago certificada."
        },
        {
            code: "RF-04",
            title: "Recordar datos de pago RF-04",
            description: "El usuario podrá seleccionar la franja horaria de entrega de su pedido."
        },
        {
            code: "RF-11",
            title: "Pagar pedidos pendientes",
            description: "La aplicación permitirá seleccionar los pedidos sin pagar y permitirá pagarlos. Los pedidos sin pagar quedan guardados como un \"borrador\" que el usuario podrá seguir editando y solo se formalizará en el momento del pago."
        },
        {
            code: "RF-17",
            title: "Mostrar la disponibilidad del locker",
            description: "Los usuarios tendrán la posibilidad de consultar la disponibilidad de los diferentes \"lockers\" situados en los campus URJC."
        },
    ],
    "faqs": [
        {
            code: "RF-14",
            title: "Mostrar una sección de preguntas frecuentes",
            description: "En la aplicación habrá una sección de FAQs para facilitar que los nuevos usuarios pueden resolver sus dudas sobre el funcionamiento de la aplicación y utilizarla de forma satisfactoria."
        },
    ],
    "pasMenu": [
        {
            code: "RF-20",
            title: "Dar de alta a un usuario externo", 
            description: "En el caso de los usuarios que no pertenezcan a la URJC, deberán ser dados por alta por un PAS con permisos de administrador."
        },
    ]
}

export default requirements;