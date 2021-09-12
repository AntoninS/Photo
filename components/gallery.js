import Image from 'next/image'
import styles from './gallery.module.css'

export default function Gallery(props) {
  
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../public/images/', true, /\.(png|jpe?g)$/));
 
  return (
    <>
      {Object.keys(images)
      .filter(image => image.includes(props.theme))
      .map(image => 
        <div className={styles.gallery}>
          <Image src={images[image]} alt="pic" key={image} />
        </div>
      )}
    </>
  )
}