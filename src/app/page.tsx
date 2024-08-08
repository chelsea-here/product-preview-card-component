import Image from "next/image";
import "../../public/icon-cart.svg";
import styles from "./styles/page.module.scss";
import ResponsiveProductImage from "./components/responsiveProductImage";

export default function Home() {
  const price: number = 149.99;
  const retailPrice: number = 169.99;
  const productName: string = "Gabrielle Essence Eau De Parfum";

  return (
    <>
      <main className={styles.main}>
        <div className={styles.previewContainer}>
          <div className={styles.productImage}>
            <ResponsiveProductImage />
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.category}>PERFUME</p>
            <h1 className={styles.name}>{productName}</h1>
            <p className={styles.description}>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className={styles.prices}>
              <b className={styles.price}>${price}</b>
              <p className={styles.retailPrice}>${retailPrice}</p>
            </div>
            <a className={styles.button}>
              <Image
                className={styles.icon}
                src="/icon-cart.svg"
                height={16}
                width={15}
                alt="cart icon"
              />
              Add to Cart
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
