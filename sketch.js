/// dados da bola
let xBolinha = 300
let yBolinha = 200
let zBolinha = 30
let raio = zBolinha / 2

/// velocidade da bolinha
let velocidadex = 6
let velContraria = 6

//// mostrar raquete
let xRaquete = 5
let yRaquete= 160
let comprimentoRaq = 100
let larguraRaq = 10

//// raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente= 160
let velocidadeYOponente;

////placar
let meusPontos = 0
let pontosOponente = 0

/// som
let raquetada
let ponto
let trilha

function preload(){
    trilha = loadSound("trilha.mp3")
    raquetada = loadSound("raquetada.mp3")
    ponto = loadSound("ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(10);
  mostrarBolinha();
  bolinhaVelocidade()
  comportamentoBolinha()
  mostrarRaquetes()
  movimentaMinhaRaquete()  
  verificaColisaoRaquete()
  mostrarOponente()
  movimentaRaqueteOponente ()
  colisaoOponente()
  incluirPlacar()
  pontos ()
}
function mostrarBolinha(){
   circle(xBolinha,yBolinha,zBolinha)
}
function bolinhaVelocidade(){
  xBolinha += velocidadex
  yBolinha += velContraria
}
function comportamentoBolinha(){
    if (xBolinha +raio > width || xBolinha - raio < 0){
  velocidadex *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velContraria*= -1
  }
}
function mostrarRaquetes(){
  rect(xRaquete,yRaquete,larguraRaq,comprimentoRaq)
}
function mostrarOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,larguraRaq,comprimentoRaq)
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
  yRaquete = constrain(yRaquete,0,300)
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + larguraRaq
        && yBolinha - raio < yRaquete + comprimentoRaq
        && yBolinha + raio > yRaquete) {
        velocidadex *= -1;
    }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaq / 2 - 50
  yRaqueteOponente += velocidadeYOponente
  yRaqueteOponente = constrain(yRaqueteOponente,0,300)
}
function colisaoOponente(){
  if (xBolinha + raio > xRaqueteOponente - larguraRaq 
      && yBolinha + raio > yRaqueteOponente - comprimentoRaq
      && yBolinha + raio > yRaqueteOponente){
      velocidadex *= -1
  } 
}
function incluirPlacar(){
  fill(255)
  text(meusPontos,278,26)
  text(pontosOponente,321,26)
}
function pontos(){
  if (xBolinha > 585){
    meusPontos += 1
  }
  if (xBolinha < 15){
    pontosOponente += 1
  }  
}


