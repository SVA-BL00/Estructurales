*¿Cuál es la principal diferencia entre el patrón Decorator y el patrón Proxy?*
El decorador **agrega** funcionalidad extra, antes o después de alguna otra cosa. El proxy actúa como el representante de un objeto más grande, controlando su acceso.

*¿En qué tipo de escenarios usarías cada uno?*
El decorator sirve para fácilmente extender comportamiento, por ejemplo para agregar validación a funciones sin modificar la función desde dentro, solo "envolverla".

El proxy podría ser usado en partes como lazy loading en un página web, que una imagen grande carga sólo cuando es necesario.
