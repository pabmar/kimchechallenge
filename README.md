"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. 
Todas las tablas del sistema existen en la misma BDD en MySQL. 
La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos.
   El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). 
¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

	Se tendria que validar existencias de indices sobre los campos que se genere el update. Asumiendo que estos 90millones de filas es un registro historico, 
se debe ver la posibilidad de separar en una BBDD de respaldo para la data historica definiendo alguna antiguedad y mantener los datos mas recientes de manera 
accesible en la tabla que se actualiza diariamente esto se puede planificar con una automaticacion de backup en un periodo a definir para mantener el volumen de datos
de menor tamaño y estable en el tiempo. Por otro lado al ser un registro de asistencia diaria se tiene que dar un correcto control al Cache ya que el uso de este puede afectar
el rendimiento de las consultas. 
