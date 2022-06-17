import React from 'react';
import Goblin from './Goblin';

export default function GoblinList({ visibleGoblins }) {
  return (
    <div className='goblin-list quarter'>{
      visibleGoblins.map((goblin, i) => <div 
        onClick={() => handleDeleteGoblin(goblin.goblin)} 
        key={goblin.goblin + i}> 
      
    </div>
  )
};