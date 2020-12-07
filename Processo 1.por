programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media,total
		cadeia vendedor

		escreva ("Digite o nome do(a) vendedor(a): ")
		leia(vendedor)
		escreva ("Digite as vendas de janeiro: ")
		leia(janeiro)
		escreva ("Digite as vendas de fevereiro: ")
		leia(fevereiro)
		escreva ("Digite as vendas de março: ")
		leia(marco)
		escreva ("Digite as vendas de abril: ")
		leia(abril)

		total = janeiro+fevereiro+marco+abril
		media = total/4

		escreva ("Senhor(a) " + vendedor + " o total de vendas realizadas foi: " + total + " e a sua média de vendas é: " + media)
		se (total>=10000){
			se (media>=5000){
			escreva ("\n" + "O senhor atingiu uma média perfeita de vendas e terá abono de 10%!!!")
		}
		senao {
			escreva ("\n" + "Parabéns, as suas vendas atingiram as espectativas e o senhor terá 3% de abono!" + "\n" + "Para ter abono de 10%, era necessário atingir média de pelo menos 5000")
		}
		}
		senao {
		escreva ("\n" + "O senhor não atingiu as espectativas mínimas")
		}
		
				
         }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 345; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */