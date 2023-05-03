HUSKY=npx husky install
BROWSER=firefox
# instala dependencias
install:
	${HUSKY} && npm install

# abre o navegador na página principal do repositório no GitHub 
open-repo:
	${BROWSER} -url "https://github.com/guimassoqueto/design-patterns"