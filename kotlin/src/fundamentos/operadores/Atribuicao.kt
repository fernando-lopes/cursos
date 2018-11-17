package fundamentos.operadores

fun main(args: Array<String>) {
    var a: Int = 7
    var b: Int = 3

    b += a
    b -= a
    b *= a
    b /= a
    b %= a

    println("$b")
}