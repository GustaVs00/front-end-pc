// ============================================
// ESTAÇÃO ALPHA — Cena Espacial Animada
// Aula de Laboratório: Fundamentos de HTML Canvas
// ============================================
// Cada seção corresponde a um Bloco da aula.
// Construa a cena adicionando bloco a bloco!
// ============================================

// ============================================================
// BLOCO 1 — Setup do Canvas
// Conceitos: <canvas>, getContext("2d"), sistema de coordenadas
// ============================================================

// 1.1 Obter referência ao elemento <canvas> do HTML
const canvas = document.getElementById("sceneCanvas");

// 1.2 Obter o contexto de desenho 2D
const ctx = canvas.getContext("2d");

// 1.3 Sistema de coordenadas:
//     (0, 0) = canto SUPERIOR ESQUERDO
//     x cresce para a DIREITA (0 → 600)
//     y cresce para BAIXO    (0 → 400)

// ============================================================
// VARIÁVEIS DA CENA
// ============================================================

const stars = [];           // Lista de estrelas
let planetPulse = 0;        // Variação do tamanho do planeta
let pulseDirection = 1;     // Direção da pulsação (+1 ou -1)

// ============================================================
// BLOCO 5 — Estrelas iniciais (Círculos)
// Conceitos: arc(), Math.random(), arrays
// ============================================================

// Gerar 30 estrelas em posições aleatórias no céu
for (let i = 0; i < 30; i++) {
    stars.push({
        x: Math.random() * 800,       // posição horizontal aleatória
        y: Math.random() * 280,       // apenas na zona do céu
        size: Math.random() * 2 + 1, // tamanho entre 0.5 e 2.5
        alpha: Math.random() * 0.8 + 0.2  // transparência variada
    });
}

// ============================================================
// FUNÇÕES DE DESENHO — cada função = 1 camada visual
// ============================================================

// ---- BLOCO 7: Fundo com Gradiente Linear ----
// Conceitos: createLinearGradient(), addColorStop()
function drawSky() {
    // Gradiente vertical: topo mais escuro → base mais clara
    var skyGrad = ctx.createLinearGradient(0, 0, 0, 340);
    skyGrad.addColorStop(0, "#01010e");       // espaço profundo
    skyGrad.addColorStop(0.5, "#04042c");     // azul escuro
    skyGrad.addColorStop(1, "#1f1f47");       // horizonte
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 600, 340);
}

// ---- BLOCO 2 + 3: Chão da Superfície (Retângulos + Cores) ----
// Conceitos: fillRect(), fillStyle, strokeStyle
function drawGround() {
    // Superfície do planeta (retângulo preenchido)
    ctx.fillStyle = "#0b2008";
    ctx.fillRect(0, 340, 600, 60);

    // Linha do horizonte
    ctx.beginPath();
    ctx.moveTo(0, 340);
    ctx.lineTo(600, 340);
    ctx.strokeStyle = "rgb(231, 231, 229)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Marcas na superfície (detalhes visuais)
    ctx.fillStyle = "rgba(43, 110, 3, 0.99)";
    ctx.fillRect(50, 360, 80, 2);
    ctx.fillRect(200, 370, 60, 2);
    ctx.fillRect(400, 355, 100, 2);
    ctx.fillRect(520, 365, 50, 2);
}

// ---- BLOCO 5: Estrelas (Círculos) ----
// Conceitos: beginPath(), arc(), fill(), rgba()
function drawStars() {
    stars.forEach(function (star) {
        ctx.beginPath();
        // arc(x, y, raio, anguloInicio, anguloFim)
        // Math.PI * 2 = 360 graus = círculo completo
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249, 231, 149, " + star.alpha + ")";
        ctx.fill();
    });
}

// ---- BLOCO 5 + 7: Planeta (Círculo + Gradiente Radial) ----
// Conceitos: arc(), createRadialGradient(), addColorStop()
function drawPlanet() {
    var radius = 40 + planetPulse;

    // Brilho ao redor do planeta (gradiente radial)
    var glow = ctx.createRadialGradient(480, 80, 10, 480, 80, radius + 25);
    glow.addColorStop(0, "rgba(138, 141, 108, 0.99)");
    glow.addColorStop(1, "rgb(95, 93, 83)");
    ctx.beginPath();
    ctx.arc(480, 80, radius + 25, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // Corpo do planeta (gradiente radial para efeito 3D)
    var planetGrad = ctx.createRadialGradient(470, 70, 5, 480, 80, radius);
    planetGrad.addColorStop(0, "#ffffff");    // núcleo dourado
    planetGrad.addColorStop(0.6, "#e6e6e6");  // manto coral
    planetGrad.addColorStop(1, "#797777");    // borda navy
    ctx.beginPath();
    ctx.arc(480, 80, radius, 0, Math.PI * 2);
    ctx.fillStyle = planetGrad;
    ctx.fill();

    // Anel decorativo (arco parcial)
    ctx.beginPath();
    ctx.arc(480, 80, radius + 8, -0.3, Math.PI + 0.3);
    ctx.strokeStyle = "rgba(248, 246, 242, 0.86)";
    ctx.lineWidth = 1;
    ctx.stroke();
}

// ---- BLOCO 2: Estação Espacial (Retângulos) ----
// Conceitos: fillRect(), strokeRect()
function drawStation() {
    // Corpo principal da estação
    ctx.fillStyle = "#6e6d6d";
    ctx.fillRect(220, 290, 160, 50);

    // Contorno da estação
    ctx.strokeStyle = "#464444";
    ctx.lineWidth = 6;
    ctx.strokeRect(220, 290, 160, 50);

    // --- Bloco 3: Janelas com cores diferentes ---
    // Conceitos: fillStyle com rgba (transparência)
    ctx.fillStyle = "rgb(243, 243, 242)";
    ctx.fillRect(235, 305, 18, 14);
    ctx.fillRect(263, 305, 18, 14);
    ctx.fillRect(319, 305, 18, 14);
    ctx.fillRect(347, 305, 18, 14);

    // Porta central (cor coral)
    ctx.fillStyle = "#4e4d4d";
    ctx.fillRect(290, 310, 20, 30);

    // --- Bloco 2: Módulo esquerdo (retângulo menor) ---
    ctx.fillStyle = "#6e6d6d";
    ctx.fillRect(170, 310, 50, 30);
    ctx.strokeStyle = "#464444";
    ctx.lineWidth = 5;
    ctx.strokeRect(170, 310, 50, 30);

    // --- Bloco 2: Módulo direito ---
    ctx.fillStyle = "#6e6d6d";
    ctx.fillRect(380, 310, 50, 30);
    ctx.strokeStyle = "#464444";
    ctx.lineWidth = 5;
    ctx.strokeRect(380, 310, 50, 30);
}

// ---- BLOCO 4: Antenas e Estruturas (Linhas e Triângulos) ----
// Conceitos: beginPath(), moveTo(), lineTo(), closePath(), fill()
function drawAntennas() {
    // Antena esquerda — mastro vertical (linha)
    ctx.beginPath();
    ctx.moveTo(250, 290);       // base (topo da estação)
    ctx.lineTo(250, 235);       // topo do mastro
    ctx.strokeStyle = "#e3f308";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Antena esquerda — ponta triangular
    ctx.beginPath();
    ctx.moveTo(250, 215);       // ponta superior
    ctx.lineTo(238, 235);       // base esquerda
    ctx.lineTo(262, 235);       // base direita
    ctx.closePath();             // fecha automaticamente
    ctx.fillStyle = "#686565";
    ctx.fill();

    // Antena direita — mastro vertical
    ctx.beginPath();
    ctx.moveTo(350, 290);
    ctx.lineTo(350, 245);
    ctx.strokeStyle = "#e3f308";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Antena direita — radar (arco = meio círculo)
    ctx.beginPath();
    ctx.arc(350, 245, 15, Math.PI, 0);   // semicírculo superior
    ctx.strokeStyle = "#797676";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Cabo de conexão entre as antenas (linha horizontal)
    ctx.beginPath();
    ctx.moveTo(250, 260);
    ctx.lineTo(350, 260);
    ctx.strokeStyle = "rgb(202, 197, 197)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Suportes diagonais (linhas de reforço)
    ctx.beginPath();
    ctx.moveTo(220, 290);       // base esquerda da estação
    ctx.lineTo(195, 325);       // chão esquerdo
    ctx.moveTo(380, 290);       // base direita da estação
    ctx.lineTo(405, 325);       // chão direito
    ctx.strokeStyle = "rgb(202, 197, 197)";
    ctx.lineWidth = 1;
    ctx.stroke();
}

// ---- BLOCO 6: Textos da Cena ----
// Conceitos: font, fillText(), textAlign
function drawText() {
    // Título da cena (centro inferior)
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "rgb(202, 197, 197)";
    ctx.textAlign = "center";
    ctx.fillText("ESTAÇÃO ALPHA", 300, 380);

    // Crédito do aluno (canto inferior esquerdo)
    ctx.font = "12px Arial";
    ctx.fillStyle = "rgb(202, 197, 197)";
    ctx.textAlign = "left";
    ctx.fillText("Criado por: Aluno", 10, 395);

    // Contador de estrelas (canto inferior direito)
    ctx.font = "10px Arial";
    ctx.fillStyle = "rgb(202, 197, 197)";
    ctx.textAlign = "right";
    ctx.fillText("Estrelas: " + stars.length, 590, 395);
}

// ============================================================
// BLOCO 8 — Animação
// Conceitos: requestAnimationFrame(), clearRect(), variáveis
// ============================================================

function animate() {
    // 8.1 Limpar todo o canvas antes de redesenhar
    ctx.clearRect(0, 0, 600, 400);

    // 8.2 Redesenhar cada camada (ordem importa!)
    drawSky();          // Bloco 7: fundo com gradiente
    drawStars();        // Bloco 5: estrelas
    drawPlanet();       // Bloco 5+7: planeta com gradiente
    drawGround();       // Bloco 2+3: superfície
    drawStation();      // Bloco 2+3: estação espacial
    drawAntennas();     // Bloco 4: antenas e linhas
    drawText();         // Bloco 6: textos

    // 8.3 Atualizar estado — cintilação das estrelas
    stars.forEach(function (star) {
        star.alpha += (Math.random() - 0.5) * 0.06;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 1.0) star.alpha = 1.0;
    });

    // 8.4 Atualizar estado — pulsação do planeta
    planetPulse += 0.03 * pulseDirection;
    if (planetPulse > 2) pulseDirection = -1;
    if (planetPulse < -2) pulseDirection = 1;

    // 8.5 Solicitar próximo frame (~60fps)
    requestAnimationFrame(animate);
}

// ============================================================
// BLOCO 9 — Interação com Mouse
// Conceitos: addEventListener(), getBoundingClientRect()
// ============================================================

// 9.1 Função auxiliar: converter coordenadas do mouse para Canvas
// Necessário porque o canvas pode estar redimensionado pelo CSS
function getCanvasCoords(event) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };
}

// 9.2 Evento de clique — adicionar nova estrela
canvas.addEventListener("click", function (e) {
    var coords = getCanvasCoords(e);

    // Criar estrela apenas na zona do céu (y < 340)
    if (coords.y < 340) {
        stars.push({
            x: coords.x,
            y: coords.y,
            size: Math.random() * 2.5 + 1,
            alpha: 1.0
        });
    }
});

// ============================================================
// INICIAR A CENA!
// ============================================================
animate();
