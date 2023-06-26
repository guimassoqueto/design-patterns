HUSKY=npx husky install

# instala dependencias
i:
	${HUSKY} && npm install

# abre o navegador na página principal do repositório no GitHub 
or:
	open https://github.com/guimassoqueto/design-patterns