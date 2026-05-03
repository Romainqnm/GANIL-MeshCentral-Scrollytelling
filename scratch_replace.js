const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Diapo_E5', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const newCSS = `
      /* ---------- 1) WARP (VITESSE / GRIND) ---------- */
      .fx-warp {
        background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), rgba(10, 3, 20, 0.95));
        perspective: 1000px;
      }
      .fx-warp .warp-stars, .fx-warp .warp-stars-2 {
        position: absolute;
        inset: -50%;
        background-image: 
          radial-gradient(2px 2px at 20px 30px, #e879f9, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 40px 70px, #c026d3, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 50px 160px, #f472b6, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 90px 40px, #fdf4ff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 130px 80px, #d946ef, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 160px 120px, #86198f, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
        opacity: 0;
        transform: translateZ(-500px) scale(1);
      }
      .fx-warp .warp-stars-2 {
        background-size: 300px 300px;
        transform: translateZ(-800px) scale(1) rotate(45deg);
      }
      .fx-warp .warp-center {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4), transparent 60%);
        opacity: 0;
        transform: scale(0.5);
      }

      #fxOverlay.transitioning.effect-warp .fx-warp {
        opacity: 1;
        animation: warpOverlayCycle var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-warp .fx-dim {
        animation: dimPulse var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-warp .warp-stars {
        animation: warpDive var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1) both;
      }
      #fxOverlay.transitioning.effect-warp .warp-stars-2 {
        animation: warpDive2 var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1) both;
      }
      #fxOverlay.transitioning.effect-warp .warp-center {
        animation: warpFlash var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }

      /* ---------- 2) GLITCH (CYBER / INSTABLE) ---------- */
      .fx-glitch {
        background: #0a0314;
        overflow: hidden;
      }
      .fx-glitch .glitch-slice {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(217, 70, 239, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
        opacity: 0;
      }
      .fx-glitch .slice-1 { clip-path: polygon(0 10%, 100% 10%, 100% 30%, 0 30%); }
      .fx-glitch .slice-2 { clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%); }
      .fx-glitch .slice-3 { clip-path: polygon(0 70%, 100% 70%, 100% 90%, 0 90%); }
      .fx-glitch .glitch-noise {
        position: absolute;
        inset: -20%;
        background: repeating-radial-gradient(circle at 50% 50%, transparent 0, rgba(236, 72, 153, 0.05) 10px, transparent 20px);
        opacity: 0;
      }

      #fxOverlay.transitioning.effect-glitch .fx-glitch {
        opacity: 1;
        animation: glitchOverlayCycle var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-glitch .fx-dim {
        animation: dimPulseStrong var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-glitch .slice-1 { animation: glitchJitter1 var(--transition-duration) linear both; }
      #fxOverlay.transitioning.effect-glitch .slice-2 { animation: glitchJitter2 var(--transition-duration) linear both; }
      #fxOverlay.transitioning.effect-glitch .slice-3 { animation: glitchJitter3 var(--transition-duration) linear both; }
      #fxOverlay.transitioning.effect-glitch .glitch-noise { animation: noiseFlicker var(--transition-duration) steps(5) both; }

      /* ---------- 3) PULSE (ONDE DE CHOC / RYTHME) ---------- */
      .fx-pulse {
        background: radial-gradient(circle at 50% 50%, rgba(10, 3, 20, 0.9), #05010a);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .fx-pulse .pulse-ring {
        position: absolute;
        border-radius: 50%;
        border: 2px solid rgba(217, 70, 239, 0.8);
        box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(236, 72, 153, 0.4);
        opacity: 0;
        transform: scale(0);
      }
      .fx-pulse .ring-1 { width: 30vw; height: 30vw; border-width: 4px; }
      .fx-pulse .ring-2 { width: 60vw; height: 60vw; border-color: rgba(236, 72, 153, 0.6); }
      .fx-pulse .ring-3 { width: 100vw; height: 100vw; border-color: rgba(168, 85, 247, 0.4); }

      #fxOverlay.transitioning.effect-pulse .fx-pulse {
        opacity: 1;
        animation: pulseOverlayCycle var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-pulse .fx-dim {
        animation: dimPulse var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-pulse .ring-1 { animation: pulseExpand var(--transition-duration) cubic-bezier(0.1, 0.8, 0.3, 1) both; }
      #fxOverlay.transitioning.effect-pulse .ring-2 { animation: pulseExpand var(--transition-duration) cubic-bezier(0.1, 0.8, 0.3, 1) 0.1s both; }
      #fxOverlay.transitioning.effect-pulse .ring-3 { animation: pulseExpand var(--transition-duration) cubic-bezier(0.1, 0.8, 0.3, 1) 0.2s both; }

      /* ---------- 4) ASCEND (ASCENSION / PROGRESSION) ---------- */
      .fx-ascend {
        background: linear-gradient(0deg, #170535 0%, #0a0314 100%);
        overflow: hidden;
      }
      .fx-ascend .ascend-beam {
        position: absolute;
        bottom: -20%;
        width: 10%;
        height: 140%;
        background: linear-gradient(0deg, rgba(236, 72, 153, 0), rgba(217, 70, 239, 0.4), rgba(168, 85, 247, 0));
        opacity: 0;
        transform: translateY(100%);
      }
      .fx-ascend .beam-1 { left: 20%; width: 15%; filter: blur(20px); }
      .fx-ascend .beam-2 { left: 50%; width: 8%; filter: blur(10px); }
      .fx-ascend .beam-3 { left: 80%; width: 20%; filter: blur(30px); }
      
      #fxOverlay.transitioning.effect-ascend .fx-ascend {
        opacity: 1;
        animation: ascendOverlayCycle var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-ascend .fx-dim {
        animation: dimPulseStrong var(--transition-duration) cubic-bezier(0.16, 0.72, 0.24, 1) both;
      }
      #fxOverlay.transitioning.effect-ascend .beam-1 { animation: beamRise var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1) both; }
      #fxOverlay.transitioning.effect-ascend .beam-2 { animation: beamRise var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1) 0.1s both; }
      #fxOverlay.transitioning.effect-ascend .beam-3 { animation: beamRise var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1) 0.05s both; }

      /* ---------- KEYFRAMES ---------- */
      @keyframes warpOverlayCycle {
        0% { opacity: 0; }
        10% { opacity: 1; }
        70% { opacity: 1; }
        100% { opacity: 0; }
      }
      @keyframes warpDive {
        0% { opacity: 0; transform: translateZ(-500px) scale(1); }
        20% { opacity: 0.8; }
        100% { opacity: 0; transform: translateZ(500px) scale(3); }
      }
      @keyframes warpDive2 {
        0% { opacity: 0; transform: translateZ(-800px) scale(1) rotate(45deg); }
        20% { opacity: 0.6; }
        100% { opacity: 0; transform: translateZ(300px) scale(4) rotate(45deg); }
      }
      @keyframes warpFlash {
        0% { opacity: 0; transform: scale(0.5); }
        40% { opacity: 0.9; transform: scale(1.5); }
        100% { opacity: 0; transform: scale(2.5); }
      }

      @keyframes glitchOverlayCycle {
        0% { opacity: 0; }
        5% { opacity: 1; }
        75% { opacity: 1; }
        100% { opacity: 0; }
      }
      @keyframes glitchJitter1 {
        0% { opacity: 0; transform: translateX(0); }
        10% { opacity: 0.8; transform: translateX(-20px); filter: hue-rotate(90deg); }
        20% { transform: translateX(15px); }
        30% { transform: translateX(-10px); filter: hue-rotate(-90deg); }
        40% { transform: translateX(25px); }
        50% { opacity: 0.9; transform: translateX(-5px); }
        60% { transform: translateX(10px); filter: hue-rotate(45deg); }
        70% { transform: translateX(-15px); }
        80% { opacity: 0; transform: translateX(0); }
        100% { opacity: 0; }
      }
      @keyframes glitchJitter2 {
        0% { opacity: 0; transform: translateX(0); }
        15% { opacity: 0.7; transform: translateX(25px); filter: hue-rotate(-45deg); }
        25% { transform: translateX(-15px); }
        35% { transform: translateX(20px); }
        45% { transform: translateX(-25px); filter: hue-rotate(90deg); }
        55% { opacity: 0.8; transform: translateX(10px); }
        65% { transform: translateX(-20px); }
        75% { opacity: 0; transform: translateX(0); }
        100% { opacity: 0; }
      }
      @keyframes glitchJitter3 {
        0% { opacity: 0; transform: translateX(0); }
        12% { opacity: 0.9; transform: translateX(-15px); filter: invert(1); }
        22% { transform: translateX(30px); }
        32% { transform: translateX(-25px); }
        42% { transform: translateX(10px); filter: invert(0); }
        52% { opacity: 0.7; transform: translateX(-20px); }
        62% { transform: translateX(15px); }
        72% { opacity: 0; transform: translateX(0); }
        100% { opacity: 0; }
      }
      @keyframes noiseFlicker {
        0% { opacity: 0; transform: translateY(0); }
        10% { opacity: 0.3; transform: translateY(-5%); }
        30% { opacity: 0.1; transform: translateY(5%); }
        50% { opacity: 0.4; transform: translateY(-2%); }
        70% { opacity: 0.2; transform: translateY(3%); }
        90% { opacity: 0; transform: translateY(0); }
        100% { opacity: 0; }
      }

      @keyframes pulseOverlayCycle {
        0% { opacity: 0; }
        10% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0; }
      }
      @keyframes pulseExpand {
        0% { opacity: 0; transform: scale(0); border-width: 10px; }
        20% { opacity: 0.8; }
        60% { opacity: 0; transform: scale(1.5); border-width: 1px; }
        100% { opacity: 0; transform: scale(2); }
      }

      @keyframes ascendOverlayCycle {
        0% { opacity: 0; }
        10% { opacity: 1; }
        75% { opacity: 1; }
        100% { opacity: 0; }
      }
      @keyframes beamRise {
        0% { opacity: 0; transform: translateY(100%); }
        20% { opacity: 0.8; transform: translateY(20%); }
        80% { opacity: 0; transform: translateY(-100%); }
        100% { opacity: 0; }
      }

      @keyframes dimPulse {
        0% { opacity: 0; }
        16% { opacity: 0.36; }
        52% { opacity: 0.58; }
        78% { opacity: 0.44; }
        100% { opacity: 0; }
      }
      @keyframes dimPulseStrong {
        0% { opacity: 0; }
        18% { opacity: 0.46; }
        50% { opacity: 0.72; }
        78% { opacity: 0.54; }
        100% { opacity: 0; }
      }
`;

// Regex to replace everything from /* ---------- 1) RACK SERVEUR ---------- */ to the end of dimPulseStrong
// and before @keyframes slideSinkOut

const startMarker = "/* ---------- 1) RACK SERVEUR ---------- */";
const endMarker = "@keyframes slideSinkOut";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.substring(0, startIndex) + newCSS + "\n      " + content.substring(endIndex);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('CSS replaced successfully.');
} else {
  console.log('Markers not found.');
}
