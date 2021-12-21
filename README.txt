RETO SOFKA 2021 
CREADOR: MAYCOL STEVEN RINCON BAYONA
FECHA DEL RETO: 18/12/2021 11:25am  -->  21/12/2021 11:25am


INSTRUCCIONES DEL JUEGO:
  - El juego es de preguntas matematicas, de fisica, probabilidad o geometria, dependiendo de la categoria en que se encuentre
  - La pagina de inicio permite ir a Jugar o ver el puntaje de los jugadores
  - El juego consta de 5 rondas
  - Cada ronda es una categoria con nivel de dificultad
  - Si el jugador se retira, su puntaje será el que lleva acumulado
  - Si el jugador selecciona una pregunta erronea, pierde los puntos y se acaba el juego
  - Cuando el juego se acaba, se puede guardar el nombre del jugador, volver a jugar, o ir al menu de inicio
  - Si se guardan lo datos del jugador, automaticamente se redirige al menu inicio
  - El puntaje ganado en cada ronda, aumenta segun el numero de rondas


INFORMACION DEL RETO:
    - El reto esta escrito en HTML, CSS y Javascript
    - Javascript se utilizó con la estructura de programación orientada a objetos (OOP) como se especificó en la guia del reto.
    - La pagina inicial es home.htlm que contiene el inicio del programa
    - El programa tiene clases y una funcion main en app.js
    - No se utilizó base de datos para una facil ejecucion del juego
    - En el archivo /data/data.js estan los datos de las 25 preguntas, con sus opciones y respuestas
    - La clase Question.js permite dar forma al objeto de la pregunta
    - el metodo en questions.js toma aleatoriamente una pregunta de infomacion en data.js y la convierte en objestos Question
    - La clase Game.js contiene los metodos del juego, contiene el puntaje, la ronda y metodos para verificar la respuestas
    - La clase UI.js contiene los metodos que interactuan con la interfaz de usuario, la infomacion mostrada en pantalla y sus interacciones
    - Los datos del jugador son almacenados en un array en el localStorage del navegador
