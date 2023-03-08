/*eslint-disable*/
import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="men's clothing" />
        <CategoryCard image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" name="women's clothing" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="electronics" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" name="jewelery" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </div>
    </main>
  );
};

export default HomePage;