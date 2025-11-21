const Hero = () => {
    return (
        <div className="hero-container" style={{
            backgroundColor: "#fdf0e4",
            padding: "80px 20px",
            textAlign: "center"
        }}>
            <h1 style={{
                fontSize: "42px",
                fontWeight: "700"
            }}>
                Encuentra el restaurante perfecto en <span style={{color: "#ff5722"}}>Bogotá</span>
            </h1>
            
            <p style={{
                fontSize: "18px",
                marginTop: "10px"
            }}>
                Descubre restaurentes por zona, verifica disponibildad en tiempo real y haz reservas al instante
            </p>

        </div>
    );
}

export default Hero;