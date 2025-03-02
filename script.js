// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar as variáveis
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const downloadBtn = document.getElementById('download-pdf');
    const progressBars = document.querySelectorAll('.progress-bar');

    // Garantir que o modo claro seja o padrão
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    
    // Limpar qualquer tema salvo anteriormente
    localStorage.removeItem('theme');

    // Animar as barras de progresso quando entrarem na viewport
    animateProgressBars();

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    downloadBtn.addEventListener('click', downloadPDF);

    // Observador de interseção para animações
    setupIntersectionObserver();

    /**
     * Alterna entre os modos claro e escuro
     */
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
            localStorage.setItem('theme', 'light');
        } else {
            enableDarkMode();
            localStorage.setItem('theme', 'dark');
        }
    }

    /**
     * Ativa o modo escuro
     */
    function enableDarkMode() {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
    }

    /**
     * Desativa o modo escuro
     */
    function disableDarkMode() {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }

    /**
     * Faz o download do arquivo PDF pré-gerado
     */
    function downloadPDF() {
        // Mostrar indicador de carregamento temporário (apenas para feedback visual)
        const loadingIndicator = createLoadingIndicator();
        document.body.appendChild(loadingIndicator);
        
        // Simular um pequeno atraso para mostrar o indicador de carregamento
        setTimeout(() => {
            try {
                // Criar um link para o arquivo PDF estático
                const link = document.createElement('a');
                link.href = 'document.pdf'; // Caminho para o arquivo PDF pré-gerado
                link.download = 'curriculo.pdf'; // Nome do arquivo ao ser baixado
                
                // Adicionar o link ao documento, clicar nele e removê-lo
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                console.log("Download do PDF iniciado com sucesso!");
            } catch (error) {
                console.error('Erro ao fazer download do PDF:', error);
                alert('Ocorreu um erro ao baixar o PDF. Por favor, tente novamente.');
            } finally {
                // Remover o indicador de carregamento após o download (ou após o erro)
                setTimeout(() => {
                    document.body.removeChild(loadingIndicator);
                }, 500);
            }
        }, 500);
    }

    /**
     * Cria um indicador de carregamento visual
     */
    function createLoadingIndicator() {
        const loadingDiv = document.createElement('div');
        loadingDiv.style.position = 'fixed';
        loadingDiv.style.top = '0';
        loadingDiv.style.left = '0';
        loadingDiv.style.width = '100%';
        loadingDiv.style.height = '100%';
        loadingDiv.style.display = 'flex';
        loadingDiv.style.alignItems = 'center';
        loadingDiv.style.justifyContent = 'center';
        loadingDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        loadingDiv.style.zIndex = '9999';
        
        const spinnerDiv = document.createElement('div');
        spinnerDiv.className = 'spinner-border text-light';
        spinnerDiv.setAttribute('role', 'status');
        
        const loadingText = document.createElement('span');
        loadingText.className = 'ms-3 text-light';
        loadingText.textContent = 'Baixando PDF, aguarde...';
        
        loadingDiv.appendChild(spinnerDiv);
        loadingDiv.appendChild(loadingText);
        
        return loadingDiv;
    }

    /**
     * Configura animação das barras de progresso
     */
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = value + '%';
            }, 500);
        });
    }

    /**
     * Configura o observador de interseção para animações
     */
    function setupIntersectionObserver() {
        // Verifica se o navegador suporta IntersectionObserver
        if ('IntersectionObserver' in window) {
            const options = {
                threshold: 0.1 // 10% de visibilidade
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                        
                        // Se for a seção de habilidades, animar as barras de progresso
                        if (entry.target.id === 'habilidades') {
                            animateProgressBars();
                        }
                    }
                });
            }, options);
            
            // Observar todas as seções
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        }
    }
}); 
