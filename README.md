Aplicação utilizando EXPO
Definição: é um framework que simplifica o ambiente de trabalho mobile, sem que seja feitas configurações
Expo Client: responsável por receber os pacotes em javascript e passar para o dispositivo fixo em Java ou para o emulador
Documentação: docs.expo.io
Workflow: managed (é um estilo de desenvolvimento onde limita-se em questão de funcionalidades nativas mais específicas, porém o gerenciamento é mais simples por conta do expo, e é possível utilizar somente as bibliotecas disponibilizadas pelo expo em sua documentação) e bare (possibilita que funcionalidades mais específicas para cada plataforma seja criada, além disso as pastas android e ios são criadas no diretório do projeto)
Inicialização: expo init nome_do_projeto, qualquer biblioteca será instalada e gerenciada com o expo-cli. Com o emulador aberto, basta acessar a opção Run on Android Emulator na página do desenvolvedor

Styled Component
Definição: é uma biblioteca usada no react native para trabalhar com as propriedades de estilização semelhantes ao CSS na web. Basicamente será criado um componente de estilização, ao invés de ser uma propriedade para style.
Instalação: yarn add styled-components; yarn add @types/styled-components-react-native -D (tipagem no react native)
Documentação: https://styled-components.com/
Dicas: as propriedades em cascata ficam no formato pascal-case e dentro de uma `literal string` (não camelCase nem snake_case)

ThemeProvider
Definição: é um tipo de contexto usado quando deve ser definido um estilo global de temas para acesso de todos os arquivos do projeto, não sendo necessário assim realizar um import na localização do tema a ser usado (é importado somente no arquivo que executa a aplicação - App.tsx)

Fontes
Definição: as configurações realizadas para fontes dentro do expo são mais simples do que nativamente, visto que basta somente pegar no Google fonts (https://fonts.google.com/)
Instalação: expo install expo-font @expo-google-fonts/nome_da_fonte
Dicas: realizar o import das fontes no App.ts/js e deve ser utilizado o hook useFonts no qual retorna um valor booleano caso as fontes carregarem

App loading
Definição: componente do expo que lida com telas de carregamento para dispositivos que precisam carregar fontes, logos, ícones, entre outros
Instalação: expo install expo-app-loading
Documentação: https://docs.expo.dev/versions/latest/sdk/app-loading/

Densidade de pixels
Definição: conceito importante que relaciona as interfaces de diferentes celulares e como os elementos são renderizados em cada tela, sendo que dependendo da plataforma (Android, IOS, PC) a densidade de pixels será diferente. Entretando, trabalha-se com a independência de pixels, para proporções dependendo da tela, unidades relativas, fontes responsivas, entre outros. Ou seja, se uma tela tem mais pixels para um componente, o mesmo componente será renderizado com o mesmo tamanho em telas de densidades de pixels diferentes
Documentação: https://www.npmjs.com/package/react-native-responsive-fontsize
Instalação: yarn add react-native-responsive-fontsize
Conceito: biblioteca que utiliza das proporções dos pixels gerados a partir do tamanho da fonte ou componente para renderizar em plataformas com proporções diferentes de forma responsiva (RFValue e RFPercentage)

Ícones
Definição: utilização de logos e ícones na aplicação
Instalação: @expo/vector-icons (já vem instalado pelo expo)
Documentação: https://icons.expo.fyi/
