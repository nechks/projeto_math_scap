const express = require ('express');
const app = express();
const path = require('path');

//Rota informações 

app.get("/Infor", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_Telas/0-Tela Inicial/index.html');
})

app.get('/Inf_css', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','css', 'style.css');
    res.sendFile(filePath);
});

app.get('/Inf_Inc', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','favicons', 'favicon-32x32.png');
    res.sendFile(filePath);
});

//Imags Informações

app.get('/Inf_Ast', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','Imagens', 'astro_no_cell.png');
    res.sendFile(filePath);
});


app.get('/Inf_FU', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','Imagens', 'background_tela_inicial.png');
    res.sendFile(filePath);
});

app.get('/Inf_SeFU', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','Imagens', 'logo_semfundo.png');
    res.sendFile(filePath);
});

app.get('/Inf_Log', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','Imagens', 'logo.png');
    res.sendFile(filePath);
});
//Rota script Informações

app.get('/Inf_Scri', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '0-Tela Inicial','JS', 'script.js');
    res.sendFile(filePath);
});

//Rota Cadastro
app.get("/css_resert_cadastro", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/1-Cadastro/css/reset.css');
});

app.get("/css_estilo_cadastro", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/1-Cadastro/css/estilo.css');
});

app.get('/scripCads', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '1-Cadastro','JScadastro', 'script.js');
    res.sendFile(filePath);
});

app.get("/imag", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/1-Cadastro/Imagens/background.png')
})

app.get("/cadastro", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/1-Cadastro/index.html');
});

app.get('/Cad_ico', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '1-Cadastro','Imagens','favicons', 'favicon-32x32.png');
    res.sendFile(filePath);
});

//Rota Login 
app.get("/Login", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/2-início de sessão/index2.html')
});

app.get("/css_reset", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/2-Início de sessão/css/reset-2.css')
})

app.get("/css_estilo", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/2-Início de sessão/css/estilo-2.css')
})

app.get("/imag2", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/2-Início de sessão/css/Imagens/background.png')
})

app.get('/scriLog', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '2-início de sessão','JsLogin', 'script.js');
    res.sendFile(filePath);
});


//Rota de 3 opções 
app.get("/3opcao", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/3-Opções/index3.html')
});

app.get("/css_reset2", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/3-Opções/css/reset-3.css')
});

app.get("/css_estilo2", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/3-Opções/css/estilo-3.css')
});

app.get("/imag3", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/3-Opções/Imagens/background.png')
})

app.get('/3op_ico', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '3-Opções','Imagens','favicons', 'favicon-32x32.png');
    res.sendFile(filePath);
});

app.get('/scripOpc', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '3-Opções','JS', 'scriptOpc.js');
    res.sendFile(filePath);
});

// Rota criar 
app.get("/criar", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/4-Criador de fases/index4.html')
})

app.get("/header4", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/4-Criador de fases/css/header.css')
})

app.get("/main", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/4-Criador de fases/css/main.css')
})

app.get("/reset4cria", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/4-Criador de fases/css/reset.css')
})

app.get('/imagfret', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases', 'imagens', 'main', 'frente-part1.png');
    res.sendFile(filePath);
});

app.get('/4C_ico', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases','Imagens','favicons', 'favicon-32x32.png');
    res.sendFile(filePath);
});

app.get('/imagDiret', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases', 'imagens', 'main', 'direita-parte2.png');
    res.sendFile(filePath);
});

app.get('/imagEsq', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases', 'imagens', 'main', 'esquerda-parte4.png');
    res.sendFile(filePath);
});

app.get('/imagfund', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases', 'imagens', 'main', 'fundo-parte3.png');
    res.sendFile(filePath);
});

app.get('/imagtet', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases', 'imagens', 'main', 'teto-parte5.png');
    res.sendFile(filePath);
});

app.get('/icon', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases', 'imagens', 'header', 'icon-usuario.png');
    res.sendFile(filePath);
});

app.get('/scrip', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '4-Criador de fases','JS', 'script.js');
    res.sendFile(filePath);
});

//Fase pronto

app.get('/fase', function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/index.html')
})

app.get("/fase_css", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/css/estilo.css')
});

app.get("/fase_css_D", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/css/direita.css')
});

app.get("/fase_css_E", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/css/esquerda.css')
});

app.get("/fase_css_F", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/css/frente.css')
});

app.get("/fase_css_FU", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/css/fundo.css')
});

app.get("/fase_css_T", function(req, res){
    res.sendFile(__dirname + '/Math_Scape_telas/5-Jogo Math Scape/css/teto.css')
});

app.get('/Favi', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-jogo Math Scape', 'imagens','favicons', 'favicon-32x32.png');
    res.sendFile(filePath);
});

//Rota imag (Rota Direita)

app.get('/D_Conf', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','direita', 'configuracoes.png');
    res.sendFile(filePath);
});

app.get('/D_Int', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','direita', 'interrogação.png');
    res.sendFile(filePath);
});

app.get('/D_jan', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','direita', 'janela.png');
    res.sendFile(filePath);
});

app.get('/D_Quad', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','direita', 'quadro.png');
    res.sendFile(filePath);
});

app.get('/D_Roo', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','direita', 'room_2.png');
    res.sendFile(filePath);
});

//Rota Esquerda

app.get('/E_Conf', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','esquerda', 'configuracoes.png');
    res.sendFile(filePath);
});

app.get('/E_Int', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','esquerda', 'interrogação.png');
    res.sendFile(filePath);
});

app.get('/E_Rel_Ant', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','esquerda', 'relogio.png');
    res.sendFile(filePath);
});

app.get('/E_Roo', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','esquerda', 'room_2.png');
    res.sendFile(filePath);
});

app.get('/E_GizV', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','esquerda', 'giz-vermelho.png');
    res.sendFile(filePath);
});

//Rota frent

app.get('/F_Bot_Fu', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'Botao_futuro.png');
    res.sendFile(filePath);
});

app.get('/F_Conf', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'configuracoes.png');
    res.sendFile(filePath);
});

app.get('/F_Door', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'door.png');
    res.sendFile(filePath);
});

app.get('/F_Giz', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'giz de quadro.png');
    res.sendFile(filePath);
});

app.get('/F_Int', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'Interrogação.png');
    res.sendFile(filePath);
});

app.get('/F_Quad', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'Quadro_negro.png');
    res.sendFile(filePath);
});

app.get('/F_Rel', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'relogio.png');
    res.sendFile(filePath);
});

app.get('/F_Roo', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','frente', 'room.png');
    res.sendFile(filePath);
});

//Rota fundo 

app.get('/FU_Conf', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'configuracoes.png');
    res.sendFile(filePath);
});

app.get('/FU_Int', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'interrogação.png');
    res.sendFile(filePath);
});

app.get('/FU_Jan', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'janela.png');
    res.sendFile(filePath);
});


app.get('/FU_ArvSc', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'arvore.png');
    res.sendFile(filePath);
});

app.get('/FU_Roo', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'room.png');
    res.sendFile(filePath);
});

app.get('/FU_ArS', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'arvore-seca.png');
    res.sendFile(filePath);
});

app.get('/FU_Pen', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','fundo', 'pentagrama.png');
    res.sendFile(filePath);
});

//Rota teto

app.get('/T_Conf', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','teto', 'configuracoes.png');
    res.sendFile(filePath);
});

app.get('/T_God', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','teto', 'god-eye.jpg');
    res.sendFile(filePath);
});
app.get('/T_Int', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','teto', 'interrogação.png');
    res.sendFile(filePath);
});
app.get('/T_Lam', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','teto', 'lampada.png');
    res.sendFile(filePath);
});
app.get('/T_Rel', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','teto', 'relogio-teto.png');
    res.sendFile(filePath);
});
app.get('/T_tet', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','imagens','teto', 'teto.png');
    res.sendFile(filePath);
});

//JavaScrip

app.get('/Fase_scrip', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','JS','script.js');
    res.sendFile(filePath);
});

app.get('/Fase_scrip_D', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','js','direita.js');
    res.sendFile(filePath);
});

app.get('/Fase_scrip_E', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','js','esquerda.js');
    res.sendFile(filePath);
});

app.get('/Fase_scrip_F', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','js','frente.js');
    res.sendFile(filePath);
});

app.get('/Fase_scrip_FU', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','js','fundo.js');
    res.sendFile(filePath);
});

app.get('/Fase_scrip_T', function(req, res) {
    const filePath = path.join(__dirname, 'Math_Scape_telas', '5-Jogo Math Scape','js','teto.js');
    res.sendFile(filePath);
});

app.listen(8082, function(){
    console.log("servidor rodando na url http://localhost:8082");
});
