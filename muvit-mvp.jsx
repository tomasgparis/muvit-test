import { useState, useRef, useCallback } from "react";

// ─── PROPERTY ILLUSTRATIONS (SVG, no external deps) ──────────────────────────
const PropertyImage1 = () => (
  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <defs>
      <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDEBD0"/>
        <stop offset="100%" stopColor="#FAD7A0"/>
      </linearGradient>
      <linearGradient id="floor1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#C8A87A"/>
        <stop offset="100%" stopColor="#A0785A"/>
      </linearGradient>
    </defs>
    {/* Background wall */}
    <rect width="400" height="280" fill="#F5ECD7"/>
    {/* Exposed brick wall section */}
    {[0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7,8,9].map(col => (
      <rect key={`${row}-${col}`}
        x={col*44 + (row%2)*22} y={row*22}
        width="40" height="18" rx="1"
        fill={row<6 ? (col%3===0?"#C1876B":col%3===1?"#B87355":"#C9926E") : "none"}
        opacity="0.7"
      />
    )))}
    {/* Floor */}
    <rect x="0" y="210" width="400" height="70" fill="url(#floor1)"/>
    {/* Floorboard lines */}
    {[220,230,240,250,260,270].map(y=>(
      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#8B6344" strokeWidth="0.5" opacity="0.4"/>
    ))}
    {/* Large window with city view */}
    <rect x="50" y="30" width="140" height="160" rx="4" fill="#AED6F1" opacity="0.7"/>
    <rect x="50" y="30" width="140" height="160" rx="4" fill="none" stroke="#8B6344" strokeWidth="6"/>
    {/* Window panes */}
    <line x1="120" y1="30" x2="120" y2="190" stroke="#8B6344" strokeWidth="4"/>
    <line x1="50" y1="110" x2="190" y2="110" stroke="#8B6344" strokeWidth="4"/>
    {/* City silhouette in window */}
    <rect x="55" y="120" width="25" height="65" fill="#5D8AA8" opacity="0.5"/>
    <rect x="85" y="95" width="20" height="90" fill="#4A7A96" opacity="0.5"/>
    <rect x="110" y="115" width="18" height="70" fill="#5D8AA8" opacity="0.5"/>
    <rect x="133" y="100" width="22" height="85" fill="#4A7A96" opacity="0.5"/>
    <rect x="158" y="125" width="28" height="60" fill="#5D8AA8" opacity="0.5"/>
    {/* Sofa */}
    <rect x="200" y="160" width="180" height="55" rx="8" fill="#8D6E63"/>
    <rect x="200" y="145" width="180" height="25" rx="6" fill="#9E7B70"/>
    <rect x="200" y="155" width="20" height="60" rx="4" fill="#7B5B52"/>
    <rect x="360" y="155" width="20" height="60" rx="4" fill="#7B5B52"/>
    {/* Cushions */}
    <rect x="215" y="148" width="45" height="30" rx="8" fill="#E8572A" opacity="0.9"/>
    <rect x="270" y="148" width="45" height="30" rx="8" fill="#F5CBA7" opacity="0.9"/>
    <rect x="325" y="148" width="45" height="30" rx="8" fill="#E8572A" opacity="0.7"/>
    {/* Industrial lamp */}
    <line x1="320" y1="0" x2="320" y2="70" stroke="#5D4037" strokeWidth="3"/>
    <path d="M300 70 Q320 85 340 70" fill="#5D4037"/>
    <circle cx="320" cy="75" r="8" fill="#FFF9C4" opacity="0.9"/>
    {/* Small plant */}
    <rect x="355" y="180" width="12" height="20" rx="2" fill="#8D6E63"/>
    <ellipse cx="361" cy="175" rx="15" ry="20" fill="#2E7D32" opacity="0.8"/>
    <ellipse cx="350" cy="170" rx="10" ry="14" fill="#388E3C" opacity="0.8"/>
    <ellipse cx="372" cy="172" rx="10" ry="12" fill="#43A047" opacity="0.7"/>
  </svg>
);

const PropertyImage2 = () => (
  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <defs>
      <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#85C1E9"/>
        <stop offset="100%" stopColor="#AED6F1"/>
      </linearGradient>
      <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5DADE2"/>
        <stop offset="100%" stopColor="#2E86C1"/>
      </linearGradient>
    </defs>
    {/* Sky */}
    <rect width="400" height="280" fill="url(#sky2)"/>
    {/* Clouds */}
    <ellipse cx="80" cy="40" rx="40" ry="18" fill="white" opacity="0.8"/>
    <ellipse cx="110" cy="35" rx="30" ry="22" fill="white" opacity="0.8"/>
    <ellipse cx="50" cy="45" rx="25" ry="15" fill="white" opacity="0.8"/>
    <ellipse cx="300" cy="55" rx="35" ry="16" fill="white" opacity="0.7"/>
    <ellipse cx="330" cy="50" rx="25" ry="19" fill="white" opacity="0.7"/>
    {/* River/water at bottom */}
    <rect x="0" y="220" width="400" height="60" fill="url(#water)"/>
    {/* Water shimmer */}
    {[0,1,2,3,4,5].map(i=>(
      <line key={i} x1={30+i*60} y1={230+i*4} x2={70+i*60} y2={230+i*4} stroke="white" strokeWidth="1.5" opacity="0.3"/>
    ))}
    {/* City skyline */}
    <rect x="0" y="140" width="60" height="80" fill="#BDC3C7"/>
    <rect x="10" y="120" width="40" height="100" fill="#95A5A6"/>
    <rect x="70" y="100" width="50" height="120" fill="#BDC3C7"/>
    <rect x="130" y="80" width="55" height="140" fill="#95A5A6"/>
    <rect x="190" y="110" width="45" height="110" fill="#BDC3C7"/>
    <rect x="245" y="90" width="60" height="130" fill="#95A5A6"/>
    <rect x="310" y="120" width="50" height="100" fill="#BDC3C7"/>
    <rect x="360" y="105" width="40" height="115" fill="#95A5A6"/>
    {/* Windows on buildings */}
    {[145,165,185].map(y=>[75,90,105,115].map(x=>(
      <rect key={`${x}-${y}`} x={x} y={y} width="8" height="10" fill="#F9E79F" opacity="0.7"/>
    )))}
    {/* Terrace floor */}
    <rect x="0" y="200" width="400" height="20" fill="#D5D8DC"/>
    {/* Terrace railing */}
    <rect x="0" y="195" width="400" height="5" fill="#AEB6BF"/>
    {[20,50,80,110,140,170,200,230,260,290,320,350,380].map(x=>(
      <rect key={x} x={x} y="170" width="3" height="25" fill="#AEB6BF"/>
    ))}
    {/* Lounge chairs */}
    <rect x="30" y="175" width="80" height="22" rx="5" fill="#E8572A" opacity="0.9"/>
    <rect x="30" y="162" width="80" height="18" rx="5" fill="#C0392B" opacity="0.9" transform="rotate(-15,70,171)"/>
    <rect x="140" y="175" width="80" height="22" rx="5" fill="#E8572A" opacity="0.9"/>
    <rect x="140" y="162" width="80" height="18" rx="5" fill="#C0392B" opacity="0.9" transform="rotate(-15,180,171)"/>
    {/* Table with drink */}
    <rect x="110" y="178" width="25" height="18" rx="3" fill="#F0F3F4"/>
    <ellipse cx="122" cy="178" rx="10" ry="4" fill="#D5D8DC"/>
    <rect x="118" y="168" width="8" height="12" rx="2" fill="#85C1E9" opacity="0.8"/>
    {/* Plant pots */}
    <rect x="270" y="180" width="18" height="16" rx="2" fill="#A04000" opacity="0.8"/>
    <ellipse cx="279" cy="175" rx="18" ry="22" fill="#27AE60" opacity="0.8"/>
    <ellipse cx="266" cy="172" rx="12" ry="16" fill="#2ECC71" opacity="0.7"/>
  </svg>
);

const PropertyImage3 = () => (
  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <defs>
      <linearGradient id="wall3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FAF0E6"/>
        <stop offset="100%" stopColor="#F5DEB3"/>
      </linearGradient>
    </defs>
    <rect width="400" height="280" fill="url(#wall3)"/>
    {/* Terracotta floor tiles */}
    {[0,1,2,3,4,5,6,7].map(row=>[0,1,2,3,4,5,6,7,8,9].map(col=>(
      <rect key={`${row}-${col}`} x={col*44} y={180+row*20} width="42" height="18" rx="1"
        fill={col%2===0?"#C0784A":"#B5693F"} opacity="0.85"/>
    )))}
    {/* Arched doorway */}
    <rect x="150" y="40" width="100" height="150" fill="#D4A574" opacity="0.3"/>
    <path d="M150 130 Q200 40 250 130" fill="#D4A574" opacity="0.4"/>
    <rect x="155" y="130" width="90" height="60" fill="#8B6914" opacity="0.15"/>
    {/* Arch outline */}
    <path d="M150 135 Q200 42 250 135" fill="none" stroke="#8B6914" strokeWidth="8"/>
    <rect x="150" y="135" width="100" height="55" fill="none" stroke="#8B6914" strokeWidth="8"/>
    {/* Courtyard visible through arch */}
    <rect x="158" y="138" width="84" height="50" fill="#87CEEB" opacity="0.4"/>
    <ellipse cx="200" cy="165" rx="25" ry="30" fill="#2E7D32" opacity="0.6"/>
    <ellipse cx="185" cy="155" rx="15" ry="20" fill="#388E3C" opacity="0.6"/>
    {/* Vintage wooden table */}
    <rect x="20" y="170" width="110" height="12" rx="4" fill="#8B4513"/>
    <rect x="25" y="182" width="10" height="25" rx="2" fill="#6B3410"/>
    <rect x="115" y="182" width="10" height="25" rx="2" fill="#6B3410"/>
    <rect x="50" y="182" width="10" height="25" rx="2" fill="#6B3410"/>
    <rect x="90" y="182" width="10" height="25" rx="2" fill="#6B3410"/>
    {/* Chair */}
    <rect x="300" y="162" width="60" height="10" rx="3" fill="#8B4513"/>
    <rect x="300" y="172" width="60" height="30" rx="3" fill="#A0522D"/>
    <rect x="302" y="202" width="8" height="20" rx="2" fill="#8B4513"/>
    <rect x="350" y="202" width="8" height="20" rx="2" fill="#8B4513"/>
    {/* Vintage lamp */}
    <rect x="330" y="0" width="4" height="85" fill="#8B4513"/>
    <path d="M310 85 Q332 105 354 85 Z" fill="#DEB887" stroke="#8B4513" strokeWidth="2"/>
    <ellipse cx="332" cy="85" rx="22" ry="6" fill="#DEB887" stroke="#8B4513" strokeWidth="2"/>
    {/* Books */}
    {[0,1,2,3,4].map(i=>(
      <rect key={i} x={22+i*12} y={155} width="10" height="16" rx="1"
        fill={["#E8572A","#27AE60","#2980B9","#8E44AD","#F39C12"][i]} opacity="0.9"/>
    ))}
    {/* Hanging plants */}
    <line x1="60" y1="0" x2="60" y2="35" stroke="#8B4513" strokeWidth="2"/>
    <ellipse cx="60" cy="42" rx="20" ry="16" fill="#27AE60" opacity="0.8"/>
    <line x1="350" y1="0" x2="350" y2="30" stroke="#8B4513" strokeWidth="2"/>
    <ellipse cx="350" cy="38" rx="18" ry="14" fill="#2ECC71" opacity="0.7"/>
  </svg>
);

const PropertyImage4 = () => (
  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <defs>
      <linearGradient id="wall4" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDFEFE"/>
        <stop offset="100%" stopColor="#EBF5FB"/>
      </linearGradient>
    </defs>
    <rect width="400" height="280" fill="url(#wall4)"/>
    {/* Balcony window - large */}
    <rect x="240" y="10" width="145" height="200" rx="6" fill="#AED6F1" opacity="0.5"/>
    <rect x="240" y="10" width="145" height="200" rx="6" fill="none" stroke="#BDC3C7" strokeWidth="5"/>
    <line x1="312" y1="10" x2="312" y2="210" stroke="#BDC3C7" strokeWidth="4"/>
    <line x1="240" y1="110" x2="385" y2="110" stroke="#BDC3C7" strokeWidth="4"/>
    {/* Outside view - city */}
    <rect x="243" y="130" width="30" height="75" fill="#85C1E9" opacity="0.4"/>
    <rect x="278" y="115" width="25" height="90" fill="#7FB3D3" opacity="0.4"/>
    <rect x="318" y="125" width="20" height="80" fill="#85C1E9" opacity="0.4"/>
    <rect x="343" y="118" width="28" height="87" fill="#7FB3D3" opacity="0.4"/>
    {/* Modern kitchen */}
    <rect x="0" y="185" width="180" height="95" fill="#ECF0F1"/>
    <rect x="0" y="185" width="180" height="12" fill="#BDC3C7"/>
    {/* Countertop */}
    <rect x="0" y="185" width="180" height="8" fill="#D5D8DC"/>
    {/* Cabinet handles */}
    {[15,45,75,105,135].map(x=>(
      <rect key={x} x={x} y={220} width="20" height="3" rx="1" fill="#AEB6BF"/>
    ))}
    {/* Sink */}
    <rect x="30" y="192" width="50" height="25" rx="3" fill="#A9CCE3" opacity="0.5"/>
    <circle cx="55" cy="192" r="3" fill="#85929E"/>
    {/* Cooktop */}
    {[[110,198],[125,198],[110,210],[125,210]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="7" fill="none" stroke="#566573" strokeWidth="2"/>
    ))}
    {/* Modern sofa */}
    <rect x="30" y="135" width="190" height="45" rx="8" fill="#E8F4FD"/>
    <rect x="30" y="118" width="190" height="25" rx="6" fill="#D6EAF8"/>
    <rect x="30" y="128" width="16" height="52" rx="5" fill="#AED6F1"/>
    <rect x="204" y="128" width="16" height="52" rx="5" fill="#AED6F1"/>
    {/* Cushions */}
    <rect x="50" y="120" width="50" height="28" rx="8" fill="#E8572A" opacity="0.85"/>
    <rect x="110" y="120" width="50" height="28" rx="8" fill="#F8C471" opacity="0.85"/>
    <rect x="165" y="120" width="40" height="28" rx="8" fill="#E8572A" opacity="0.6"/>
    {/* Coffee table */}
    <rect x="60" y="178" width="100" height="8" rx="3" fill="#D5D8DC"/>
    <rect x="65" y="186" width="8" height="12" rx="2" fill="#BDC3C7"/>
    <rect x="147" y="186" width="8" height="12" rx="2" fill="#BDC3C7"/>
    {/* Plant in corner */}
    <rect x="200" y="210" width="20" height="30" rx="3" fill="#CB4335" opacity="0.8"/>
    <ellipse cx="210" cy="200" rx="22" ry="28" fill="#1E8449" opacity="0.85"/>
    <ellipse cx="197" cy="195" rx="14" ry="18" fill="#239B56" opacity="0.8"/>
    {/* Rug */}
    <ellipse cx="125" cy="195" rx="80" ry="15" fill="#F9EBEA" opacity="0.6"/>
  </svg>
);

const PropertyImage5 = () => (
  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
    <defs>
      <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#87CEEB"/>
        <stop offset="50%" stopColor="#B8E4F7"/>
        <stop offset="100%" stopColor="#E8F6FD"/>
      </linearGradient>
      <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#58D68D"/>
        <stop offset="100%" stopColor="#1E8449"/>
      </linearGradient>
    </defs>
    {/* Sky */}
    <rect width="400" height="280" fill="url(#sky5)"/>
    {/* Clouds */}
    <ellipse cx="100" cy="35" rx="45" ry="20" fill="white" opacity="0.9"/>
    <ellipse cx="135" cy="28" rx="35" ry="25" fill="white" opacity="0.9"/>
    <ellipse cx="70" cy="40" rx="28" ry="16" fill="white" opacity="0.8"/>
    <ellipse cx="300" cy="50" rx="38" ry="18" fill="white" opacity="0.8"/>
    <ellipse cx="335" cy="44" rx="28" ry="21" fill="white" opacity="0.8"/>
    {/* House */}
    {/* Roof */}
    <polygon points="60,130 200,50 340,130" fill="#C0392B"/>
    <polygon points="60,130 200,50 340,130" fill="none" stroke="#A93226" strokeWidth="3"/>
    {/* Chimney */}
    <rect x="240" y="65" width="25" height="45" fill="#922B21"/>
    {/* House walls */}
    <rect x="75" y="128" width="250" height="110" fill="#FDFEFE"/>
    <rect x="75" y="128" width="250" height="110" fill="none" stroke="#D5D8DC" strokeWidth="2"/>
    {/* Door */}
    <rect x="168" y="185" width="64" height="53" rx="4" fill="#8B4513"/>
    <circle cx="225" cy="212" r="4" fill="#F39C12"/>
    <rect x="168" y="185" width="64" height="53" rx="4" fill="none" stroke="#6B3410" strokeWidth="2"/>
    {/* Windows */}
    <rect x="90" y="148" width="65" height="55" rx="4" fill="#AED6F1" opacity="0.7"/>
    <line x1="122" y1="148" x2="122" y2="203" stroke="#BDC3C7" strokeWidth="3"/>
    <line x1="90" y1="176" x2="155" y2="176" stroke="#BDC3C7" strokeWidth="3"/>
    <rect x="90" y="148" width="65" height="55" rx="4" fill="none" stroke="#D5D8DC" strokeWidth="3"/>
    <rect x="245" y="148" width="65" height="55" rx="4" fill="#AED6F1" opacity="0.7"/>
    <line x1="277" y1="148" x2="277" y2="203" stroke="#BDC3C7" strokeWidth="3"/>
    <line x1="245" y1="176" x2="310" y2="176" stroke="#BDC3C7" strokeWidth="3"/>
    <rect x="245" y="148" width="65" height="55" rx="4" fill="none" stroke="#D5D8DC" strokeWidth="3"/>
    {/* Garden/grass */}
    <rect x="0" y="238" width="400" height="42" fill="url(#grass)"/>
    {/* Fence */}
    {[0,30,60,90,120,150,180,210,240,270,300,330,360].map(x=>(
      <rect key={x} x={x+8} y={225} width="6" height="20" rx="2" fill="#D5D8DC"/>
    ))}
    <rect x="0" y="230" width="400" height="4" fill="#D5D8DC"/>
    {/* Path */}
    <rect x="175" y="238" width="50" height="42" fill="#D7DBDD"/>
    {/* Trees */}
    <rect x="20" y="180" width="12" height="58" fill="#6B3410"/>
    <ellipse cx="26" cy="165" rx="30" ry="35" fill="#27AE60" opacity="0.9"/>
    <ellipse cx="12" cy="172" rx="20" ry="26" fill="#2ECC71" opacity="0.8"/>
    <rect x="355" y="185" width="12" height="53" fill="#6B3410"/>
    <ellipse cx="361" cy="170" rx="28" ry="32" fill="#27AE60" opacity="0.9"/>
    <ellipse cx="375" cy="176" rx="18" ry="24" fill="#2ECC71" opacity="0.7"/>
    {/* BBQ */}
    <rect x="300" y="215" width="35" height="20" rx="3" fill="#566573"/>
    <rect x="305" y="205" width="25" height="12" rx="2" fill="#2C3E50"/>
    <rect x="310" y="235" width="5" height="15" rx="1" fill="#566573"/>
    <rect x="325" y="235" width="5" height="15" rx="1" fill="#566573"/>
    {/* Smoke from BBQ */}
    <path d="M315 200 Q318 190 315 180 Q312 170 315 160" fill="none" stroke="#BDC3C7" strokeWidth="3" opacity="0.5"/>
    <path d="M322 198 Q325 186 322 176" fill="none" stroke="#BDC3C7" strokeWidth="2" opacity="0.4"/>
  </svg>
);

const SCENE_COMPONENTS = [PropertyImage1, PropertyImage2, PropertyImage3, PropertyImage4, PropertyImage5];

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const PROPERTIES = [
  {
    id: 1,
    title: "Loft Industrial Soho",
    price: "$1,850/mes",
    location: "Palermo Soho, CABA",
    rooms: 2, baths: 1, sqm: 75,
    sceneIndex: 0,
    tags: ["Luminoso", "Piso alto", "Expensas incl."],
    matches: 34,
    description: "Espectacular loft de estilo industrial en el corazón de Palermo Soho. Techos de 4 metros, vigas de hierro expuestas y amplios ventanales que inundan el espacio de luz natural. Ideal para profesionales creativos que buscan un ambiente único y diferente.",
    amenities: ["Wi-Fi incluido","Aire acondicionado","Lavarropas","Cocina equipada","Seguridad 24hs","Baulera"],
    owner: { name: "Martín Gutiérrez", rating: 4.9, reviews: 23, response: "Responde en < 1 hora" },
    aiAnswers: {
      mascotas: "¡Sí se aceptan mascotas! Hasta dos animales pequeños (menos de 10kg). Hay un parque a media cuadra ideal para paseos. 🐾",
      barrio: "Palermo Soho es uno de los barrios más buscados de Buenos Aires. A pasos del Botánico, Malba y los mejores restaurantes. Muy seguro y con mucho movimiento cultural.",
      expensas: "Las expensas están incluidas en el precio. Cubren agua, gas y limpieza de áreas comunes. Solo abonás electricidad aparte.",
    },
  },
  {
    id: 2,
    title: "Penthouse con Terraza",
    price: "$3,200/mes",
    location: "Puerto Madero, CABA",
    rooms: 3, baths: 2, sqm: 140,
    sceneIndex: 1,
    tags: ["Terraza propia", "Vista al río", "Cochera"],
    matches: 89,
    description: "El penthouse más exclusivo de Puerto Madero. Terraza privada de 80m² con vista panorámica al Río de la Plata y la Reserva Ecológica. Acabados de primer nivel, cocina de diseño y amenities de categoría. Una experiencia de vida sin igual.",
    amenities: ["Piscina","Gimnasio","SUM","Seguridad 24hs","Cochera doble","Smart home"],
    owner: { name: "Valeria Ríos", rating: 5.0, reviews: 41, response: "Responde en < 30 min" },
    aiAnswers: {
      mascotas: "Este edificio no acepta mascotas por reglamento de copropiedad. Pero el Dique 3 tiene una franja verde enorme a pasos del edificio. 🏙️",
      barrio: "Puerto Madero es la zona más exclusiva de Buenos Aires. Acceso directo a la Reserva Ecológica, restaurantes de primer nivel y a minutos del microcentro.",
      expensas: "Las expensas son $180.000/mes e incluyen seguridad 24hs, gimnasio, piscina y salón de usos múltiples.",
    },
  },
  {
    id: 3,
    title: "Departamento Vintage",
    price: "$1,100/mes",
    location: "San Telmo, CABA",
    rooms: 1, baths: 1, sqm: 48,
    sceneIndex: 2,
    tags: ["Patio compartido", "Edificio histórico", "Amoblado"],
    matches: 21,
    description: "Departamento con alma en uno de los edificios históricos más emblemáticos de San Telmo. Techos altos, molduras originales y piso de parquet centenario. Viene totalmente amoblado con piezas de anticuario y acceso al patio compartido con jardín.",
    amenities: ["Amoblado completo","Patio compartido","Wi-Fi","Calefacción central","Baulera","Bicicleta incluida"],
    owner: { name: "Roberto Alzaga", rating: 4.7, reviews: 15, response: "Responde en < 3 horas" },
    aiAnswers: {
      mascotas: "Se aceptan gatos, pero no perros. El patio compartido es amplio y tranquilo, ideal para que el gato disfrute al aire libre. 🐱",
      barrio: "San Telmo es el barrio más bohemio de BA. Mercado de antigüedades los domingos, bares de tango, gastronomía diversa.",
      expensas: "Expensas de $45.000/mes que cubren limpieza general y mantenimiento del patio. El edificio tiene 90 años pero está muy bien conservado.",
    },
  },
  {
    id: 4,
    title: "Monoambiente Moderno",
    price: "$950/mes",
    location: "Villa Crespo, CABA",
    rooms: 1, baths: 1, sqm: 38,
    sceneIndex: 3,
    tags: ["Cocina integrada", "Balcón", "A estrenar"],
    matches: 15,
    description: "Flamante monoambiente a estrenar en edificio boutique de Villa Crespo. Diseño inteligente que aprovecha cada metro cuadrado. Cocina integrada de última generación, balcón con vista abierta y termotanque de bajo consumo. Ideal para pareja o profesional.",
    amenities: ["A estrenar","Balcón","Aire acondicionado","Cocina nueva","Lavarropas","Bicicleta parking"],
    owner: { name: "Lucía Ferreyra", rating: 4.8, reviews: 8, response: "Responde en < 2 horas" },
    aiAnswers: {
      mascotas: "¡Sí, se aceptan mascotas! El propietario tiene un perro también, así que es muy comprensivo. El barrio tiene varias veterinarias y tiendas de mascotas cerca. 🐶",
      barrio: "Villa Crespo está en pleno auge. Limítrofe con Palermo, tiene mucho verde y muy buen acceso en subte (línea B).",
      expensas: "Expensas de $30.000/mes. El edificio es de 2023, así que los costos de mantenimiento son muy bajos todavía.",
    },
  },
  {
    id: 5,
    title: "Casa con Jardín",
    price: "$2,400/mes",
    location: "Nuñez, CABA",
    rooms: 4, baths: 2, sqm: 180,
    sceneIndex: 4,
    tags: ["Jardín 60m²", "Parrilla", "Garage doble"],
    matches: 52,
    description: "Casa familiar con jardín propio en Nuñez, el barrio más tranquilo del norte porteño. Cuatro ambientes amplios con terminaciones de calidad, jardín parquizado, parrilla y garage doble. A pasos del Parque Sarmiento y con excelentes colegios en la zona.",
    amenities: ["Jardín 60m²","Parrilla","Garage doble","Quincho","Alarma","Aire central"],
    owner: { name: "Diego Morales", rating: 4.6, reviews: 31, response: "Responde en < 1 día" },
    aiAnswers: {
      mascotas: "¡Esta es la propiedad ideal para mascotas! Jardín propio de 60m² completamente cercado. Se aceptan perros de cualquier tamaño. 🏡",
      barrio: "Nuñez es un barrio residencial y tranquilo en el norte de la ciudad. Colegios de primer nivel y Parque Sarmiento al lado.",
      expensas: "Al ser una casa, no hay consorcio. Solo abonás ABL municipal (aprox. $8.000/mes). Los servicios a cargo del inquilino.",
    },
  },
];

const AI_QUESTIONS = [
  { key: "mascotas", label: "¿Se aceptan mascotas? 🐾" },
  { key: "barrio",   label: "¿Cómo es el barrio? 🏘️" },
  { key: "expensas", label: "¿Cuánto son las expensas? 💰" },
];

// ─── ICONS ────────────────────────────────────────────────────────────────────
const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.2" style={{width:22,height:22}}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const XCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:22,height:22}}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18}}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/><path d="M12 7v4"/>
    <circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:13,height:13}}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
  </svg>
);
const DropIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);
const MaxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
    <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
    <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
  </svg>
);
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:20,height:20}}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:20,height:20}}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:18,height:18}}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ─── COLORS ───────────────────────────────────────────────────────────────────
const C = {
  bg:       "#F7F5F2",
  surface:  "#FFFFFF",
  card:     "#FFFFFF",
  border:   "#E8E4DF",
  text:     "#1A1A1A",
  muted:    "#8B8480",
  faint:    "#C8C3BD",
  accent:   "#E8572A",   // warm coral-orange
  accentL:  "#FF7A50",
  green:    "#2ECC8A",
  shadow:   "rgba(60,40,20,0.10)",
  shadowM:  "rgba(60,40,20,0.18)",
};

// ─── SWIPE CARD ───────────────────────────────────────────────────────────────
function SwipeCard({ property, onSwipe, onOpen, isTop, index }) {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showAI, setShowAI] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: `¡Hola! 👋 Soy el asistente de "${property.title}". ¿Qué querés saber?` }
  ]);
  const [typing, setTyping] = useState(false);
  const startPos = useRef(null);

  const handleStart = useCallback((cx, cy) => {
    if (!isTop) return;
    startPos.current = { x: cx, y: cy };
    setDragging(true);
  }, [isTop]);

  const handleMove = useCallback((cx, cy) => {
    if (!dragging || !startPos.current) return;
    setOffset({ x: cx - startPos.current.x, y: (cy - startPos.current.y) * 0.25 });
  }, [dragging]);

  const handleEnd = useCallback(() => {
    if (!dragging) return;
    setDragging(false);
    const dist = Math.sqrt(offset.x ** 2 + offset.y ** 2);
    if (Math.abs(offset.x) > 85) {
      onSwipe(property.id, offset.x > 0 ? "right" : "left");
    } else if (dist < 8 && isTop) {
      setOffset({ x: 0, y: 0 });
      onOpen(property);
    } else {
      setOffset({ x: 0, y: 0 });
    }
    startPos.current = null;
  }, [dragging, offset, onSwipe, onOpen, property, isTop]);

  const rot = offset.x / 18;
  const likeOp = Math.min(Math.max(offset.x / 75, 0), 1);
  const nopeOp = Math.min(Math.max(-offset.x / 75, 0), 1);
  const scale = isTop ? 1 : index === 1 ? 0.95 : 0.90;
  const ty = isTop ? (dragging ? offset.y : 0) : index === 1 ? 16 : 30;

  const askAI = (key) => {
    const q = AI_QUESTIONS.find(a => a.key === key);
    setMessages(prev => [...prev, { from: "user", text: q.label }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: property.aiAnswers[key] }]);
      setTyping(false);
    }, 850);
  };

  return (
    <>
      <div
        onMouseDown={isTop ? (e) => { e.preventDefault(); handleStart(e.clientX, e.clientY); } : undefined}
        onMouseMove={isTop ? (e) => handleMove(e.clientX, e.clientY) : undefined}
        onMouseUp={isTop ? handleEnd : undefined}
        onMouseLeave={isTop && dragging ? handleEnd : undefined}
        onTouchStart={isTop ? (e) => { const t = e.touches[0]; handleStart(t.clientX, t.clientY); } : undefined}
        onTouchMove={isTop ? (e) => { const t = e.touches[0]; handleMove(t.clientX, t.clientY); } : undefined}
        onTouchEnd={isTop ? handleEnd : undefined}
        style={{
          position: "absolute", width: "100%",
          cursor: isTop ? (dragging ? "grabbing" : "grab") : "default",
          transform: `translateX(${offset.x}px) translateY(${ty}px) rotate(${rot}deg) scale(${scale})`,
          transition: dragging ? "none" : "transform 0.38s cubic-bezier(0.34,1.56,0.64,1)",
          zIndex: 10 - index,
          userSelect: "none", touchAction: "none",
        }}
      >
        <div style={{
          borderRadius: 24,
          overflow: "hidden",
          background: C.card,
          boxShadow: isTop
            ? `0 8px 40px ${C.shadowM}, 0 2px 8px ${C.shadow}`
            : `0 4px 20px ${C.shadow}`,
          border: `1px solid ${C.border}`,
        }}>
          {/* Photo */}
          <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
            {(() => { const Scene = SCENE_COMPONENTS[property.sceneIndex]; return <Scene/>; })()}
            {/* soft bottom fade */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 45%, transparent 100%)"
            }}/>

            {/* Stamps */}
            <div style={{ position:"absolute", top:20, left:18, opacity: likeOp,
              transform: `rotate(-14deg) scale(${0.7 + likeOp*0.3})`, transition:"none" }}>
              <div style={{ border: `3px solid ${C.green}`, borderRadius:10, padding:"5px 14px",
                color: C.green, fontWeight:800, fontSize:22, letterSpacing:2,
                background:"rgba(255,255,255,0.85)", backdropFilter:"blur(4px)" }}>MATCH</div>
            </div>
            <div style={{ position:"absolute", top:20, right:18, opacity: nopeOp,
              transform: `rotate(14deg) scale(${0.7 + nopeOp*0.3})`, transition:"none" }}>
              <div style={{ border:`3px solid ${C.accent}`, borderRadius:10, padding:"5px 14px",
                color: C.accent, fontWeight:800, fontSize:22, letterSpacing:2,
                background:"rgba(255,255,255,0.85)", backdropFilter:"blur(4px)" }}>NOPE</div>
            </div>

            {/* Price badge */}
            <div style={{
              position:"absolute", top:16, right: nopeOp > 0.1 ? 80 : 16,
              background: C.accent,
              borderRadius:12, padding:"6px 13px",
              color:"#fff", fontWeight:800, fontSize:14,
              boxShadow:`0 4px 14px rgba(232,87,42,0.35)`,
              transition: "right 0.15s"
            }}>{property.price}</div>

            {/* Tags */}
            <div style={{ position:"absolute", bottom:14, left:14, display:"flex", gap:6, flexWrap:"wrap" }}>
              {property.tags.map(tag => (
                <span key={tag} style={{
                  background:"rgba(255,255,255,0.88)", backdropFilter:"blur(6px)",
                  border:`1px solid ${C.border}`,
                  color: C.text, fontSize:11, padding:"4px 10px",
                  borderRadius:20, fontWeight:600
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Info */}
          <div style={{ padding:"16px 18px 18px" }}>
            <div style={{ marginBottom:10 }}>
              <h2 style={{ color:C.text, fontSize:19, fontWeight:800, margin:0, lineHeight:1.2 }}>{property.title}</h2>
              <div style={{ display:"flex", alignItems:"center", gap:4, color:C.muted, fontSize:13, marginTop:4 }}>
                <PinIcon/>{property.location}
              </div>
            </div>

            <div style={{ display:"flex", gap:18, marginBottom:14, color:C.muted, fontSize:13 }}>
              <span style={{ display:"flex", alignItems:"center", gap:5 }}><BedIcon/>{property.rooms} amb.</span>
              <span style={{ display:"flex", alignItems:"center", gap:5 }}><DropIcon/>{property.baths} baño{property.baths>1?"s":""}</span>
              <span style={{ display:"flex", alignItems:"center", gap:5 }}><MaxIcon/>{property.sqm}m²</span>
            </div>

            {isTop && (
              <button
                onMouseDown={e => e.stopPropagation()}
                onTouchStart={e => { e.stopPropagation(); setShowAI(true); }}
                onClick={() => setShowAI(true)}
                style={{
                  width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                  background:`rgba(232,87,42,0.07)`, border:`1.5px solid rgba(232,87,42,0.25)`,
                  borderRadius:12, padding:"10px 16px", cursor:"pointer",
                  color: C.accent, fontWeight:700, fontSize:14,
                  transition:"all 0.2s"
                }}
              >
                <BotIcon/> Preguntar a la IA
              </button>
            )}
          </div>
        </div>
      </div>

      {/* AI Modal */}
      {showAI && (
        <div
          style={{
            position:"fixed", inset:0, zIndex:100,
            background:"rgba(30,20,10,0.45)", backdropFilter:"blur(6px)",
            display:"flex", alignItems:"flex-end", justifyContent:"center"
          }}
          onClick={() => setShowAI(false)}
        >
          <div
            style={{
              width:"100%", maxWidth:440,
              background:C.surface,
              borderRadius:"24px 24px 0 0",
              border:`1px solid ${C.border}`,
              paddingBottom:24,
              maxHeight:"72vh",
              display:"flex", flexDirection:"column",
              boxShadow:`0 -16px 60px ${C.shadowM}`,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding:"14px 18px 12px",
              borderBottom:`1px solid ${C.border}`,
              display:"flex", alignItems:"center", justifyContent:"space-between"
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{
                  width:38, height:38, borderRadius:"50%",
                  background:`linear-gradient(135deg, ${C.accent}, ${C.accentL})`,
                  display:"flex", alignItems:"center", justifyContent:"center", color:"#fff"
                }}><BotIcon/></div>
                <div>
                  <div style={{ color:C.text, fontWeight:800, fontSize:15 }}>Asistente Muvit</div>
                  <div style={{ color:C.green, fontSize:11, display:"flex", alignItems:"center", gap:4, fontWeight:600 }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:C.green, display:"inline-block" }}/>
                    En línea
                  </div>
                </div>
              </div>
              <button onClick={() => setShowAI(false)} style={{
                background:"none", border:`1px solid ${C.border}`, borderRadius:10,
                padding:"6px 8px", cursor:"pointer", color:C.muted, display:"flex"
              }}><CloseIcon/></button>
            </div>

            {/* Messages */}
            <div style={{ flex:1, overflowY:"auto", padding:"14px 18px", display:"flex", flexDirection:"column", gap:10 }}>
              {messages.map((m, i) => (
                <div key={i} style={{ display:"flex", justifyContent: m.from==="user"?"flex-end":"flex-start" }}>
                  <div style={{
                    maxWidth:"80%", padding:"10px 14px",
                    borderRadius: m.from==="user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background: m.from==="user" ? `linear-gradient(135deg,${C.accent},${C.accentL})` : C.bg,
                    color: m.from==="user" ? "#fff" : C.text,
                    fontSize:14, lineHeight:1.55,
                    border: m.from==="user" ? "none" : `1px solid ${C.border}`
                  }}>{m.text}</div>
                </div>
              ))}
              {typing && (
                <div style={{ display:"flex", gap:5, padding:"10px 14px",
                  background:C.bg, borderRadius:"18px 18px 18px 4px", width:"fit-content",
                  border:`1px solid ${C.border}` }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{
                      width:7, height:7, borderRadius:"50%", background:C.faint,
                      animation:"bup 1.2s infinite", animationDelay:`${i*0.2}s`
                    }}/>
                  ))}
                </div>
              )}
            </div>

            {/* Quick buttons */}
            <div style={{ padding:"0 16px", display:"flex", flexDirection:"column", gap:8 }}>
              <div style={{ color:C.faint, fontSize:11, fontWeight:600, paddingLeft:4, letterSpacing:"0.5px", textTransform:"uppercase" }}>
                Preguntas frecuentes
              </div>
              {AI_QUESTIONS.map(q => (
                <button key={q.key} onClick={() => askAI(q.key)} style={{
                  background:C.bg, border:`1.5px solid ${C.border}`,
                  borderRadius:12, padding:"10px 14px", color:C.text,
                  fontSize:13, cursor:"pointer", textAlign:"left",
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                  fontWeight:600
                }}>
                  {q.label}
                  <span style={{ color:C.accent }}><SendIcon/></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bup { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
      `}</style>
    </>
  );
}

// ─── SWIPE SCREEN ─────────────────────────────────────────────────────────────
function SwipeScreen({ onOpen, externalSwipe, onExternalSwipeDone }) {
  const [cards, setCards] = useState(PROPERTIES);
  const [matches, setMatches] = useState([]);

  // Handle swipe triggered from detail screen
  useState(() => {});
  if (externalSwipe) {
    const { id, dir } = externalSwipe;
    onExternalSwipeDone();
    setCards(prev => prev.filter(p => p.id !== id));
    if (dir === "right") setMatches(prev => [...prev, PROPERTIES.find(p => p.id === id)]);
  }

  const handleSwipe = useCallback((id, dir) => {
    setTimeout(() => {
      setCards(prev => prev.filter(p => p.id !== id));
      if (dir === "right") setMatches(prev => [...prev, PROPERTIES.find(p => p.id === id)]);
    }, 320);
  }, []);

  const doButton = (dir) => {
    if (!cards.length) return;
    handleSwipe(cards[0].id, dir);
  };

  if (!cards.length) return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      padding:"40px 24px", textAlign:"center", background:C.bg }}>
      <div style={{ fontSize:60, marginBottom:18 }}>🏡</div>
      <h2 style={{ color:C.text, fontSize:22, fontWeight:800, marginBottom:8 }}>¡Eso es todo!</h2>
      <p style={{ color:C.muted, fontSize:14, marginBottom:24 }}>Revisaste todas las propiedades disponibles.</p>
      {matches.length > 0 && (
        <div style={{ background:`rgba(46,204,138,0.08)`, border:`1.5px solid rgba(46,204,138,0.3)`,
          borderRadius:16, padding:"16px 28px" }}>
          <div style={{ color:C.green, fontWeight:800, fontSize:20 }}>✨ {matches.length} Match{matches.length>1?"es":""}</div>
          <div style={{ color:C.muted, fontSize:13, marginTop:4 }}>El propietario fue notificado de tu interés</div>
        </div>
      )}
      <button onClick={() => { setCards(PROPERTIES); setMatches([]); }} style={{
        marginTop:24, background:`linear-gradient(135deg,${C.accent},${C.accentL})`,
        border:"none", borderRadius:14, padding:"13px 32px",
        color:"#fff", fontWeight:800, fontSize:15, cursor:"pointer",
        boxShadow:`0 6px 20px rgba(232,87,42,0.3)`
      }}>Ver de nuevo</button>
    </div>
  );

  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", padding:16, background:C.bg }}>
      {/* Stats */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
        <div style={{ display:"flex", gap:8 }}>
          <Pill color={C.accent} bg="rgba(232,87,42,0.08)" border="rgba(232,87,42,0.2)">
            {PROPERTIES.length - cards.length} vistos
          </Pill>
          <Pill color={C.green} bg="rgba(46,204,138,0.08)" border="rgba(46,204,138,0.25)">
            ❤️ {matches.length} matches
          </Pill>
        </div>
        <span style={{ color:C.faint, fontSize:13 }}>{cards.length} restantes</span>
      </div>

      {/* Stack */}
      <div style={{ position:"relative", flex:1, display:"flex", alignItems:"center" }}>
        {cards.slice(0, 3).map((p, i) => (
          <SwipeCard key={p.id} property={p} onSwipe={handleSwipe} onOpen={onOpen} isTop={i===0} index={i}/>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display:"flex", justifyContent:"center", gap:22, padding:"20px 0 6px", position:"relative", zIndex:20 }}>
        <button onClick={() => doButton("left")} style={{
          width:60, height:60, borderRadius:"50%",
          background:C.surface, border:`2px solid ${C.border}`,
          color:C.accent, cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:`0 4px 16px ${C.shadow}`,
          transition:"transform 0.15s, box-shadow 0.15s"
        }}><XCircle/></button>
        <button onClick={() => doButton("right")} style={{
          width:70, height:70, borderRadius:"50%",
          background:`linear-gradient(135deg,${C.accent},${C.accentL})`,
          border:"none", color:"#fff", cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:`0 8px 28px rgba(232,87,42,0.35)`,
          transition:"transform 0.15s, box-shadow 0.15s"
        }}><HeartIcon filled/></button>
      </div>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard() {
  const total = PROPERTIES.reduce((a, p) => a + p.matches, 0);
  const top = [...PROPERTIES].sort((a, b) => b.matches - a.matches)[0];

  return (
    <div style={{ flex:1, overflowY:"auto", padding:16, background:C.bg }}>
      <h1 style={{ color:C.text, fontSize:21, fontWeight:800, marginBottom:2 }}>Panel del Propietario</h1>
      <p style={{ color:C.muted, fontSize:13, marginBottom:18 }}>Seguí el interés en tus propiedades</p>

      {/* Stat cards */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
        {[
          { label:"Total Matches", value:total, color:C.accent, bg:`rgba(232,87,42,0.07)`, border:`rgba(232,87,42,0.2)` },
          { label:"Propiedades", value:PROPERTIES.length, color:"#3B82F6", bg:"rgba(59,130,246,0.07)", border:"rgba(59,130,246,0.2)" },
        ].map(s => (
          <div key={s.label} style={{ background:s.bg, border:`1.5px solid ${s.border}`,
            borderRadius:16, padding:16 }}>
            <div style={{ color:s.color, fontSize:30, fontWeight:800 }}>{s.value}</div>
            <div style={{ color:C.muted, fontSize:12, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Top performer */}
      <div style={{ background:`linear-gradient(135deg,rgba(232,87,42,0.06),rgba(255,122,80,0.04))`,
        border:`1.5px solid rgba(232,87,42,0.15)`, borderRadius:16,
        padding:"12px 16px", marginBottom:18,
        display:"flex", alignItems:"center", gap:12 }}>
        <div style={{ fontSize:28 }}>🏆</div>
        <div>
          <div style={{ color:C.accent, fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase" }}>Más popular</div>
          <div style={{ color:C.text, fontSize:15, fontWeight:800 }}>{top.title}</div>
          <div style={{ color:C.muted, fontSize:12 }}>{top.matches} matches este mes</div>
        </div>
      </div>

      {/* List */}
      <div style={{ color:C.faint, fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase",
        marginBottom:10 }}>Mis propiedades</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10, paddingBottom:8 }}>
        {PROPERTIES.map(prop => {
          const pct = Math.round((prop.matches / total) * 100);
          return (
            <div key={prop.id} style={{ background:C.surface, border:`1px solid ${C.border}`,
              borderRadius:16, padding:14, display:"flex", gap:12,
              boxShadow:`0 2px 8px ${C.shadow}` }}>
              <div style={{ width:58, height:58, borderRadius:12, overflow:"hidden", flexShrink:0 }}>
                {(() => { const Scene = SCENE_COMPONENTS[prop.sceneIndex]; return <Scene/>; })()}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <div style={{ color:C.text, fontWeight:800, fontSize:14,
                    overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"62%" }}>
                    {prop.title}
                  </div>
                  <div style={{ color:C.accent, fontWeight:800, fontSize:15, flexShrink:0 }}>
                    ❤️ {prop.matches}
                  </div>
                </div>
                <div style={{ color:C.muted, fontSize:12, margin:"2px 0 8px" }}>{prop.location}</div>
                <div style={{ background:C.bg, borderRadius:4, height:5, overflow:"hidden" }}>
                  <div style={{
                    height:"100%", borderRadius:4, width:`${pct}%`,
                    background:`linear-gradient(90deg,${C.accent},${C.accentL})`,
                    transition:"width 0.6s ease"
                  }}/>
                </div>
                <div style={{ color:C.faint, fontSize:11, marginTop:3 }}>{pct}% del interés total</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── PROPERTY DETAIL ─────────────────────────────────────────────────────────
function PropertyDetail({ property, onClose, onSwipe }) {
  const [visible, setVisible] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: `¡Hola! 👋 Soy el asistente de "${property.title}". ¿Qué querés saber?` }
  ]);
  const [typing, setTyping] = useState(false);

  useState(() => { requestAnimationFrame(() => setVisible(true)); });

  const close = () => { setVisible(false); setTimeout(onClose, 320); };

  const handleAction = (dir) => {
    close();
    setTimeout(() => onSwipe(property.id, dir), 200);
  };

  const askAI = (key) => {
    const q = AI_QUESTIONS.find(a => a.key === key);
    setMessages(prev => [...prev, { from: "user", text: q.label }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: property.aiAnswers[key] }]);
      setTyping(false);
    }, 850);
  };

  const Scene = SCENE_COMPONENTS[property.sceneIndex];

  const AMENITY_ICONS = { "Wi-Fi incluido":"📶","Wi-Fi":"📶","Aire acondicionado":"❄️","Lavarropas":"🫧","Cocina equipada":"🍳","Cocina nueva":"🍳","Seguridad 24hs":"🔒","Baulera":"📦","Piscina":"🏊","Gimnasio":"💪","SUM":"🎉","Cochera doble":"🚗","Smart home":"🏠","Amoblado completo":"🛋️","Patio compartido":"🌿","Calefacción central":"🔥","Bicicleta incluida":"🚲","Bicicleta parking":"🚲","Balcón":"🌆","A estrenar":"✨","Jardín 60m²":"🌳","Parrilla":"🥩","Garage doble":"🚙","Quincho":"🏡","Alarma":"🚨","Aire central":"❄️" };

  return (
    <div style={{
      position:"absolute", inset:0, zIndex:50,
      transform: visible ? "translateX(0)" : "translateX(100%)",
      transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
      background: C.bg,
      display:"flex", flexDirection:"column",
      overflow:"hidden",
    }}>
      {/* Header */}
      <div style={{
        display:"flex", alignItems:"center", gap:12,
        padding:"14px 16px 12px",
        background:C.surface, borderBottom:`1px solid ${C.border}`,
        flexShrink:0
      }}>
        <button onClick={close} style={{
          width:36, height:36, borderRadius:12,
          background:C.bg, border:`1px solid ${C.border}`,
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor:"pointer", color:C.text, flexShrink:0
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:18,height:18}}>
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div style={{ flex:1 }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:16, lineHeight:1.2 }}>{property.title}</div>
          <div style={{ color:C.muted, fontSize:12, display:"flex", alignItems:"center", gap:3, marginTop:2 }}>
            <PinIcon/>{property.location}
          </div>
        </div>
        <div style={{
          background:C.accent, borderRadius:12, padding:"6px 12px",
          color:"#fff", fontWeight:800, fontSize:14, flexShrink:0
        }}>{property.price}</div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex:1, overflowY:"auto" }}>
        {/* Hero illustration */}
        <div style={{ height:220, overflow:"hidden", position:"relative" }}>
          <Scene/>
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(to top, rgba(247,245,242,0.8) 0%, transparent 60%)"
          }}/>
        </div>

        <div style={{ padding:"0 16px 24px" }}>
          {/* Stats row */}
          <div style={{
            display:"flex", gap:10, marginTop:16, marginBottom:18
          }}>
            {[
              { icon:<BedIcon/>, label:`${property.rooms} ambientes` },
              { icon:<DropIcon/>, label:`${property.baths} baño${property.baths>1?"s":""}` },
              { icon:<MaxIcon/>, label:`${property.sqm} m²` },
            ].map((s,i) => (
              <div key={i} style={{
                flex:1, background:C.surface, border:`1px solid ${C.border}`,
                borderRadius:14, padding:"10px 8px",
                display:"flex", flexDirection:"column", alignItems:"center", gap:5,
                boxShadow:`0 2px 6px ${C.shadow}`
              }}>
                <span style={{ color:C.accent }}>{s.icon}</span>
                <span style={{ color:C.text, fontSize:12, fontWeight:700, textAlign:"center" }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:18 }}>
            {property.tags.map(tag => (
              <span key={tag} style={{
                background:`rgba(232,87,42,0.08)`, border:`1.5px solid rgba(232,87,42,0.2)`,
                color:C.accent, fontSize:12, padding:"5px 12px", borderRadius:20, fontWeight:700
              }}>{tag}</span>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom:20 }}>
            <div style={{ color:C.text, fontSize:13, fontWeight:700, marginBottom:8, textTransform:"uppercase", letterSpacing:"0.8px", color:C.muted }}>Descripción</div>
            <p style={{ color:C.text, fontSize:14, lineHeight:1.65, margin:0 }}>{property.description}</p>
          </div>

          {/* Amenities */}
          <div style={{ marginBottom:20 }}>
            <div style={{ color:C.muted, fontSize:13, fontWeight:700, marginBottom:10, textTransform:"uppercase", letterSpacing:"0.8px" }}>Comodidades</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {property.amenities.map(a => (
                <div key={a} style={{
                  background:C.surface, border:`1px solid ${C.border}`,
                  borderRadius:12, padding:"9px 12px",
                  display:"flex", alignItems:"center", gap:8,
                  fontSize:13, color:C.text, fontWeight:600,
                  boxShadow:`0 1px 4px ${C.shadow}`
                }}>
                  <span style={{fontSize:16}}>{AMENITY_ICONS[a] || "✅"}</span>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Owner */}
          <div style={{ marginBottom:20 }}>
            <div style={{ color:C.muted, fontSize:13, fontWeight:700, marginBottom:10, textTransform:"uppercase", letterSpacing:"0.8px" }}>Propietario</div>
            <div style={{
              background:C.surface, border:`1px solid ${C.border}`,
              borderRadius:16, padding:"14px",
              display:"flex", alignItems:"center", gap:12,
              boxShadow:`0 2px 8px ${C.shadow}`
            }}>
              <div style={{
                width:46, height:46, borderRadius:"50%",
                background:`linear-gradient(135deg,${C.accent},${C.accentL})`,
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"#fff", fontSize:18, fontWeight:800, flexShrink:0
              }}>
                {property.owner.name[0]}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ color:C.text, fontWeight:800, fontSize:15 }}>{property.owner.name}</div>
                <div style={{ display:"flex", gap:8, marginTop:3, alignItems:"center" }}>
                  <span style={{ color:"#F59E0B", fontSize:12, fontWeight:700 }}>★ {property.owner.rating}</span>
                  <span style={{ color:C.faint, fontSize:12 }}>·</span>
                  <span style={{ color:C.muted, fontSize:12 }}>{property.owner.reviews} reseñas</span>
                </div>
                <div style={{ color:C.green, fontSize:11, fontWeight:700, marginTop:2 }}>
                  ⚡ {property.owner.response}
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant button */}
          <button onClick={() => setShowAI(true)} style={{
            width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            background:`rgba(232,87,42,0.07)`, border:`1.5px solid rgba(232,87,42,0.25)`,
            borderRadius:14, padding:"12px 16px", cursor:"pointer",
            color:C.accent, fontWeight:700, fontSize:14, marginBottom:8
          }}>
            <BotIcon/> Preguntar a la IA sobre esta propiedad
          </button>
        </div>
      </div>

      {/* Bottom action bar */}
      <div style={{
        display:"flex", gap:12, padding:"12px 16px 16px",
        background:C.surface, borderTop:`1px solid ${C.border}`,
        flexShrink:0, boxShadow:`0 -2px 16px ${C.shadow}`
      }}>
        <button onClick={() => handleAction("left")} style={{
          flex:1, padding:"13px", borderRadius:14,
          background:C.bg, border:`2px solid ${C.border}`,
          color:C.muted, fontWeight:700, fontSize:14, cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center", gap:8
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:18,height:18}}>
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          Pasar
        </button>
        <button onClick={() => handleAction("right")} style={{
          flex:2, padding:"13px", borderRadius:14,
          background:`linear-gradient(135deg,${C.accent},${C.accentL})`,
          border:"none", color:"#fff", fontWeight:800, fontSize:15, cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center", gap:8,
          boxShadow:`0 6px 20px rgba(232,87,42,0.35)`
        }}>
          <HeartIcon filled/> Me interesa
        </button>
      </div>

      {/* AI Chat Modal */}
      {showAI && (
        <div style={{
          position:"absolute", inset:0, zIndex:60,
          background:"rgba(30,20,10,0.45)", backdropFilter:"blur(6px)",
          display:"flex", alignItems:"flex-end"
        }} onClick={() => setShowAI(false)}>
          <div style={{
            width:"100%", background:C.surface,
            borderRadius:"24px 24px 0 0", border:`1px solid ${C.border}`,
            paddingBottom:24, maxHeight:"70vh",
            display:"flex", flexDirection:"column",
            boxShadow:`0 -16px 60px ${C.shadowM}`
          }} onClick={e => e.stopPropagation()}>
            <div style={{ padding:"14px 18px 12px", borderBottom:`1px solid ${C.border}`,
              display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:38, height:38, borderRadius:"50%",
                  background:`linear-gradient(135deg,${C.accent},${C.accentL})`,
                  display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>
                  <BotIcon/>
                </div>
                <div>
                  <div style={{ color:C.text, fontWeight:800, fontSize:15 }}>Asistente Muvit</div>
                  <div style={{ color:C.green, fontSize:11, display:"flex", alignItems:"center", gap:4, fontWeight:600 }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:C.green, display:"inline-block" }}/>
                    En línea
                  </div>
                </div>
              </div>
              <button onClick={() => setShowAI(false)} style={{
                background:"none", border:`1px solid ${C.border}`, borderRadius:10,
                padding:"6px 8px", cursor:"pointer", color:C.muted, display:"flex" }}>
                <CloseIcon/>
              </button>
            </div>
            <div style={{ flex:1, overflowY:"auto", padding:"14px 18px", display:"flex", flexDirection:"column", gap:10 }}>
              {messages.map((m,i) => (
                <div key={i} style={{ display:"flex", justifyContent:m.from==="user"?"flex-end":"flex-start" }}>
                  <div style={{ maxWidth:"80%", padding:"10px 14px",
                    borderRadius:m.from==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",
                    background:m.from==="user"?`linear-gradient(135deg,${C.accent},${C.accentL})`:C.bg,
                    color:m.from==="user"?"#fff":C.text,
                    fontSize:14, lineHeight:1.55,
                    border:m.from==="user"?"none":`1px solid ${C.border}` }}>
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div style={{ display:"flex", gap:5, padding:"10px 14px",
                  background:C.bg, borderRadius:"18px 18px 18px 4px", width:"fit-content",
                  border:`1px solid ${C.border}` }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width:7, height:7, borderRadius:"50%", background:C.faint,
                      animation:"bup 1.2s infinite", animationDelay:`${i*0.2}s` }}/>
                  ))}
                </div>
              )}
            </div>
            <div style={{ padding:"0 16px", display:"flex", flexDirection:"column", gap:8 }}>
              <div style={{ color:C.faint, fontSize:11, fontWeight:600, paddingLeft:4, letterSpacing:"0.5px", textTransform:"uppercase" }}>Preguntas frecuentes</div>
              {AI_QUESTIONS.map(q => (
                <button key={q.key} onClick={() => askAI(q.key)} style={{
                  background:C.bg, border:`1.5px solid ${C.border}`,
                  borderRadius:12, padding:"10px 14px", color:C.text,
                  fontSize:13, cursor:"pointer", textAlign:"left",
                  display:"flex", alignItems:"center", justifyContent:"space-between", fontWeight:600
                }}>
                  {q.label}<span style={{color:C.accent}}><SendIcon/></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PILL ─────────────────────────────────────────────────────────────────────
function Pill({ children, color, bg, border }) {
  return (
    <div style={{ background:bg, border:`1.5px solid ${border}`, borderRadius:10,
      padding:"5px 11px", color, fontSize:13, fontWeight:700 }}>
      {children}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("swipe");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [swipeFromDetail, setSwipeFromDetail] = useState(null);

  const handleSwipeFromDetail = (id, dir) => setSwipeFromDetail({ id, dir });

  return (
    <div style={{
      minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center",
      background:"#EDE9E3",
      fontFamily:"'Georgia', 'Times New Roman', serif"
    }}>
      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:#EDE9E3; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.12); border-radius:2px; }
        button { font-family:inherit; }
        button:hover { opacity:0.88; transform:scale(0.98); }
      `}</style>

      <div style={{
        width:"100%", maxWidth:440,
        height:"100vh", maxHeight:860,
        background:C.bg,
        display:"flex", flexDirection:"column",
        overflow:"hidden",
        border:`1px solid ${C.border}`,
        boxShadow:`0 20px 80px rgba(100,60,20,0.12)`,
        borderRadius:0,
        position:"relative"
      }}>
        {/* Header */}
        <div style={{
          padding:"14px 20px 11px",
          background:C.surface,
          borderBottom:`1px solid ${C.border}`,
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexShrink:0,
          boxShadow:`0 1px 12px rgba(60,40,20,0.06)`
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{
              width:34, height:34, borderRadius:11,
              background:`linear-gradient(135deg,${C.accent},${C.accentL})`,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:17, boxShadow:`0 3px 10px rgba(232,87,42,0.3)`
            }}>🏠</div>
            <div>
              <div style={{ fontSize:21, fontWeight:800, lineHeight:1, color:C.accent, letterSpacing:"-0.5px" }}>muvit</div>
              <div style={{ color:C.faint, fontSize:10, letterSpacing:"1.5px", textTransform:"uppercase", fontWeight:600 }}>
                {tab==="swipe" ? "Explorar" : "Mi cuenta"}
              </div>
            </div>
          </div>
          <div style={{
            background:`rgba(232,87,42,0.08)`, border:`1.5px solid rgba(232,87,42,0.2)`,
            borderRadius:20, padding:"4px 11px",
            color:C.accent, fontSize:12, fontWeight:700
          }}>Buenos Aires 🇦🇷</div>
        </div>

        {/* Content */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden", position:"relative" }}>
          {tab==="swipe"
            ? <SwipeScreen onOpen={setSelectedProperty} externalSwipe={swipeFromDetail} onExternalSwipeDone={() => setSwipeFromDetail(null)}/>
            : <Dashboard/>
          }
          {/* Detail overlay */}
          {selectedProperty && (
            <PropertyDetail
              property={selectedProperty}
              onClose={() => setSelectedProperty(null)}
              onSwipe={(id, dir) => { setSelectedProperty(null); handleSwipeFromDetail(id, dir); }}
            />
          )}
        </div>

        {/* Bottom nav */}
        <div style={{
          display:"flex", background:C.surface,
          borderTop:`1px solid ${C.border}`,
          flexShrink:0,
          boxShadow:`0 -1px 12px rgba(60,40,20,0.06)`
        }}>
          {[
            { id:"swipe", icon:<HomeIcon/>, label:"Explorar" },
            { id:"dashboard", icon:<ChartIcon/>, label:"Dashboard" },
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id)} style={{
              flex:1, display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", gap:4, padding:"11px 0",
              background:"none", border:"none", cursor:"pointer",
              color: tab===item.id ? C.accent : C.faint,
              transition:"color 0.2s", position:"relative"
            }}>
              {tab===item.id && (
                <div style={{
                  position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
                  width:30, height:2.5,
                  background:`linear-gradient(90deg,${C.accent},${C.accentL})`,
                  borderRadius:"0 0 3px 3px"
                }}/>
              )}
              {item.icon}
              <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.3px" }}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
