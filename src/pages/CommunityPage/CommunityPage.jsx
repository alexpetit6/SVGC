import './CommunityPage.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function CommunityPage({ user }) {
  const [editing, setEditing] = useState(false);

  function handleEditing() {
    setEditing(!editing);
  }

  return (

    <>
    <div className="header-img" >
      <img src="https://i.imgur.com/zcyoc9z.jpg)" alt="" />
      <h1 className='header-text'>Community Service</h1>
    </div>
    { user ? <Button id='edit-community-btn' onClick={handleEditing} variant='warning' size='lg'>EDIT</Button> : null }
    <div id='community-body'>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est, voluptatem assumenda ad sequi soluta ducimus sit alias quia deserunt aperiam perferendis omnis molestiae! Hic architecto voluptatibus ullam facilis cumque.
        Sed vel quam in placeat quos exercitationem officiis doloremque earum nostrum minus sequi obcaecati minima inventore hic atque dolorem doloribus deleniti, maxime vero. Iusto hic optio officiis! Architecto, veniam itaque.
        Eaque corrupti animi labore voluptatem id maxime doloribus commodi amet odio tempora? Esse ad sapiente quam animi, amet voluptas nulla, repudiandae ullam provident corporis id eligendi autem illo quibusdam optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est, voluptatem assumenda ad sequi soluta ducimus sit alias quia deserunt aperiam perferendis omnis molestiae! Hic architecto voluptatibus ullam facilis cumque.
        Sed vel quam in placeat quos exercitationem officiis doloremque earum nostrum minus sequi obcaecati minima inventore hic atque dolorem doloribus deleniti, maxime vero. Iusto hic optio officiis! Architecto, veniam itaque.
        Eaque corrupti animi labore voluptatem id maxime doloribus commodi amet odio tempora? Esse ad sapiente quam animi, amet voluptas nulla, repudiandae ullam provident corporis id eligendi autem illo quibusdam optio.
      </p>
      <img src="https://i.imgur.com/IatMLtr.jpg" alt="" />
      <img src="https://i.imgur.com/IatMLtr.jpg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est, voluptatem assumenda ad sequi soluta ducimus sit alias quia deserunt aperiam perferendis omnis molestiae! Hic architecto voluptatibus ullam facilis cumque.
        Sed vel quam in placeat quos exercitationem officiis doloremque earum nostrum minus sequi obcaecati minima inventore hic atque dolorem doloribus deleniti, maxime vero. Iusto hic optio officiis! Architecto, veniam itaque.
        Eaque corrupti animi labore voluptatem id maxime doloribus commodi amet odio tempora? Esse ad sapiente quam animi, amet voluptas nulla, repudiandae ullam provident corporis id eligendi autem illo quibusdam optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est, voluptatem assumenda ad sequi soluta ducimus sit alias quia deserunt aperiam perferendis omnis molestiae! Hic architecto voluptatibus ullam facilis cumque.
        Sed vel quam in placeat quos exercitationem officiis doloremque earum nostrum minus sequi obcaecati minima inventore hic atque dolorem doloribus deleniti, maxime vero. Iusto hic optio officiis! Architecto, veniam itaque.
        Eaque corrupti animi labore voluptatem id maxime doloribus commodi amet odio tempora? Esse ad sapiente quam animi, amet voluptas nulla, repudiandae ullam provident corporis id eligendi autem illo quibusdam optio.
      </p>
    </div>
    </>
  )
}