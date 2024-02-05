import Header from "../components/Header";
import styles from "../styles/page/about.module.css";
import svce from "../assets/images/svce.jpg";

const About: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.about}>
                    <h1 className={styles.title}>About</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae unde fugiat consequatur minima exercitationem blanditiis velit temporibus nobis animi molestias porro doloribus ut quis explicabo numquam tempore laudantium, dolorum a tempora, quasi atque aliquid! Repellat rerum dicta vero qui, suscipit reiciendis distinctio, eaque ipsam consectetur, officiis optio fugit. Unde omnis deleniti illum laborum dolore repellat reprehenderit ipsam alias obcaecati aut quod voluptatibus est molestiae inventore accusantium voluptatum esse asperiores, consectetur quidem quaerat consequuntur neque? Totam excepturi eligendi modi, cupiditate facere corporis, alias impedit, deleniti ipsam odio sed! Deserunt ut consequuntur at nesciunt vero veniam nobis. Doloremque vitae veritatis omnis.</h3>
                </div>
                <div className={styles.aboutSvce}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.title} style={{ textAlign: 'end', marginBottom: '3%' }}>About SVCE</h1>
                        <h3 className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio et fuga cupiditate, perspiciatis qui ex dolores deleniti ratione natus commodi error, tempore impedit beatae iste asperiores autem? Amet, est debitis harum quia corporis illo consequatur quod vel sapiente. Ipsa sequi facilis delectus. Exercitationem voluptas eaque atque, quo, illo explicabo quia ex optio natus at libero vel. Eaque quisquam rerum tempore voluptatibus fugiat earum ullam voluptates architecto dolores et saepe assumenda repellendus, omnis, repellat quod debitis commodi minima ipsum necessitatibus.</h3>
                    </div>
                    <img src={svce} alt="SVCE COLLEGE" className={styles.img} />
                </div>
            </div>
        </>
    )
}


export default About;
