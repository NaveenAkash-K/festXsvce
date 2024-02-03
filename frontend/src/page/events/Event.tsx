import styles from '../../styles/events/event.module.css';
import ae from '../../assets/auto.jpg';
import bt from '../../assets/biotech.jpeg';
import ce from '../../assets/chemical.jpg';
import civil from '../../assets/civil.jpg';
import cs from '../../assets/cs.webp';
import ece from '../../assets/ece.jpg';
import eee from '../../assets/eee.jpeg';
import it from '../../assets/IT.jpg';
import me from '../../assets/mech.webp';
import club from '../../assets/clubs.png';
import workshops from '../../assets/workshop.jpg';
import pros from '../../assets/proshow.jpg'

function Event() {
    interface data {
        name: string,
        img: string,
    }

    const dept: data[] = [
        { name: "Automobile Engineering", img: ae },
        { name: "BioTechnology", img: bt },
        { name: "Chemical Engineering", img: ce },
        { name: "Civil Engineering", img: civil },
        { name: "Computer Science", img: cs },
        { name: "ECE", img: ece },
        { name: "EEE", img: eee },
        { name: "Information Technology", img: it },
        { name: "Mechanical Engineering", img: me },
        { name: "Clubs", img: club },
        { name: "Workshops", img: workshops },
        { name: "Proshows", img: pros }
    ]

    interface menuStruct {
        name: string,
        link: string
    }
    const menu: menuStruct[] = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#About" },
        { name: "Events", link: "#Events" },
        { name: "GetPass", link: "#Pass" },
        { name: "Workshops", link: "#Workshop" },
        { name: "ProShows", link: "#ProShows" },
        { name: "Location", link: "#Location" },
        { name: "Contact", link: "#Contact" }
    ];

    return (
        <div className={styles.bo}>
            <div className={styles.container}>
                <h1>Events</h1>
                <div className={styles.deptContainer}>
                    {dept.map((data, index) => (
                        <div className={styles.dept} key={index}>
                            <img src={data.img} alt={data.img} className={styles.img} />
                            <p className={styles.title}>{data.name}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.contactContainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.media}>
                            <p>A national level Technical Fest</p>
                        </div>
                        <div className={styles.menuContainer}>
                            <h2 className={styles.header}>Menu</h2>
                            {menu.map((data, index) => (
                                <div className={styles.menu} key={index}>
                                    <a href={data.link} style={{ margin: '3% 0', textAlign: 'left' }} >{data.name}</a>
                                </div>
                            ))}
                        </div>
                        <div className={styles.contact}>
                            <h2 className={styles.header}>Contact Us</h2>
                            <div className={styles.address}>
                                <p>Mail: xyz@svce.ac.in</p>
                                <p>Number: 9999999999</p> 
                                <p>Address: Sri Venkateswara College Of Engineering,Post Bag No.1,Pennalur
                                Village Chennai - Bengaluru High Road Sriperumbudur Tk,Tamil Nadu 602117
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <p>Copyright &copy; 2024 All Rights Reserved</p> */}
                </div>
            </div>
        </div>
    )
}

export default Event
