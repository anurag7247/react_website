import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
const CardNews =({author,urlImage,title,description})=> {
  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
         {description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardNews;