import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default function Card({ image }){
  const tags= image.tags.split(',');
    return(
        <div className='container-fluid col-lg-4 col-md-4'>
          <img src={image.webformatURL} className='photo'/>
          <section>
            <h4>Photo by {image.user}</h4>
            <ul>
              <li>
                <strong>Veiws:</strong>
                {image.views}
              </li>
              <li>
                <strong>Likes:</strong>
                {image.likes}
              </li>
              <li>
                <strong>Downloads:</strong>
                {image.downloads}
              </li>
            </ul>
            <div className='container-fluid'>
              {tags.map(tag=>(
                <span key={image.id} className='tags'>#{tag}</span>))}

            </div>
          </section>
        </div>


    )
}