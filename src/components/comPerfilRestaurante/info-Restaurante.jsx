import Card from 'react-bootstrap/Card'; 
function Info (){
  return(
    <Card>
      <Card.Body>
        <Card.Text>
          <div className='icon-form-overlay'>
            <AiOutlineUser size={15} />
          </div>
            Información del Restaurante
        </Card.Text>
        <Card.Img variant="top" src="holder.js/100px180" />
        
      </Card.Body>
    </Card>
  )
}
export default Info