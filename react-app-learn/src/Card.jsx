import profilePic from './assets/images/pic.png'

function Card() {

  return (

    <div className="card">
      <img className='card-image' src={profilePic} alt="profile pricture" />
      <h2 className='card-title'> React Practices </h2>
      <p className='card-text'> Learn some new contents in reacts</p>

    </div>

  );
}

export default Card