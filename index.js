const episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const phrases = ["O que é mal? Tudo que surge da Fraquesa.", 
"Exige habilidade para ocultar que se tem grandes habilidades.", 
"O home é um animal de barganhas: nenhum outro animal faz isso, cachorro algum troca osso com outro.",
"Não devemos nos irritar com quem esconde a verdade da gente quando frequentemente escondemos a verdade de nós mesmos.",
"O inferno são as outras pessoas.",
"Há dois tipos de mentiras: uma é sobre fatos consumados, o outro é sobre deveres futuros.",
"Não há nada tão perigoso como o amigo ignorante: é preferível o inimigo sábio.",
"Abandone toda a esperança, vós que entrais aqui.",
"O homem está condenado a ser livre",
"Todo homem tem em si o traidor mais perigoso.",
"Em geral chamamos de destino as asneiras que cometemos.",
"Os gênios vivem apenas uma história de loucura"]

const author = ["Friedich Nietzsche em O Anticristo", 
"François de La Rochefoucald em Reflexões ou sentenças e máximas morais", 
"Adam Smith em A Riqueza das Nações",
"François de La Rochefoucald em Reflexões ou sentenças e máximas morais",
"Jean-Paul Sartre em Sem Saída",
"Jean-Jacques Rousseau em Emílio, ou Da Educação.",
"Jean de La Fontaine em Fábulas",
"Dante Alighieri em Divina Comédia - Inferno: Canto 3, Verso 9.",
"Jean-Paul Sartre em Existencialismo e Humanismo",
"Kierkegaard em Trabalhos de Amor",
"Arthur Schopenhauer em Pequenos escritos filosóficos",
"Arthur Schopenhauer em Parerga e Paralipomena"]

const randomIndex = length =>  {
  return Math.floor(Math.random() * length)
}

const printRandomMessage = () => {
  const randomEpisode = randomIndex(episodes.length)
  const randomPhrase = randomIndex(phrases.length)
  const randomAuthor = randomIndex(author.length)

  return console.log(`\nEpisódio ${episodes[randomEpisode]}\n
${phrases[randomPhrase]}\n
${author[randomAuthor]}`)
}

// The correct episode, phrase and author by the random index
const printRandomMessageTruly = () => {
  const randomNumber = randomIndex(episodes.length)

  return console.log(`\nEpisódio ${episodes[randomNumber]}\n
${phrases[randomNumber]}\n
${author[randomNumber]}`)  
}

printRandomMessage()
