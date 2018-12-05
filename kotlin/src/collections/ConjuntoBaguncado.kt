package collections

fun Any.print() = println(this)

fun main(args: Array<String>) {
    val conjunto = hashSetOf(3, 'a', "texto", true, 3.14)

    //conjuntos.get(0)

    //não foi possível repetir valor no Set
    conjunto.add(3).print()
    conjunto.add(10).print()
    conjunto.size.print()
    conjunto.remove("a").print()
    conjunto.remove('a').print()
    conjunto.contains('a').print()
    conjunto.contains("texto").print()
    conjunto.contains("Texto").print()

    val nums = setOf(1, 2, 3) //somente leitura
    // nums.add(4)

    (conjunto + nums).print()
    (conjunto - nums).print()

    conjunto.intersect(nums).print() // não muda o conjunto
    conjunto.retainAll(nums) // muda o conjunto
    conjunto.print()

    conjunto.clear()
    conjunto.isEmpty().print()
}