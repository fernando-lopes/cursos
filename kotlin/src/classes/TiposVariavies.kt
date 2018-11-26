package classes

val diretamentoNoArquivo = "Bom dia"

fun topLevel() {
    val local = "Fulano"
    println("$diretamentoNoArquivo $local")
}

class Coisa {
    var variavelDeInstancia: String = "Boa noite"

    companion object {
        @JvmStatic val constanteDeClasse = "Ciclano"
    }

    fun fazer() {
        val local = 7

        if (local > 3) {
            val variavelDeBloco = "Beltrano"
            println("$variavelDeInstancia, $constanteDeClasse, $local, $variavelDeBloco!")
        }
    }
}

fun main(args: Array<String>) {
    topLevel()
    Coisa().fazer()
    println(Coisa.constanteDeClasse)
}