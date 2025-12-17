import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Button-Tabs.css';

function TabsRestaurante(){
    const [tab, setTab] = useState("perfil");
    const tabs = [
    { name: "Perfil del Restaurante", value: "perfil" },
    { name: "Configuración de Cuenta", value: "cuenta" },
  ];
  
  return (
    <Container className='Card'>
    <div className="tabs-container">
      <ButtonGroup className="tabs-group">
        {tabs.map((t, idx) => (
          <ToggleButton
            key={idx}
            id={`tab-${idx}`}
            type="radio"
            name="tabs"
            value={t.value}
            checked={tab === t.value}
            onChange={(e) => setTab(e.currentTarget.value)}
            variant="light"
            className={`tab-button ${tab === t.value ? "active" : ""}`}
          >
            {t.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
    </Container>
  );
}

export default TabsRestaurante