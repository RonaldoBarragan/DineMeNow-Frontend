import Card from 'react-bootstrap/Card';
import { PiChefHat } from 'react-icons/pi';

export default function Card_info_Chef ({nameRestaurant}) {
  return (
        <>
        <Card className='mb-4'>
            <Card.Body className="d-flex align-items-center gap-2">
                <PiChefHat className="icon-color-AccChef" size={35} />
                <div className="flex-column">
                    <Card.Title className="fw-bold mb-0">Panel de Chef</Card.Title>
                    <Card.Text className="text-left mt-0">De: {nameRestaurant}</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}