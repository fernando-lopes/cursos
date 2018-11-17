package fundamentos.operadores

fun main(args: Array<String>) {
    val executouTrabalho1: Boolean = true
    val executouTrabalho2: Boolean = true

    val comprouSorverte: Boolean = executouTrabalho1 || executouTrabalho2
    val comprouTv50: Boolean = executouTrabalho1 && executouTrabalho2
    val comprouTv32: Boolean = executouTrabalho1 xor executouTrabalho2

    println(comprouSorverte)
    println(comprouTv50)
    println(comprouTv32)

    //Operador Unário
    if (!comprouSorverte)
        println("A saúde agradece.")
}