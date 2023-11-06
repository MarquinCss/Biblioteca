
document.addEventListener('DOMContentLoaded', function () {
    const livros = document.querySelectorAll('.cartao');

    livros.forEach(livro => {
        livro.addEventListener('click', () => {
            const livroId = livro.getAttribute('id');
            const informacoes = informacoesLivros[livroId];

            if (informacoes) {
                document.querySelector('.titulo-livro').textContent = informacoes.titulo;
                document.querySelector('.descricao-livro').textContent = informacoes.descricao;
                document.querySelector('.autor-livro').textContent = informacoes.autor;

                const dialogo = document.getElementById('dialogo');
                dialogo.style.display = 'block';

                document.getElementById('fechar-dialogo').addEventListener('click', () => {
                    dialogo.style.display = 'none';
                });

                // Redirecionamento para diferentes sites
                let linkSite = '';
                //livro 1
                if (livroId === 'livro1') {
                    linkSite = 'https://play.google.com/books/reader?id=TwE_EAAAQBAJ&pg=GBS.PP1&hl=pt_PT';
                }
                //livro 2
                else if (livroId === 'livro2') {
                    linkSite = 'https://site-do-livro-dois.com';
                }
                //livro 3
                else if (livroId === 'livro3') {
                    linkSite = 'https://instagram.com';
                }

                // Configuração do botão de leitura
                const lerLivroBtn = document.getElementById('ler-livro');
                lerLivroBtn.href = linkSite;
            }
        });
    });
});

const informacoesLivros = {
    livro1: {
        titulo: "Um livro, muitas histórias!",
        descricao: "Toda nova história começa com um primeiro passo. Idealizado pelos profissionais que integram ou já integraram o Centro de Educação Profissional da Fundação O Pão dos Pobres, o projeto 'Um livro, muitas histórias!' foi realizado em parceria com o Criança Esperança e a Unesco. Nas oficinas de escrita criativa e de gêneros literários, conduzidas por voluntários, adolescentes e jovens partilharam suas expectativas e percepções de mundo. O projeto ainda proporcionou a reforma do espaço Multimeios para que se possa continuar fomentando a prática da leitura e da escrita entre os jovens atendidos pela instituição. A publicação 'Um livro, muitas histórias!' reúne 42 textos de alunos que participaram das atividades oferecidas pela Fundação O Pão dos Pobres e encontraram nelas o início de uma caminhada de aprendizado, transformação e apoio para concretizar os seus objetivos. Para além dos textos que compõem este livro, distribuído gratuitamente, a expectativa é que o resultado do trabalho conduzido pela instituição tenha impactos de longo prazo na relação com a literatura.",
        autor: "Autores: Mariana Rosa, Simone Ledesma Quadros, e outros."
    },
    livro2: {
        titulo: "Livro 2",
        descricao: "O grande clássico de todos os tempos! As sábias, encantadoras e inesquecíveis histórias contadas pelo pequeno príncipe falam de seu próprio planeta, com seus três vulcões e uma flor presunçosa. Uma história maravilhosa e profunda, para todas as idades, e ilustrada pelo próprio autor.  Edição brochura, no formato tradicional da obra. Nova tradução, pela professora de Literatura Francesa Isolina Bresolin Vianna. Ilustrado com as aquarelas do próprio Saint-Exupéry.  O pequeno príncipe é um dos maiores clássicos da literatura francesa. Sempre presente nas listas de best-sellers, já foi publicado em mais de 250 idiomas, e tornou-se o livro mais lido e mais traduzido na literatura internacional. Esta edição, que conta ainda com uma inovação editorial:é a única a trazer as ilustrações posicionadas fielmente à sequência da própria narrativa.",
        autor: "Autor"
    },
    livro3: {
        titulo: "Livro 3",
        descricao: "Descrição do Livro 3",
        autor: "Autor do Livro 3"
    },

    livro4: {
        titulo: "Livro 3",
        descricao: "Descrição do Livro 3",
        autor: "Autor do Livro 3"
    },

    livro5: {
        titulo: "Livro 3",
        descricao: "Descrição do Livro 3",
        autor: "Autor do Livro 3"
    },
    // E assim por diante para cada livro
};


//Buscar
// Função para buscar o livro
function buscarLivro() {
    var termoDeBusca = document.getElementById("searchInput").value.toLowerCase();
    var titulosLivros = document.querySelectorAll(".cartao__titulo");

    let algumLivroEncontrado = false;

    for (var i = 0; i < titulosLivros.length; i++) {
        var titulo = titulosLivros[i].innerText.toLowerCase();
        var cartao = titulosLivros[i].parentNode.parentNode;

        if (titulo.includes(termoDeBusca)) {
            cartao.style.display = "block";
            algumLivroEncontrado = true;
        } else {
            cartao.style.display = "none";
        }
    }

    // Exibe um alerta se nenhum resultado for encontrado
    if (!algumLivroEncontrado) {
        alert("Nenhum livro encontrado para a busca realizada.");
        // Recarrega a página após 3 segundos
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
}