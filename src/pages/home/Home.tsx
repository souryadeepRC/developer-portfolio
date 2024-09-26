import styles from "src/pages/home/Home.module.scss";
const Home: React.FC = () => {
  return (
    <div className={styles.home__container}>
      <section className={styles["display-image__container"]}>
        <span>Hi I'm Souryadeep</span>
      </section>

      <div className={styles.banner__container}>
        <q className={styles.display__quote}>
          Accomplished Senior React JS Developer with 7+ years of experience in
          building dynamic, responsive, and scalable web applications. Expertise
          in modern JavaScript frameworks, particularly React, alongside
          proficiency in UI/UX design, performance optimization, and state
          management (Redux, Context API). A results-driven leader, skilled at
          driving projects from concept to deployment, mentoring teams, and
          collaborating with cross-functional stakeholders. Proven track record
          in delivering high-quality, maintainable code and spearheading
          initiatives to improve front-end architecture. Eager to leverage
          extensive experience in a leadership role to shape innovative UI
          solutions and enhance user experiences.
        </q>
      </div>
    </div>
  );
};
export default Home;
