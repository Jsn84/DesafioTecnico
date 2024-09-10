Documentação de Usuário: Configuração e Execução do Projeto Cypress - Desafio

Objetivo

Esta documentação orienta como baixar o código do GitHub, instalar as dependências necessárias e executar os testes Cypress para garantir que tudo funcione corretamente.

Passo 1: Requisitos
Antes de começar, você precisa garantir que tem os seguintes itens instalados:
    1. Node.js: O Cypress requer Node.js para funcionar. Você pode baixar e instalar a versão mais recente do Node.js aqui.
    2. Git: Para clonar o repositório do GitHub, você precisará do Git. Instale-o a partir de aqui.
    
Passo 2: Clonar o Repositório

    1. Abra o terminal ou prompt de comando.
    2. Clone o repositório do GitHub usando o comando abaixo. 
       git clone  https://github.com/Jsn84/DesafioTecnico.git
    3. Acesse o diretório do projeto:
       cd Desafio
       
Passo 3: Instalar Dependências

    1. Instale as dependências do projeto usando o comando npm. Certifique-se de estar no diretório raiz do projeto.
       npm install
       Isso instalará todas as dependências listadas no arquivo package.json, incluindo o Cypress.
       
Passo 4: Configuração do Cypress

    1. Verifique se o Cypress está corretamente instalado. O Cypress deve estar listado nas dependências do projeto e deve ser instalado automaticamente com o comando 
       npm install
    2. Abra o Cypress para a primeira configuração. Execute o seguinte comando para abrir a interface gráfica do Cypress e realizar a configuração inicial:
       npx cypress open
       Esse comando abrirá a interface do Cypress e criará a estrutura de diretórios padrão, se ainda não estiver configurada.
       
Passo 5: Executar os Testes

    1. Execute os testes em modo interativo. Use o comando abaixo para rodar os testes no Cypress em modo interativo, onde você pode ver a execução dos testes em tempo real:
       npx cypress open
    2. Execute os testes em modo headless. Para rodar os testes em modo headless (sem interface gráfica), utilize o seguinte comando:
       npx cypress run
       Isso executará todos os testes e exibirá os resultados no terminal.
       
Passo 6: Verificar Resultados

    • Para testes interativos: Você poderá ver os resultados diretamente na interface gráfica do Cypress.
    • Para testes headless: Os resultados serão exibidos no terminal após a execução dos testes.
    
Passo 7: Manutenção e Atualização

    1. Para atualizar as dependências do projeto, você pode usar:
       npm update
    2. Para garantir que o código está sempre atualizado, faça o pull das últimas alterações do repositório remoto com:
       git pull origin main
       Substitua main pelo nome do branch principal se for diferente.
       
Conclusão:
Seguindo estes passos, você deve ser capaz de configurar e executar os testes Cypress com sucesso. Se tiver alguma dúvida ou encontrar problemas, consulte a documentação adicional ou entre em contato com o suporte do projeto.
