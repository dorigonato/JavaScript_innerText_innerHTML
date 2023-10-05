const titulo = document.getElementById('titulo');
const ulElement = document.getElementById('lista-nao-ordenada');
const link = document.getElementById('link');
const olElement = document.getElementById('lista-ordenada');

titulo.innerText = 'PROZ EDUCAÇÃO';
link.innerText = 'Visite o site da Proz Educação';

ulElement.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

olElement.innerHTML = `
    <li><a href="https://prozeducacao.com.br">Site 1</a></li>
    <li><a href="https://prozeducacao.com.br">Site 2</a></li>
    <li><a href="https://prozeducacao.com.br">Site 3</a></li>

`;
