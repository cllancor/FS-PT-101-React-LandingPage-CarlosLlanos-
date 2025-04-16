import react from "react";

const Card = () => {

    return (
        <div className="Card" style= {{width: '18rem'}}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem obcaecati quibusdam doloribus tenetur eligendi odio, similique sint vero, est deleniti quae facilis. Nisi adipisci libero atque molestias earum delectus?</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
        </div>
    )
}

export default Card