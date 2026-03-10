const notasFiscais = [
    { id: 377, cliente: "SILVESTRIN ESCOLA DE FORMACAO ESPORTIVA LTDA", dataEmi: "07/08/2025", status: "AUTORIZADA", total: "200,00" },
    { id: 376, cliente: "ALUMIDEX ESQUADRIAS DE ALUMINIO E VIDROS LTDA", dataEmi: "07/08/2025", status: "AUTORIZADA", total: "99,00" },
    { id: 375, cliente: "CONTILIDER ASSESSORIA CONTABIL LTDA", dataEmi: "07/08/2025", status: "AUTORIZADA", total: "149,00" },
    { id: 374, cliente: "PIX FORCE S.A", dataEmi: "06/08/2025", status: "PENDENTE", total: "650,00" },
    { id: 373, cliente: "ZYON TECNOLOGIA LTDA", dataEmi: "05/08/2025", status: "CANCELADA", total: "69,00" }
];

const clientes = [
    { id: 1, nome: "SILVESTRIN ESCOLA DE FORMACAO ESPORTIVA LTDA", cnpj: "12.345.678/0001-90", telefone: "(11) 3456-7890", cidade: "São Paulo", uf: "SP" },
    { id: 2, nome: "ALUMIDEX ESQUADRIAS DE ALUMINIO E VIDROS LTDA", cnpj: "98.765.432/0001-10", telefone: "(11) 2345-6789", cidade: "São Paulo", uf: "SP" },
    { id: 3, nome: "CONTILIDER ASSESSORIA CONTABIL LTDA", cnpj: "45.123.789/0001-20", telefone: "(21) 9876-5432", cidade: "Rio de Janeiro", uf: "RJ" },
    { id: 4, nome: "PIX FORCE S.A", cnpj: "76.543.210/0001-30", telefone: "(31) 8765-4321", cidade: "Belo Horizonte", uf: "MG" },
    { id: 5, nome: "ZYON TECNOLOGIA LTDA", cnpj: "54.321.098/0001-40", telefone: "(41) 7654-3210", cidade: "Curitiba", uf: "PR" },
    { id: 6, nome: "JOÃO SILVA", cpf: "123.456.789-01", telefone: "(11) 99999-9999", cidade: "São Paulo", uf: "SP" }
];

const fornecedores = [
    { id: 1, nome: "TECH BRASIL DISTRIBUIDORA LTDA", cnpj: "11.222.333/0001-44", telefone: "(11) 3333-4444", cidade: "São Paulo", uf: "SP" },
    { id: 2, nome: "MATERIAL CONSTRUÇÃO EXEMPLO", cnpj: "55.666.777/0001-88", telefone: "(21) 4444-5555", cidade: "Rio de Janeiro", uf: "RJ" },
    { id: 3, nome: "ELETRO PEÇAS INDUSTRIAIS", cnpj: "99.888.777/0001-00", telefone: "(31) 5555-6666", cidade: "Belo Horizonte", uf: "MG" }
];

const produtos = [
    { id: 1, nome: "Notebook Dell Inspiron 15", categoria: "Eletrônicos", estoque: 15, estoqueMin: 5, preco: "3.500,00" },
    { id: 2, nome: "Monitor Samsung 24\"", categoria: "Eletrônicos", estoque: 2, estoqueMin: 10, preco: "899,00" },
    { id: 3, nome: "Teclado Mecânico RGB", categoria: "Acessórios", estoque: 45, estoqueMin: 15, preco: "350,00" },
    { id: 4, nome: "Mouse Logitech G502", categoria: "Acessórios", estoque: 3, estoqueMin: 20, preco: "229,00" },
    { id: 5, nome: "SSD 500GB Kingston", categoria: "Armazenamento", estoque: 28, estoqueMin: 10, preco: "279,00" },
    { id: 6, nome: "Memória RAM 8GB DDR4", categoria: "Componentes", estoque: 67, estoqueMin: 30, preco: "189,00" },
    { id: 7, nome: "Cabo HDMI 2m", categoria: "Acessórios", estoque: 120, estoqueMin: 50, preco: "35,00" },
    { id: 8, nome: "Webcam Logitech C920", categoria: "Eletrônicos", estoque: 1, estoqueMin: 5, preco: "599,00" }
];

const servicos = [
    { id: 1, nome: "Consultoria em TI", valor: "200,00" },
    { id: 2, nome: "Desenvolvimento de Software", valor: "350,00" },
    { id: 3, nome: "Manutenção de Computadores", valor: "150,00" },
    { id: 4, nome: "Configuração de Redes", valor: "250,00" },
    { id: 5, nome: "Suporte Técnico (Hora)", valor: "100,00" }
];

const transacoes = [
    { id: 1, descricao: "NFSe #377 - SILVESTRIN ESCOLA", categoria: "Serviços", data: "07/08/2025", tipo: "receita", valor: "200,00" },
    { id: 2, descricao: "NFSe #376 - ALUMIDEX", categoria: "Serviços", data: "07/08/2025", tipo: "receita", valor: "99,00" },
    { id: 3, descricao: "NFSe #375 - CONTILIDER", categoria: "Serviços", data: "07/08/2025", tipo: "receita", valor: "149,00" },
    { id: 4, descricao: "Pagamento Aluguel Escritório", categoria: "Aluguel", data: "06/08/2025", tipo: "despesa", valor: "2.500,00" },
    { id: 5, descricao: "Compra Material Escritório", categoria: "Escritório", data: "05/08/2025", tipo: "despesa", valor: "450,00" },
    { id: 6, descricao: "Pagamento Internet", categoria: "Telefonia/Internet", data: "05/08/2025", tipo: "despesa", valor: "199,00" },
    { id: 7, descricao: "NFSe #374 - PIX FORCE", categoria: "Serviços", data: "06/08/2025", tipo: "receita", valor: "650,00" },
    { id: 8, descricao: "Pagamento Luz", categoria: "Energia", data: "04/08/2025", tipo: "despesa", valor: "680,00" },
    { id: 9, descricao: "Compra Produtos Estoque", categoria: "Estoque", data: "03/08/2025", tipo: "despesa", valor: "4.591,00" },
    { id: 10, descricao: "Pagamento Contador", categoria: "Serviços", data: "02/08/2025", tipo: "despesa", valor: "800,00" }
];

const btnMenuMobile = document.getElementById('btnMenuMobile');
const menuMobile = document.getElementById('menuMobile');

btnMenuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden');
});

let currentSection = 'dashboard';

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById('section' + section.charAt(0).toUpperCase() + section.slice(1)).classList.remove('hidden');
    
    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('text-brand-blue', 'border-b-2', 'border-brand-blue');
        a.classList.add('hover:text-gray-900');
    });

    const sectionMap = {
        'dashboard': 0,
        'nfse': 1,
        'financeiro': 2,
        'cadastros': 3,
        'estoque': 4
    };

    const navLinks = document.querySelectorAll('nav a');
    if (navLinks[sectionMap[section]]) {
        navLinks[sectionMap[section]].classList.add('text-brand-blue', 'border-b-2', 'border-brand-blue');
        navLinks[sectionMap[section]].classList.remove('hover:text-gray-900');
    }

    currentSection = section;
    if (section === 'dashboard') renderDashboard();
}

document.querySelectorAll('nav a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sections = ['dashboard', 'nfse', 'financeiro', 'cadastros', 'estoque'];
        showSection(sections[index]);
    });
});

        document.querySelectorAll('#menuMobile a').forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sections = ['dashboard', 'nfse', 'financeiro', 'cadastros', 'estoque'];
                if (sections[index]) {
                    showSection(sections[index]);
                    menuMobile.classList.add('hidden');
                }
            });
        });

const tbody = document.querySelector('#tabelaNotas tbody');

function renderTable(data) {
    tbody.innerHTML = '';
    data.forEach(nota => {
        let statusClass = 'bg-[#e0f7fa] text-[#00acc1]';
        if(nota.status === 'CANCELADA') statusClass = 'bg-red-100 text-red-600';
        if(nota.status === 'PENDENTE') statusClass = 'bg-yellow-100 text-yellow-700';

        const tr = document.createElement('tr');
        tr.className = 'block md:table-row bg-white border border-gray-200 md:border-0 md:border-b md:border-gray-100 rounded-lg md:rounded-none mb-4 md:mb-0 p-3 md:p-0 shadow-sm md:shadow-none hover:bg-gray-50 transition nota-row';
        
        tr.innerHTML = `
            <td class="flex md:table-cell justify-between items-center py-2 md:py-3 md:px-4 border-b border-gray-100 md:border-0">
                <span class="md:hidden font-semibold text-gray-500 text-xs uppercase">Selecionar</span>
                <input type="checkbox" class="rowCheckbox w-4 h-4 rounded border-gray-300 cursor-pointer">
            </td>
            <td class="flex md:table-cell justify-between items-center py-2 md:py-3 md:px-4 border-b border-gray-100 md:border-0">
                <span class="md:hidden font-semibold text-gray-500 text-xs uppercase">Número</span>
                <span class="font-bold text-gray-900 md:font-medium">#${nota.id}</span>
            </td>
            <td class="flex flex-col md:table-cell py-2 md:py-3 md:px-4 border-b border-gray-100 md:border-0 cliente-nome">
                <span class="md:hidden font-semibold text-gray-500 text-xs uppercase mb-1">Cliente</span>
                <span class="text-sm text-gray-800">${nota.cliente}</span>
            </td>
            <td class="flex md:table-cell justify-between items-center py-2 md:py-3 md:px-4 border-b border-gray-100 md:border-0">
                <span class="md:hidden font-semibold text-gray-500 text-xs uppercase">Emissão</span>
                <span class="text-gray-500">${nota.dataEmi}</span>
            </td>
            <td class="flex md:table-cell justify-between items-center py-2 md:py-3 md:px-4 border-b border-gray-100 md:border-0 md:text-center">
                <span class="md:hidden font-semibold text-gray-500 text-xs uppercase">Status</span>
                <span class="${statusClass} text-[10px] md:text-[11px] font-bold px-2 py-1 rounded tracking-wide">${nota.status}</span>
            </td>
            <td class="flex md:table-cell justify-between items-center py-2 md:py-3 md:px-4 border-b border-gray-100 md:border-0 md:text-right">
                <span class="md:hidden font-semibold text-gray-500 text-xs uppercase">Total</span>
                <span class="font-semibold text-gray-900">R$ ${nota.total}</span>
            </td>
            <td class="py-3 md:px-4 flex flex-wrap justify-center md:justify-center gap-2 mt-2 md:mt-0">
                <button onclick="acionarBotao('PDF', ${nota.id})" class="bg-red-500 text-white w-8 h-8 md:w-7 md:h-7 rounded hover:bg-red-600 transition" title="PDF"><i class="fa-solid fa-file-pdf"></i></button>
                <button onclick="acionarBotao('Enviar E-mail', ${nota.id})" class="bg-[#26a69a] text-white w-8 h-8 md:w-7 md:h-7 rounded hover:bg-teal-600 transition" title="Enviar"><i class="fa-solid fa-paper-plane"></i></button>
                <button onclick="acionarBotao('WhatsApp', ${nota.id})" class="bg-[#4caf50] text-white w-8 h-8 md:w-7 md:h-7 rounded hover:bg-green-600 transition" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></button>
                <button onclick="acionarBotao('XML', ${nota.id})" class="bg-[#26c6da] text-white w-8 h-8 md:w-7 md:h-7 rounded hover:bg-cyan-500 transition" title="XML"><i class="fa-solid fa-file-code"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

renderTable(notasFiscais);

const selectAllCheckbox = document.getElementById('selectAll');
selectAllCheckbox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    document.querySelectorAll('.rowCheckbox').forEach(checkbox => {
        const row = checkbox.closest('.nota-row');
        if (row.style.display !== 'none') checkbox.checked = isChecked;
    });
});

const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    let hasVisible = false;
    document.querySelectorAll('.nota-row').forEach(row => {
        if (row.textContent.toLowerCase().includes(term)) {
            row.style.display = ''; hasVisible = true;
        } else {
            row.style.display = 'none'; row.querySelector('.rowCheckbox').checked = false;
        }
    });
    selectAllCheckbox.checked = false;
    noResults.style.display = hasVisible ? 'none' : 'block';
});

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    let colors = type === 'success' ? 'bg-green-500' : 'bg-blue-500';
    let icon = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    toast.className = `${colors} text-white px-4 py-3 rounded shadow-lg flex items-center space-x-3 toast-enter max-w-sm mb-2`;
    toast.innerHTML = `<i class="fa-solid ${icon} text-lg"></i><span class="text-sm font-medium">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.replace('toast-enter', 'toast-leave');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function acionarBotao(acao, idNota) {
    showToast(`Ação '${acao}' gerada para NF #${idNota}`, 'success');
}

document.getElementById('btnNovaNF').addEventListener('click', () => {
    const selectCliente = document.getElementById('selectClienteNF');
    selectCliente.innerHTML = '<option value="">Selecione um cliente...</option>' + 
        clientes.map(c => `<option value="${c.id}">${c.nome}</option>`).join('');
    
    const selectServico = document.getElementById('selectServicoNF');
    selectServico.innerHTML = '<option value="">Selecione um serviço...</option>' + 
        servicos.map(s => `<option value="${s.id}" data-valor="${s.valor}">${s.nome} - R$ ${s.valor}</option>`).join('');
    
    document.getElementById('modalNovaNF').classList.remove('hidden');
});

document.getElementById('btnNovoCliente').addEventListener('click', () => {
    document.getElementById('modalNovoCliente').classList.remove('hidden');
});

document.getElementById('btnNovoFornecedor').addEventListener('click', () => {
    document.getElementById('modalNovoFornecedor').classList.remove('hidden');
});

function fecharModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function fecharModalNovaNF() {
    document.getElementById('modalNovaNF').classList.add('hidden');
}

function salvarCliente() {
    const nome = document.getElementById('nomeCliente').value;
    if (!nome) {
        showToast('Informe o nome do cliente', 'info');
        return;
    }
    showToast('Cliente salvo com sucesso!', 'success');
    fecharModal('modalNovoCliente');
    limparFormCliente();
}

function limparFormCliente() {
    document.getElementById('nomeCliente').value = '';
    document.getElementById('cpfCnpjCliente').value = '';
    document.getElementById('telefoneCliente').value = '';
    document.getElementById('cidadeCliente').value = '';
    document.getElementById('ufCliente').value = '';
    document.getElementById('emailCliente').value = '';
}

function salvarFornecedor() {
    const nome = document.getElementById('nomeFornecedor').value;
    if (!nome) {
        showToast('Informe a razão social', 'info');
        return;
    }
    showToast('Fornecedor salvo com sucesso!', 'success');
    fecharModal('modalNovoFornecedor');
    limparFormFornecedor();
}

function limparFormFornecedor() {
    document.getElementById('nomeFornecedor').value = '';
    document.getElementById('cnpjFornecedor').value = '';
    document.getElementById('telefoneFornecedor').value = '';
    document.getElementById('cidadeFornecedor').value = '';
    document.getElementById('ufFornecedor').value = '';
    document.getElementById('emailFornecedor').value = '';
}

function salvarProduto() {
    const nome = document.getElementById('nomeProduto').value;
    if (!nome) {
        showToast('Informe o nome do produto', 'info');
        return;
    }
    showToast('Produto salvo com sucesso!', 'success');
    fecharModal('modalNovoProduto');
    limparFormProduto();
}

function limparFormProduto() {
    document.getElementById('nomeProduto').value = '';
    document.getElementById('categoriaProduto').value = '';
    document.getElementById('estoqueProduto').value = '';
    document.getElementById('estoqueMinProduto').value = '';
    document.getElementById('precoProduto').value = '';
    document.getElementById('descProduto').value = '';
}

function renderDashboard() {
    const containerNotas = document.getElementById('dashboardNotas');
    containerNotas.innerHTML = notasFiscais.slice(0, 5).map(nota => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-file-invoice text-cyan-600"></i>
                </div>
                <div>
                    <p class="font-medium text-gray-800 text-sm">${nota.cliente.substring(0, 30)}...</p>
                    <p class="text-xs text-gray-500">#${nota.id} • ${nota.dataEmi}</p>
                </div>
            </div>
            <span class="font-bold text-gray-900">R$ ${nota.total}</span>
        </div>
    `).join('');

    const containerEstoque = document.getElementById('dashboardEstoqueBaixo');
    const produtosBaixos = produtos.filter(p => p.estoque <= p.estoqueMin);
    containerEstoque.innerHTML = produtosBaixos.map(produto => `
        <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
            <div>
                <p class="font-medium text-gray-800 text-sm">${produto.nome}</p>
                <p class="text-xs text-gray-500">${produto.categoria}</p>
            </div>
            <div class="text-right">
                <p class="font-bold text-red-600">${produto.estoque} un</p>
                <p class="text-xs text-gray-500">Min: ${produto.estoqueMin}</p>
            </div>
        </div>
    `).join('');
}

function renderFinanceiro(filtro = 'todos') {
    const tbody = document.getElementById('tbodyFinanceiro');
    let dadosFiltrados = filtro === 'todos' ? transacoes : transacoes.filter(t => t.tipo === filtro);
    
    tbody.innerHTML = dadosFiltrados.map(t => `
        <tr class="border-b border-gray-100 md:border-0 hover:bg-gray-50 transition">
            <td class="py-3 px-4 font-medium text-gray-900">${t.descricao}</td>
            <td class="py-3 px-4">${t.categoria}</td>
            <td class="py-3 px-4 text-gray-500">${t.data}</td>
            <td class="py-3 px-4 text-center">
                <span class="text-[10px] font-bold px-2 py-1 rounded ${t.tipo === 'receita' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                    ${t.tipo.toUpperCase()}
                </span>
            </td>
            <td class="py-3 px-4 text-right font-semibold ${t.tipo === 'receita' ? 'text-green-600' : 'text-red-600'}">
                ${t.tipo === 'receita' ? '+' : '-'} R$ ${t.valor}
            </td>
        </tr>
    `).join('');
}

document.getElementById('filtroFinanceiro').addEventListener('change', (e) => {
    renderFinanceiro(e.target.value);
});

function renderEstoque() {
    const tbody = document.getElementById('tbodyEstoque');
    tbody.innerHTML = produtos.map(p => {
        const statusClass = p.estoque <= p.estoqueMin ? 'bg-red-100 text-red-600' : p.estoque <= p.estoqueMin * 2 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700';
        const statusText = p.estoque <= p.estoqueMin ? 'Baixo' : p.estoque <= p.estoqueMin * 2 ? 'Atenção' : 'Normal';
        
        return `
            <tr class="border-b border-gray-100 md:border-0 hover:bg-gray-50 transition">
                <td class="py-3 px-4 font-medium text-gray-900">${p.nome}</td>
                <td class="py-3 px-4">${p.categoria}</td>
                <td class="py-3 px-4 text-center font-bold">${p.estoque}</td>
                <td class="py-3 px-4 text-center">
                    <span class="text-[10px] font-bold px-2 py-1 rounded ${statusClass}">${statusText}</span>
                </td>
                <td class="py-3 px-4 text-right font-semibold text-gray-900">R$ ${p.preco}</td>
                <td class="py-3 px-4 text-center">
                    <button class="text-brand-blue hover:text-cyan-600 mx-1"><i class="fa-solid fa-edit"></i></button>
                    <button class="text-red-500 hover:text-red-600 mx-1"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderCadastros(tab = 'clientes') {
    const tbody = document.getElementById('tbodyCadastros');
    const dados = tab === 'clientes' ? clientes : fornecedores;
    
    tbody.innerHTML = dados.map(c => `
        <tr class="border-b border-gray-100 md:border-0 hover:bg-gray-50 transition">
            <td class="py-3 px-4 font-medium text-gray-900">${c.nome}</td>
            <td class="py-3 px-4 text-gray-500">${c.cnpj || c.cpf}</td>
            <td class="py-3 px-4">${c.telefone}</td>
            <td class="py-3 px-4 text-gray-500">${c.cidade}/${c.uf}</td>
            <td class="py-3 px-4 text-center">
                <button class="text-brand-blue hover:text-cyan-600 mx-1"><i class="fa-solid fa-edit"></i></button>
                <button class="text-red-500 hover:text-red-600 mx-1"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

document.querySelectorAll('.tab-cadastro').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-cadastro').forEach(t => {
            t.classList.remove('bg-brand-blue', 'text-white');
            t.classList.add('bg-gray-100', 'text-gray-700');
        });
        e.target.classList.remove('bg-gray-100', 'text-gray-700');
        e.target.classList.add('bg-brand-blue', 'text-white');
        renderCadastros(e.target.dataset.tab);
    });
});

document.getElementById('selectServicoNF').addEventListener('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const valor = selectedOption.dataset.valor;
    if (valor) document.getElementById('valorUnitarioNF').value = 'R$ ' + valor;
});

document.getElementById('valorUnitarioNF').addEventListener('input', calcularTotalNF);
document.getElementById('quantidadeNF').addEventListener('input', calcularTotalNF);

function calcularTotalNF() {
    const valorText = document.getElementById('valorUnitarioNF').value.replace('R$', '').trim();
    const valor = parseFloat(valorText.replace(',', '.')) || 0;
    const quantidade = parseInt(document.getElementById('quantidadeNF').value) || 1;
    const total = valor * quantidade;
    document.getElementById('totalNF').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

function emitirNFSe() {
    const clienteId = document.getElementById('selectClienteNF').value;
    const servicoId = document.getElementById('selectServicoNF').value;
    
    if (!clienteId || !servicoId) {
        showToast('Selecione cliente e serviço', 'info');
        return;
    }
    
    showToast('NFSe emitida com sucesso!', 'success');
    fecharModalNovaNF();
}

renderDashboard();
renderFinanceiro();
renderEstoque();
renderCadastros('clientes');
showSection('dashboard');