import React from 'react';
import { useParams } from 'react-router-dom';

// Importa TODAS tus tiendas aquí
import Jostuna from './Tiendas/jostuna';       // ID 1
import Oinetakoak from './Tiendas/oinetakoak'; // ID 2
import Taller from './Tiendas/taller';         // ID 3
import Txanoak from './Tiendas/txanoak';       // ID 4
import Perfume from './Tiendas/perfume';       // ID 5
import Azoka from './Tiendas/azoka';           // ID 6
import Artisau from './Tiendas/artisau';       // ID 7

function ComercioDispatcher() {
  const { id } = useParams(); // Captura el número de la URL (ej: "1", "2")
  const comercioId = parseInt(id); // Aseguramos que sea número

  // Lógica de selección según tu lista ordenada
  switch (comercioId) {
    case 1:
      return <Jostuna />;
    case 2:
      return <Oinetakoak />;
    case 3:
      return <Taller />;
    case 4:
      return <Txanoak />;
    case 5:
      return <Perfume />;
    case 6:
      return <Azoka />;
    case 7:
      return <Artisau />;
    default:
      return (
        <div className="text-center mt-5">
          <h2>Comercio no encontrado</h2>
          <p>Ez dugu aurkitu bilatzen ari zaren saltokia (ID: {id})</p>
        </div>
      );
  }
}

export default ComercioDispatcher;
