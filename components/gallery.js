import Image from 'next/image'
import styles from './gallery.module.css'

export default function Gallery(props) {

  console.log(props.folder);
  
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../public/images/overview', false, /\.(png|jpe?g)$/));

  console.log(images);
  
  return (
    <div className={styles.gallery}>
      <Image src={images['gandalf.png']} alt="pic" />
    </div>
  )
}