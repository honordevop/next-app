import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            veritatis porro beatae expedita consequuntur aliquam voluptatem,
            iste eos consequatur quos quis assumenda animi quisquam, cum saepe
            deserunt modi, mollitia obcaecati?
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17267137/pexels-photo-17267137/free-photo-of-istanbul-cityscape-panorama-with-ships-in-a-bosphorus-strait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            reiciendis similique placeat ea quae illum debitis, eius velit neque
            nemo natus laudantium aperiam voluptatem, totam quibusdam aliquam
            maxime dicta aut.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17267137/pexels-photo-17267137/free-photo-of-istanbul-cityscape-panorama-with-ships-in-a-bosphorus-strait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
