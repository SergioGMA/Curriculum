# Currículo Web Responsivo e Futurista

Este projeto consiste em uma página web de currículo profissional com design futurista, responsiva e com recursos interativos.

## Características

- **Design Futurista**: Layout moderno com gradientes, animações e elementos hexagonais
- **Totalmente Responsivo**: Adaptável a qualquer dispositivo (desktop, tablet, smartphone)
- **Modo Claro/Escuro**: Alternância entre temas com salvamento em localStorage
- **Geração de PDF**: Função para exportar o currículo em formato PDF
- **Animações**: Transições e efeitos visuais para melhor experiência do usuário
- **Formulário de Contato**: Interface pronta para integração com sistema de email
- **Compatível com GitHub Pages**: Pronto para ser hospedado gratuitamente

## Tecnologias Utilizadas

- HTML5
- CSS3 (Variáveis CSS para temas)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome (ícones)
- jsPDF e html2canvas (geração de PDF)

## Como Usar

1. Clone este repositório ou faça o download dos arquivos
2. Personalize o conteúdo no arquivo `index.html` com suas informações
3. Modifique o arquivo `styles.css` se desejar alterar cores, fontes ou layout
4. Substitua as imagens de placeholder por suas próprias imagens
5. Teste localmente abrindo o arquivo `index.html` em um navegador
6. Publique em uma plataforma como GitHub Pages ou qualquer servidor web

## Personalização

### Alterando a Paleta de Cores

Para mudar a paleta de cores, edite as variáveis CSS no topo do arquivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Cor principal */
    --secondary-color: #0ea5e9;  /* Cor secundária */
    --accent-color: #10b981;     /* Cor de destaque */
    /* Outras variáveis de cores... */
}
```

### Substituindo a Foto

Substitua o link da imagem no HTML:

```html
<img src="caminho/para/sua-foto.jpg" alt="Foto de Perfil" class="img-fluid rounded-circle">
```

### Adicionando Projetos ao Portfólio

Duplique os blocos de projeto na seção de portfólio e modifique conforme necessário:

```html
<div class="portfolio-item">
    <div class="portfolio-img">
        <img src="caminho/para/imagem-projeto.jpg" alt="Nome do Projeto" class="img-fluid">
        <div class="portfolio-overlay">
            <div class="portfolio-info">
                <a href="link-do-projeto" class="btn btn-sm btn-light"><i class="fas fa-link"></i></a>
                <a href="link-do-repositorio" class="btn btn-sm btn-light"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="portfolio-content">
        <h4>Nome do Projeto</h4>
        <p>Descrição curta do projeto</p>
    </div>
</div>
```

## Funcionalidade de PDF

O botão "Baixar PDF" utiliza as bibliotecas jsPDF e html2canvas para gerar um PDF do conteúdo do currículo. O PDF é formatado para impressão em tamanho A4 e exclui elementos interativos como botões e formulários.

## Compatibilidade com Navegadores

- Google Chrome (recomendado)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

## Licença

Este projeto está disponível sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme suas necessidades.

## Créditos

- Imagens placeholder: [via.placeholder.com](https://via.placeholder.com)
- Ícones: [Font Awesome](https://fontawesome.com)
- Framework CSS: [Bootstrap](https://getbootstrap.com)
- Geração de PDF: [jsPDF](https://github.com/parallax/jsPDF) e [html2canvas](https://github.com/niklasvh/html2canvas) 