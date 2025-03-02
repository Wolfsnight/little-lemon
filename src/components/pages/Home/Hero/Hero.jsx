import styles from "./Hero.module.css"

import ButtonLink from "@/components/common/ButtonLink/ButtonLink.jsx";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div >
        <h1 >Little Lemon</h1 >
      
        <p >
          Visit Little Lemon – your cozy spot with a Mediterranean touch!
          Enjoy homemade specialties, fresh ingredients, and aromatic coffee in
          a relaxed atmosphere. Perfect for food lovers and coffee enthusiasts!
        </p >


        <ButtonLink
          label="Reserve a Table"
          href="https://google.com"
          className="buttonLink"
        />


      </div >
      
      <img src="/images/lemon.jpg" alt="" />
      


    </section >
  )
}

export default Hero
