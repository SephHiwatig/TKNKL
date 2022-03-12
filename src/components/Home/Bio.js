import { react } from "react";
import styles from "./Bio.module.css";
import artist from "./../../assets/artist.jpg";

function Bio() {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Title}>Genesis Lazaro</h1>

      <div className={styles.BioInfoWrapper}>
        <p className={styles.BioInfo}>
          Genesis, born in the Philippines, has a passion for drawing and
          painting since he was young. He was introduced to tattooing when he
          was 16 years old by his father who gave him his first tattoo machine.
          In 2019, he studied visual arts to expand his knowledge and skills in
          art and transitioned from making his masterpieces from paper to live
          skin canvas.
        </p>
      </div>

      <hr className={styles.Bar} />

      <div className={styles.MoreInfoWrapper}>
        <div className={styles.MoreInfoImageWrapper}>
          <img className={styles.MoreInfoImage} src={artist} />
        </div>

        <div className={styles.MoreInfo}>
          <h2 className={styles.InfoTitle}>STYLE</h2>
          <p className={styles.Info}>
            Genesis would accept any genre of tattoo project within his
            capacity. Black and gray realism would be his niche.
          </p>
          <h2 className={styles.InfoTitle}>SCHEDULE</h2>
          <p className={styles.Info}>
            Genesis is available during the week MONDAY to FRIDAY starting at
            11H00 in the morning onwards.
          </p>
          <h2 className={styles.InfoTitle}>CONSULTATION</h2>
          <p className={styles.Info}>
            For big and complex projects, Genesis prefer to do the consultation
            in person. You can send him a message to book a consultation
            appointment in the shop. Online consultation is possible for smaller
            and simpler projects. * A deposit is required to book your tattoo
            appointment.
          </p>
          <h2 className={styles.InfoTitle}>PRICING/DEPOSIT</h2>
          <p className={styles.Info}>
            Genesis base his price on size and design for medium and large
            projects. He charges a minimum of $ 150 (tax included) for walk in
            sized tattoos and charges per piece on larger projects depending on
            the size, details and technicality of the design A non-refundable
            deposit of $ 100 is required to book the tattoo sessions. The
            deposit is deducted on the final cost for the day. * If you need to
            re-book a date, a minimum of one week notice is required. Failure to
            notify us within the said time frame will cost you your deposit and
            will be required to do another deposit to re-book your project. We
            accept cash payments or E-transfer. We do NOT accept PayPal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
