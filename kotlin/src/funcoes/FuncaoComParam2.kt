package funcoes

fun <E> List<E>.filtrarComTresLetras(): List<E> {
    return filtrar(this, ::comTresLetras)
}


fun <E> filtrar(lista: List<E>, filtro: (E) -> Boolean): List<E> {
    val listaFiltrada = ArrayList<E>()
    for (e in lista) {
        if (filtro(e)) {
            listaFiltrada.add(e)
        }
    }
    return listaFiltrada
}

fun <E> comTresLetras(nome: E): Boolean {
    return if (nome is String) nome.length == 3 else false
}

fun main(args: Array<String>) {
    val nome = arrayListOf("Ana", "Pedro", "Bia", "Gui", "Rebeca")
    println(filtrar(nome, ::comTresLetras))
    println(nome.filtrarComTresLetras())
}