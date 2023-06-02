HUSKY=npx husky install
BROWSER=firefox
# instala dependencias
i:
	${HUSKY} && npm install

# abre o navegador na página principal do repositório no GitHub 
or:
	${BROWSER} -url "https://github.com/guimassoqueto/design-patterns"