package collections

fun main(args: Array<String>) {
    val map = HashMap<Long, String>()
    map.put(1, "João")
    map.put(2, "Maria")
    map.put(3, "Pedro")

    map.put(3, "Pedro Filho")

    for (par in map/*.entries*/) {
        println(par)
    }

    for (nome in map.values) {
        println(nome)
    }

    for (cpf in map.keys) {
        println(cpf)
    }

    for ((cpf, nome) in map) {
        println("$nome (CPF: $cpf)")
    }

    map.size.print()
    map.get(2)?.print()
    map[2]?.print()
    map.contains(2).print()
    map.remove(2)?.print()
    map.clear()

    map.isEmpty().print()
}