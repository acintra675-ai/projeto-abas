
const listaLivros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", ano: 1954 },
    { titulo: "1984", autor: "George Orwell", genero: "Ficção Distópica", ano: 1949 },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", genero: "Realismo Mágico", ano: 1967 },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", ano: 1813 },
    { titulo: "A Metamorfose", autor: "Franz Kafka", genero: "Ficção Absurda", ano: 1915 },
    { titulo: "A Arte da Guerra", autor: "Sun Tzu", genero: "Estratégia", ano: -500 }, // Ano aproximado
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Sátira", ano: 1605 },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", genero: "Fábula", ano: 1943 },
    { titulo: "O Conde de Monte Cristo", autor: "Alexandre Dumas", genero: "Aventura Clássica", ano: 1844 },
    { titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", genero: "Ficção Científica", ano: 1979 },
    { titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", ano: 1965 },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia Juvenil", ano: 1997 },
    { titulo: "O Leão, a Feiticeira e o Guarda-Roupa", autor: "C.S. Lewis", genero: "Fantasia", ano: 1950 },
    { titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", genero: "Ficção Distópica", ano: 1932 },
    { titulo: "O Sol é Para Todos", autor: "Harper Lee", genero: "Ficção Jurídica", ano: 1960 },
    { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", genero: "Romance Psicológico", ano: 1866 },
    { titulo: "Frankenstein", autor: "Mary Shelley", genero: "Ficção Gótica", ano: 1818 },
    { titulo: "Drácula", autor: "Bram Stoker", genero: "Horror Gótico", ano: 1897 },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Sátira Política", ano: 1945 },
    { titulo: "As Crônicas de Nárnia: Príncipe Caspian", autor: "C.S. Lewis", genero: "Fantasia", ano: 1951 },
    { titulo: "O Iluminado", autor: "Stephen King", genero: "Terror", ano: 1977 },
    { titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", genero: "Ficção Filosófica", ano: 1995 },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", genero: "Romance Social", ano: 1937 },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", genero: "Romance Gótico", ano: 1847 },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "Ficção Distópica", ano: 1953 },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", ano: 1937 },
    { titulo: "O Retrato de Dorian Gray", autor: "Oscar Wilde", genero: "Ficção Gótica", ano: 1890 },
];

let dadosAtuais = [...listaLivros]; 

const corpoTabela = document.getElementById('corpoTabela');
const cabecalhos = document.querySelectorAll('#tabelaLivros thead th');
const inputFiltro = document.getElementById('filtroBusca');


let colunaOrdenacao = null;
let direcaoOrdenacao = 'asc'; 

/**
 
 * @param {Array} dados 
 */
function renderizarTabela(dados) {
    corpoTabela.innerHTML = ''; 

    if (dados.length === 0) {
        corpoTabela.innerHTML = '<tr><td colspan="4" style="text-align: center;">Nenhum livro encontrado.</td></tr>';
        return;
    }

    dados.forEach(livro => {
        const tr = document.createElement('tr');
        
        
        tr.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.genero}</td>
            <td>${livro.ano}</td>
        `;
        corpoTabela.appendChild(tr);
    });
}

/**
 
 * @param {string} coluna - 
 * @param {string} direcao - 
 */
function ordenarDados(coluna, direcao) {
    dadosAtuais.sort((a, b) => {
        const valA = a[coluna];
        const valB = b[coluna];

        
        let comparacao = 0;
        if (typeof valA === 'string') {
            comparacao = valA.localeCompare(valB); 
        } else {
            
            comparacao = valA - valB;
        }

        return direcao === 'asc' ? comparacao : -comparacao; 
    });

    renderizarTabela(dadosAtuais);
}

/**
 
 * @param {Event} e - 
 */
function handleOrdenacao(e) {
    const th = e.currentTarget;
    const coluna = th.getAttribute('data-coluna');

    
    if (colunaOrdenacao === coluna) {
        
        direcaoOrdenacao = direcaoOrdenacao === 'asc' ? 'desc' : 'asc';
    } else {
       
        colunaOrdenacao = coluna;
        direcaoOrdenacao = 'asc';
    }

    
    cabecalhos.forEach(header => {
        header.classList.remove('asc', 'desc');
    });
    th.classList.add(direcaoOrdenacao);

    
    ordenarDados(colunaOrdenacao, direcaoOrdenacao);
}

 
 
function filtrarDados() {
    const termo = inputFiltro.value.toLowerCase().trim();

    
    if (!termo) {
        dadosAtuais = [...listaLivros]; 
        
        if (colunaOrdenacao) {
            ordenarDados(colunaOrdenacao, direcaoOrdenacao);
        } else {
             renderizarTabela(dadosAtuais);
        }
        return;
    }

    
    const dadosFiltrados = listaLivros.filter(livro => {
        
        return (
            livro.titulo.toLowerCase().includes(termo) ||
            livro.autor.toLowerCase().includes(termo) ||
            livro.genero.toLowerCase().includes(termo) ||
            String(livro.ano).includes(termo) 
        );
    });

    
    dadosAtuais = dadosFiltrados;
    if (colunaOrdenacao) {
        ordenarDados(colunaOrdenacao, direcaoOrdenacao);
    } else {
        renderizarTabela(dadosAtuais);
    }
}





cabecalhos.forEach(th => {
    th.addEventListener('click', handleOrdenacao);
});


inputFiltro.addEventListener('input', filtrarDados);


document.addEventListener('DOMContentLoaded', () => {
    colunaOrdenacao = 'titulo';
    direcaoOrdenacao = 'asc';
    document.querySelector(`[data-coluna="${colunaOrdenacao}"]`).classList.add('asc');
    ordenarDados(colunaOrdenacao, direcaoOrdenacao);
});